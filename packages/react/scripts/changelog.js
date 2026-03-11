#!/usr/bin/env node

/**
 * Automated changelog generator.
 *
 * Detects when package.json version differs from the latest CHANGELOG.md
 * version and generates a new changelog entry from component-related
 * conventional commits.
 *
 * Usage: node scripts/changelog.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const CHANGELOG_PATH = path.join(ROOT, 'CHANGELOG.md');
const PKG_PATH = path.join(ROOT, 'package.json');
const REPO_URL = 'https://github.com/wangdicoder/tiny-ui';

const TYPE_MAP = {
  feat: 'Features',
  fix: 'Bug Fixes',
  refactor: 'Refactors',
  perf: 'Performance',
};

const ALLOWED_TYPES = new Set(Object.keys(TYPE_MAP));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function run(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf-8' }).trim();
}

/** Read current version from package.json */
function getPackageVersion() {
  const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf-8'));
  return pkg.version;
}

/** Extract the latest version string from CHANGELOG.md (first ## [x.y.z] header) */
function getChangelogVersion() {
  const content = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
  const match = content.match(/^## \[(\d+\.\d+\.\d+)]/m);
  return match ? match[1] : null;
}

/**
 * Convert a kebab-case scope (e.g. "back-top") to PascalCase component name
 * wrapped in JSX notation: `<BackTop />`
 */
function scopeToComponentTag(scope) {
  if (!scope) return null;
  const pascal = scope
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
  return `\`<${pascal} />\``;
}

/**
 * Parse a conventional commit message.
 * Returns { type, scope, description } or null.
 */
function parseCommitMessage(message) {
  const match = message.match(/^(\w+)(?:\(([^)]+)\))?:\s*(.+)$/);
  if (!match) return null;
  return { type: match[1], scope: match[2] || null, description: match[3] };
}

/**
 * Check whether a commit touched files under components/ (excluding demo/).
 */
function touchesComponents(hash) {
  const files = run(`git diff-tree --no-commit-id --name-only -r ${hash}`);
  return files.split('\n').some(
    (f) => f.startsWith('components/') && !f.includes('/demo/')
  );
}

/**
 * Get today's date in YYYY-MM-DD format.
 */
function today() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const pkgVersion = getPackageVersion();
  const clVersion = getChangelogVersion();

  if (pkgVersion === clVersion) {
    console.log(
      `No version change detected (package.json and CHANGELOG.md are both at ${pkgVersion}).`
    );
    process.exit(0);
  }

  console.log(`Version bump detected: ${clVersion} → ${pkgVersion}`);

  // Find the commit that last touched CHANGELOG.md (our baseline).
  const baseCommit = run('git log -1 --format=%H -- CHANGELOG.md');
  if (!baseCommit) {
    console.error('Could not find a commit that last modified CHANGELOG.md.');
    process.exit(1);
  }

  // Gather commits from baseline (exclusive) to HEAD.
  const logOutput = run(
    `git log ${baseCommit}..HEAD --format=%H%n%s%n---`
  );

  if (!logOutput) {
    console.log('No new commits found since last CHANGELOG.md update.');
    process.exit(0);
  }

  const rawEntries = logOutput.split('\n---\n').filter(Boolean);
  const grouped = {};
  for (const key of Object.keys(TYPE_MAP)) {
    grouped[key] = [];
  }

  for (const entry of rawEntries) {
    const lines = entry.split('\n');
    const hash = lines[0];
    const message = lines[1];
    if (!hash || !message) continue;

    const parsed = parseCommitMessage(message);
    if (!parsed) continue;
    if (!ALLOWED_TYPES.has(parsed.type)) continue;
    if (!touchesComponents(hash)) continue;

    const shortHash = hash.slice(0, 7);
    const tag = scopeToComponentTag(parsed.scope);
    const bullet = tag
      ? `* ${tag} - ${parsed.description} ([${shortHash}](${REPO_URL}/commit/${shortHash}))`
      : `* ${parsed.description} ([${shortHash}](${REPO_URL}/commit/${shortHash}))`;

    grouped[parsed.type].push(bullet);
  }

  // Check if we have anything to write.
  const hasEntries = Object.values(grouped).some((arr) => arr.length > 0);
  if (!hasEntries) {
    console.log(
      'No component-related conventional commits found in the range. CHANGELOG.md not updated.'
    );
    process.exit(0);
  }

  // Build the new section.
  const compareUrl = `${REPO_URL}/compare/v${clVersion}...v${pkgVersion}`;
  const sectionLines = [
    `## [${pkgVersion}](${compareUrl}) (${today()})`,
    '',
  ];

  for (const [type, label] of Object.entries(TYPE_MAP)) {
    if (grouped[type].length === 0) continue;
    sectionLines.push(`### ${label}`, '');
    for (const line of grouped[type]) {
      sectionLines.push(line);
    }
    sectionLines.push('');
  }

  const newSection = sectionLines.join('\n');

  // Insert after the header block (everything before the first ## [...] line).
  const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
  const firstVersionIdx = changelog.search(/^## \[/m);
  if (firstVersionIdx === -1) {
    console.error('Could not locate existing version header in CHANGELOG.md.');
    process.exit(1);
  }

  const header = changelog.slice(0, firstVersionIdx);
  const rest = changelog.slice(firstVersionIdx);
  const updated = header + newSection + '\n' + rest;

  fs.writeFileSync(CHANGELOG_PATH, updated, 'utf-8');
  console.log(`CHANGELOG.md updated with version ${pkgVersion}.`);
}

main();
