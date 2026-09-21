/**
 * Small WCAG helpers so accent colours stay readable wherever they're used.
 * The bright brand green (#3ECF8E) and the amber accent are fine as fills and
 * decoration, but fail contrast as small text on white and with white text on
 * top of them. These pick a compliant colour automatically per accent.
 */

const toRgb = (hex: string): [number, number, number] => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h.slice(0, 6);
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const toHex = ([r, g, b]: number[]) =>
  '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');

const luminance = (rgb: number[]) => {
  const [r, g, b] = rgb.map(v => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(toRgb(a)), luminance(toRgb(b))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

/** Text colour (near-black or white) that reads best on a solid `bg` fill. */
export const onAccent = (bg: string) =>
  contrast(bg, '#0a0f0d') >= contrast(bg, '#ffffff') ? '#0a0f0d' : '#ffffff';

/** Darken `hex` just enough to hit `min` contrast against `bg` (default white). */
export function textOnLight(hex: string, bg = '#ffffff', min = 4.8) {
  let rgb = toRgb(hex);
  for (let i = 0; i < 24 && contrast(toHex(rgb), bg) < min; i++) {
    rgb = rgb.map(v => v * 0.92) as [number, number, number];
  }
  return toHex(rgb);
}
