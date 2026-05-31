import type { ThemeMode } from './useTheme';

export type Rgb = readonly [number, number, number];

/** Neon cyber spectrum — dark backgrounds */
export const HERO_PALETTE_DARK: Rgb[] = [
  [46, 230, 214],   // 0 cyan
  [0, 191, 255],    // 1 blue
  [108, 59, 255],   // 2 purple
  [255, 157, 0],    // 3 orange
  [255, 174, 28],   // 4 amber (logo)
  [89, 22, 235],    // 5 violet (logo)
  [0, 185, 150],    // 6 teal-green (logo)
  [151, 1, 154],    // 7 magenta (logo)
];

/** Jewel / paper aurora — light backgrounds (distinct hues, not neon) */
export const HERO_PALETTE_LIGHT: Rgb[] = [
  [13, 148, 136],   // 0 teal
  [37, 99, 235],    // 1 royal blue
  [99, 102, 241],   // 2 indigo
  [249, 115, 22],   // 3 coral
  [217, 119, 6],    // 4 amber
  [124, 58, 237],   // 5 violet
  [5, 150, 105],    // 6 emerald
  [225, 29, 72],    // 7 rose
];

export const LOGO_BRAND_DARK = {
  primary: HERO_PALETTE_DARK[0],
  secondary: HERO_PALETTE_DARK[1],
  tertiary: HERO_PALETTE_DARK[2],
  accent: HERO_PALETTE_DARK[3],
} as const;

export const LOGO_BRAND_LIGHT = {
  primary: HERO_PALETTE_LIGHT[0],
  secondary: HERO_PALETTE_LIGHT[1],
  tertiary: HERO_PALETTE_LIGHT[2],
  accent: HERO_PALETTE_LIGHT[3],
} as const;

export function getHeroPalette(mode: ThemeMode): Rgb[] {
  return mode === 'light' ? HERO_PALETTE_LIGHT : HERO_PALETTE_DARK;
}

export function getLogoBrand(mode: ThemeMode) {
  return mode === 'light' ? LOGO_BRAND_LIGHT : LOGO_BRAND_DARK;
}

export function heroColor(idx: number, alpha: number, mode: ThemeMode): string {
  const [r, g, b] = getHeroPalette(mode)[idx % 8];
  const scale = mode === 'light' ? 1.08 : 1;
  return `rgba(${r},${g},${b},${(alpha * scale).toFixed(3)})`;
}

/** Neural circuit traces */
export function circuitRgb(mode: ThemeMode): [number, number, number] {
  return mode === 'light' ? [99, 102, 241] : [108, 59, 255];
}

export function rgba(rgb: Rgb, a: number): string {
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
}
