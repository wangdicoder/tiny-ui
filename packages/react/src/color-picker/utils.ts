import { Color } from './types';

export const hexToHsb = (hex: string): Color => {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');

  let a = 1;
  if (h.length === 8) {
    a = parseInt(h.slice(6, 8), 16) / 255;
    h = h.slice(0, 6);
  }

  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let hue = 0;
  if (d !== 0) {
    if (max === r) hue = ((g - b) / d + 6) % 6;
    else if (max === g) hue = (b - r) / d + 2;
    else hue = (r - g) / d + 4;
    hue *= 60;
  }

  const saturation = max === 0 ? 0 : (d / max) * 100;
  const brightness = max * 100;

  return { h: Math.round(hue), s: Math.round(saturation), b: Math.round(brightness), a };
};

export const hsbToHex = (color: Color): string => {
  const { h, s, b, a } = color;
  const sNorm = s / 100;
  const bNorm = b / 100;

  const c = bNorm * sNorm;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = bNorm - c;

  let r = 0, g = 0, bl = 0;
  if (h < 60) { r = c; g = x; bl = 0; }
  else if (h < 120) { r = x; g = c; bl = 0; }
  else if (h < 180) { r = 0; g = c; bl = x; }
  else if (h < 240) { r = 0; g = x; bl = c; }
  else if (h < 300) { r = x; g = 0; bl = c; }
  else { r = c; g = 0; bl = x; }

  const toHex = (v: number) => Math.round((v + m) * 255).toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
  if (a < 1) {
    return hex + Math.round(a * 255).toString(16).padStart(2, '0');
  }
  return hex;
};

export const hsbToRgb = (color: Color): string => {
  const hex = hsbToHex(color);
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  if (color.a < 1) {
    return `rgba(${r}, ${g}, ${b}, ${color.a.toFixed(2)})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

export const formatColor = (color: Color, format: string): string => {
  switch (format) {
    case 'rgb':
      return hsbToRgb(color);
    case 'hsb':
      return `hsb(${color.h}, ${color.s}%, ${color.b}%)`;
    default:
      return hsbToHex(color);
  }
};

export const parseColor = (input: string): Color => {
  if (!input) return { h: 0, s: 100, b: 100, a: 1 };

  // hex
  if (input.startsWith('#')) {
    return hexToHsb(input);
  }

  // rgb/rgba
  const rgbMatch = input.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]) / 255;
    const g = parseInt(rgbMatch[2]) / 255;
    const b = parseInt(rgbMatch[3]) / 255;
    const a = rgbMatch[4] ? parseFloat(rgbMatch[4]) : 1;
    const hex = `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
    return { ...hexToHsb(hex), a };
  }

  return { h: 0, s: 100, b: 100, a: 1 };
};
