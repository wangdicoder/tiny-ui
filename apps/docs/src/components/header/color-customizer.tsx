import React, { useEffect, useState } from 'react';
import { ColorPicker } from '@tiny-ui/react';
import { hexToHsb, hsbToHex } from '@tiny-ui/react/color-picker/utils';

const STORAGE_KEY = 'ty-primary-color';
const DEFAULT_COLOR = '#6e41bf';

const PRESET_COLORS = [
  DEFAULT_COLOR,  // purple (default)
  '#1677ff',      // blue
  '#0ea5e9',      // sky
  '#06b6d4',      // cyan
  '#14b8a6',      // teal
  '#f43f5e',      // rose
  '#ec4899',      // pink
  '#8b5cf6',      // violet
  '#6366f1',      // indigo
  '#0f172a',      // slate
];

const TOKEN_MAP: Record<string, (h: number, s: number, b: number) => { s: number; b: number }> = {
  '--ty-color-primary-hover': (_, s, b) => ({
    s: Math.max(0, s - 10),
    b: Math.min(100, b + 12),
  }),
  '--ty-color-primary-active': (_, s, b) => ({
    s,
    b: Math.max(0, b - 10),
  }),
  '--ty-color-primary-bg': () => ({ s: 15, b: 98 }),
  '--ty-color-primary-border': () => ({ s: 35, b: 90 }),
  '--ty-color-primary-bg-hover': () => ({ s: 20, b: 96 }),
  '--ty-color-primary-text-hover': (_, s, b) => ({
    s: Math.max(0, s - 10),
    b: Math.min(100, b + 12),
  }),
};

function applyPrimaryColor(hex: string) {
  const { h, s, b } = hexToHsb(hex);
  const style = document.documentElement.style;
  style.setProperty('--ty-color-primary', hex);

  const derived: Record<string, string> = {};
  for (const [token, derive] of Object.entries(TOKEN_MAP)) {
    const d = derive(h, s, b);
    const value = hsbToHex({ h, s: d.s, b: d.b, a: 1 });
    style.setProperty(token, value);
    derived[token] = value;
  }

  // Update component-specific tokens that hardcode the primary color
  const hover = derived['--ty-color-primary-hover'];
  const active = derived['--ty-color-primary-active'];
  const bg = derived['--ty-color-primary-bg'];
  const bgHover = derived['--ty-color-primary-bg-hover'];

  // Button default variant
  style.setProperty('--ty-btn-default-hover-border', hex);
  style.setProperty('--ty-btn-default-hover-color', hex);
  style.setProperty('--ty-btn-default-active-border', active);
  style.setProperty('--ty-btn-default-active-color', active);

  // Button ghost & outline variants
  style.setProperty('--ty-btn-ghost-hover-bg', bg);
  style.setProperty('--ty-btn-ghost-active-bg', bgHover);
  style.setProperty('--ty-btn-outline-hover-bg', bg);
  style.setProperty('--ty-btn-outline-active-bg', bgHover);

  // Input focus
  style.setProperty('--ty-input-focus-border', hex);
  style.setProperty('--ty-input-focus-shadow', `0 0 0 2px ${hsbToHex({ h, s, b, a: 0.2 })}`);

  // Select
  style.setProperty('--ty-select-option-selected-bg', bg);
}

export const ColorCustomizer = (): React.ReactElement => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_COLOR;
  });

  useEffect(() => {
    if (color !== DEFAULT_COLOR) {
      applyPrimaryColor(color);
    }
  }, []);

  const handleChange = (hex: string) => {
    setColor(hex);
    applyPrimaryColor(hex);
    if (hex === DEFAULT_COLOR) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, hex);
    }
  };

  return (
    <ColorPicker
      value={color}
      onChange={handleChange}
      presets={PRESET_COLORS}
      trigger="click">
      <button
        className="header__color-swatch"
        aria-label="Change primary color"
        title="Change primary color"
        style={{ backgroundColor: color }}
      />
    </ColorPicker>
  );
};
