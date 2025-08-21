/**
 * @REVIEW: Kanso Zen Color System - Authentic kanso.nvim palette
 * Based on the official Kanso Neovim theme color specifications
 * Refs: https://github.com/webhooked/kanso.nvim
 */

interface IKansoColors {
  readonly zen: IZenColorGroup;
  readonly ink: IInkColorGroup;
  readonly mist: IMistColorGroup;
  readonly alt: IAltColorGroup;
  readonly diff: IDiffColorGroup;
  readonly git: IGitColorGroup;
  readonly main: IMainColorGroup;
  readonly saturated: ISaturatedColorGroup;
  readonly fg: IForegroundColorGroup;
  readonly pearl: IPearlColorGroup;
}

interface IZenColorGroup {
  readonly bg0: readonly [number, number, number];
  readonly bg1: readonly [number, number, number];
  readonly bg2: readonly [number, number, number];
  readonly bg3: readonly [number, number, number];
}

interface IInkColorGroup {
  readonly bg0: readonly [number, number, number];
  readonly bg1: readonly [number, number, number];
  readonly bg2: readonly [number, number, number];
  readonly bg3: readonly [number, number, number];
  readonly bg4: readonly [number, number, number];
}

interface IMistColorGroup {
  readonly bg0: readonly [number, number, number];
  readonly bg1: readonly [number, number, number];
  readonly bg2: readonly [number, number, number];
  readonly bg3: readonly [number, number, number];
}

interface IAltColorGroup {
  readonly blue1: readonly [number, number, number];
  readonly blue2: readonly [number, number, number];
}

interface IDiffColorGroup {
  readonly green: readonly [number, number, number];
  readonly yellow: readonly [number, number, number];
  readonly red: readonly [number, number, number];
  readonly blue: readonly [number, number, number];
}

interface IGitColorGroup {
  readonly green: readonly [number, number, number];
  readonly red: readonly [number, number, number];
  readonly yellow: readonly [number, number, number];
}

interface IMainColorGroup {
  readonly red: readonly [number, number, number];
  readonly red2: readonly [number, number, number];
  readonly red3: readonly [number, number, number];
  readonly yellow: readonly [number, number, number];
  readonly yellow2: readonly [number, number, number];
  readonly yellow3: readonly [number, number, number];
  readonly green: readonly [number, number, number];
  readonly green2: readonly [number, number, number];
  readonly green3: readonly [number, number, number];
  readonly green4: readonly [number, number, number];
  readonly green5: readonly [number, number, number];
  readonly blue: readonly [number, number, number];
  readonly blue2: readonly [number, number, number];
  readonly blue3: readonly [number, number, number];
  readonly blue4: readonly [number, number, number];
  readonly violet: readonly [number, number, number];
  readonly violet2: readonly [number, number, number];
  readonly violet3: readonly [number, number, number];
  readonly pink: readonly [number, number, number];
  readonly orange: readonly [number, number, number];
  readonly orange2: readonly [number, number, number];
  readonly aqua: readonly [number, number, number];
}

interface ISaturatedColorGroup {
  readonly red: readonly [number, number, number];
  readonly green: readonly [number, number, number];
  readonly blue: readonly [number, number, number];
  readonly yellow: readonly [number, number, number];
  readonly violet: readonly [number, number, number];
  readonly orange: readonly [number, number, number];
  readonly aqua: readonly [number, number, number];
}

interface IForegroundColorGroup {
  readonly primary: readonly [number, number, number];
  readonly secondary: readonly [number, number, number];
  readonly gray: readonly [number, number, number];
  readonly gray2: readonly [number, number, number];
  readonly gray3: readonly [number, number, number];
  readonly gray4: readonly [number, number, number];
  readonly gray5: readonly [number, number, number];
}

interface IPearlColorGroup {
  readonly white0: readonly [number, number, number];
  readonly white1: readonly [number, number, number];
  readonly gray: readonly [number, number, number];
  readonly blue1: readonly [number, number, number];
  readonly green: readonly [number, number, number];
  readonly yellow: readonly [number, number, number];
  readonly red: readonly [number, number, number];
  readonly violet1: readonly [number, number, number];
}

/**
 * @REVIEW: Official Kanso Color Palette
 * Hex values converted to RGB for Chrome theme compatibility
 */
