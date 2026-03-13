const { getInfo } = require('@changesets/get-github-info');

const repo = 'wangdicoder/tiny-design';

const getReleaseLine = async (changeset, _type) => {
  const [firstLine, ...rest] = changeset.summary.split('\n').map((l) => l.trimEnd());

  // Try to get PR and commit info from GitHub
  let prLink = '';
  let commitLink = '';

  if (changeset.commit) {
    try {
      const { links } = await getInfo({ repo, commit: changeset.commit });
      prLink = links.pull || '';
      commitLink = links.commit || '';
    } catch {
      // Fall back to just the commit hash
      const short = changeset.commit.slice(0, 7);
      commitLink = `[\`${short}\`](https://github.com/${repo}/commit/${changeset.commit})`;
    }
  }

  const suffix = [prLink, commitLink].filter(Boolean).join(' ');
  const firstLineStr = suffix ? `- ${firstLine} - ${suffix}` : `- ${firstLine}`;
  const restStr = rest.length > 0 ? `\n${rest.map((l) => `  ${l}`).join('\n')}` : '';

  return `\n${firstLineStr}${restStr}`;
};

const getDependencyReleaseLine = async () => {
  // Omit "Updated dependencies" section
  return '';
};

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
