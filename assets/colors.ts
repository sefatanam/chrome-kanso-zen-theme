/**
 * @REVIEW: Color palette configuration for Kanso Zen theme
 * Centralized color management following design system principles
 */

interface IThemeColors {
  readonly primary: IColorGroup;
  readonly secondary: IColorGroup;
  readonly neutral: IColorGroup;
  readonly accent: IColorGroup;
}

interface IColorGroup {
  readonly [key: string]: readonly [number, number, number];
}

/**
 * @REVIEW: Kanso Zen Theme Color System
 * Based on Nordic/Arctic color palette with Zen minimalism
 */
export const KANSO_ZEN_COLORS: IThemeColors = {
  // Primary colors - Core brand colors
  primary: {
    dark: [46, 52, 64] as const,      // #2E3440 - Primary dark
    medium: [59, 66, 82] as const,    // #3B4252 - Secondary dark
    light: [67, 76, 94] as const,     // #434C5E - Tertiary dark
    accent: [76, 86, 106] as const,   // #4C566A - Quaternary dark
  } as const,

  // Secondary colors - Supporting elements  
  secondary: {
    snow: [236, 239, 244] as const,   // #ECEFF4 - Snow storm light
    frost: [229, 233, 240] as const,  // #E5E9F0 - Snow storm medium
    mist: [216, 222, 233] as const,   // #D8DEE9 - Snow storm dark
  } as const,

  // Neutral colors - Text and backgrounds
  neutral: {
    white: [255, 255, 255] as const,  // #FFFFFF - Pure white
    light: [248, 248, 242] as const,  // #F8F8F2 - Off white
    gray: [136, 146, 176] as const,   // #8896B0 - Muted gray
  } as const,

  // Accent colors - Interactive elements
  accent: {
    blue: [88, 166, 255] as const,    // #58A6FF - Bright blue
    frost: [94, 129, 172] as const,   // #5E81AC - Frost blue
    aurora: [163, 190, 140] as const, // #A3BE8C - Aurora green
  } as const,
} as const;

/**
 * @REVIEW: Theme tints configuration
 * HSL values for UI element adjustments
 */
export const KANSO_ZEN_TINTS = {
  buttons: [0.6, 0.1, 0.95] as const,
  frame: [0.6, 0.05, 0.25] as const,
  frameInactive: [0.6, 0.05, 0.35] as const,
  frameIncognito: [0.6, 0.05, 0.25] as const,
  frameIncognitoInactive: [0.6, 0.05, 0.35] as const,
  backgroundTab: [0.6, 0.05, 0.85] as const,
} as const;

/**
 * @REVIEW: Theme properties configuration
 * Layout and visual properties
 */
export const KANSO_ZEN_PROPERTIES = {
  ntpBackgroundAlignment: 'center' as const,
  ntpBackgroundRepeat: 'no-repeat' as const,
  ntpLogoAlternate: 0 as const,
} as const;

/**
 * @REVIEW: Utility function to convert color tuples to hex
 */
export const rgbToHex = ([r, g, b]: readonly [number, number, number]): string =>
  `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;

/**
 * @REVIEW: Color validation utility
 */
export const isValidRgbColor = ([r, g, b]: readonly [number, number, number]): boolean =>
  [r, g, b].every(value => Number.isInteger(value) && value >= 0 && value <= 255);