export const KANSO_COLORS: IKansoColors = {
  // Zen Background Shades (darkest theme)
  zen: {
    bg0: [9, 14, 19] as const,      // #090E13
    bg1: [28, 30, 37] as const,     // #1C1E25
    bg2: [34, 38, 45] as const,     // #22262D
    bg3: [57, 59, 68] as const,     // #393B44
  } as const,

  // Ink Background Shades (primary dark theme)
  ink: {
    bg0: [20, 23, 29] as const,     // #14171d
    bg1: [31, 31, 38] as const,     // #1f1f26
    bg2: [34, 38, 45] as const,     // #22262D
    bg3: [57, 59, 68] as const,     // #393B44
    bg4: [75, 78, 87] as const,     // #4b4e57
  } as const,

  // Mist Background Shades
  mist: {
    bg0: [34, 38, 45] as const,     // #22262D
    bg1: [42, 44, 53] as const,     // #2a2c35
    bg2: [57, 59, 68] as const,     // #393B44
    bg3: [92, 96, 102] as const,    // #5C6066
  } as const,

  // Alternative Blues
  alt: {
    blue1: [34, 50, 73] as const,   // #223249
    blue2: [45, 79, 103] as const,  // #2D4F67
  } as const,

  // Diff Colors
  diff: {
    green: [43, 51, 40] as const,   // #2B3328
    yellow: [73, 68, 60] as const,  // #49443C
    red: [67, 36, 43] as const,     // #43242B
    blue: [37, 37, 53] as const,    // #252535
  } as const,

  // Git Colors
  git: {
    green: [118, 148, 106] as const, // #76946A
    red: [195, 64, 67] as const,     // #C34043
    yellow: [220, 165, 97] as const, // #DCA561
  } as const,

  // Main Color Palette
  main: {
    red: [195, 64, 67] as const,     // #C34043
    red2: [228, 104, 118] as const,  // #E46876
    red3: [196, 116, 110] as const,  // #c4746e
    yellow: [220, 165, 97] as const, // #DCA561
    yellow2: [230, 195, 132] as const, // #E6C384
    yellow3: [196, 178, 138] as const, // #c4b28a
    green: [152, 187, 108] as const, // #98BB6C
    green2: [135, 169, 135] as const, // #87a987
    green3: [138, 154, 123] as const, // #8a9a7b
    green4: [106, 149, 137] as const, // #6A9589
    green5: [122, 168, 159] as const, // #7AA89F
    blue: [127, 180, 202] as const,  // #7FB4CA
    blue2: [101, 133, 148] as const, // #658594
    blue3: [139, 164, 176] as const, // #8ba4b0
    blue4: [142, 164, 162] as const, // #8ea4a2
    violet: [147, 138, 169] as const, // #938AA9
    violet2: [137, 146, 167] as const, // #8992a7
    violet3: [148, 159, 181] as const, // #949fb5
    pink: [162, 146, 163] as const,  // #a292a3
    orange: [182, 146, 123] as const, // #b6927b
    orange2: [185, 141, 123] as const, // #b98d7b
    aqua: [142, 164, 162] as const,  // #8ea4a2
  } as const,

  // Saturated Variants (20% more saturation)
  saturated: {
    red: [201, 49, 52] as const,     // #C93134
    green: [143, 192, 85] as const,  // #8FC055
    blue: [110, 187, 212] as const,  // #6EBBD4
    yellow: [229, 159, 73] as const, // #E59F49
    violet: [138, 136, 176] as const, // #8A88B0
    orange: [188, 138, 108] as const, // #BC8A6C
    aqua: [129, 170, 169] as const,  // #81AAA9
  } as const,

  // Foreground and Text
  fg: {
    primary: [197, 201, 199] as const, // #C5C9C7
    secondary: [242, 241, 239] as const, // #f2f1ef
    gray: [113, 124, 124] as const,   // #717C7C
    gray2: [164, 167, 164] as const,  // #A4A7A4
    gray3: [144, 147, 152] as const,  // #909398
    gray4: [117, 121, 127] as const,  // #75797f
    gray5: [92, 96, 102] as const,    // #5C6066
  } as const,

  // Pearl Theme (light variant)
  pearl: {
    white0: [242, 241, 239] as const, // #f2f1ef
    white1: [226, 225, 223] as const, // #e2e1df
    gray: [226, 225, 223] as const,   // #e2e1df
    blue1: [199, 215, 224] as const,  // #c7d7e0
    green: [111, 137, 78] as const,   // #6f894e
    yellow: [119, 113, 63] as const,  // #77713f
    red: [200, 64, 83] as const,      // #c84053
    violet1: [160, 156, 172] as const, // #a09cac
  } as const,
} as const;

/**
 * @REVIEW: Chrome Theme Color Mapping
 * Maps Kanso colors to Chrome theme elements
 */
export const KANSO_CHROME_THEME = {
  colors: {
    // Browser Frame (Zen bg0 for deepest dark)
    frame: KANSO_COLORS.zen.bg0,
    frame_inactive: KANSO_COLORS.zen.bg1,
    frame_incognito: KANSO_COLORS.ink.bg0,
    frame_incognito_inactive: KANSO_COLORS.ink.bg2,
    
    // Toolbar (Ink bg2 for main interface)
    toolbar: KANSO_COLORS.ink.bg2,
    tab_text: KANSO_COLORS.fg.primary,
    tab_background_text: KANSO_COLORS.fg.gray,
    bookmark_text: KANSO_COLORS.fg.primary,
    
    // New Tab Page
    ntp_background: KANSO_COLORS.ink.bg2,
    ntp_text: KANSO_COLORS.fg.primary,
    ntp_link: KANSO_COLORS.main.blue,
    ntp_section: KANSO_COLORS.zen.bg3,
    ntp_section_text: KANSO_COLORS.fg.gray2,
    ntp_section_link: KANSO_COLORS.main.green,
    
    // UI Elements
    button_background: KANSO_COLORS.zen.bg3,
    omnibox_background: KANSO_COLORS.ink.bg2,
    omnibox_text: KANSO_COLORS.fg.primary,
    control_background: KANSO_COLORS.zen.bg3,
    tab_background: KANSO_COLORS.zen.bg1,
  },
  
  tints: {
    // Subtle tints based on Kanso color theory
    buttons: [0.19, 0.13, 0.33] as const,      // Violet-tinted
    frame: [0.58, 0.40, 0.07] as const,        // Zen depth
    frame_inactive: [0.58, 0.29, 0.15] as const,
    frame_incognito: [0.58, 0.35, 0.11] as const,
    frame_incognito_inactive: [0.58, 0.25, 0.18] as const,
    background_tab: [0.58, 0.20, 0.15] as const,
  },
} as const;

/**
 * @REVIEW: Utility functions for color management
 */
export const hexToRgb = (hex: string): readonly [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] as const
    : [0, 0, 0] as const;
};

export const rgbToHex = ([r, g, b]: readonly [number, number, number]): string =>
  `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;

/**
 * @REVIEW: Color validation
 */
export const isValidKansoColor = ([r, g, b]: readonly [number, number, number]): boolean =>
  [r, g, b].every(value => Number.isInteger(value) && value >= 0 && value <= 255);