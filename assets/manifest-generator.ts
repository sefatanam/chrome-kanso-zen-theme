/**
 * @REVIEW: Chrome Theme Manifest Generator
 * Generates valid Chrome theme manifest.json from color configuration
 */

import { 
  KANSO_ZEN_COLORS, 
  KANSO_ZEN_TINTS, 
  KANSO_ZEN_PROPERTIES 
} from './colors';

interface IChromeThemeManifest {
  readonly manifest_version: 3;
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly icons: Record<string, string>;
  readonly theme: IChromeThemeConfig;
}

interface IChromeThemeConfig {
  readonly images: Record<string, string>;
  readonly colors: Record<string, readonly [number, number, number]>;
  readonly tints: Record<string, readonly [number, number, number]>;
  readonly properties: Record<string, string | number>;
}

/**
 * @REVIEW: Generate complete Chrome theme manifest
 * Factory function creating standardized theme configuration
 */
export const createChromeThemeManifest = (): IChromeThemeManifest => ({
  manifest_version: 3,
  name: 'Kanso Zen Theme',
  version: '1.0.0',
  description: 'A minimalist Zen-inspired Chrome theme with balanced color harmony',
  
  icons: {
    '16': 'icons/icon-16.png',
    '32': 'icons/icon-32.png',
    '48': 'icons/icon-48.png',
    '128': 'icons/icon-128.png',
  },

  theme: {
    images: {
      theme_frame: 'images/frame.png',
      theme_toolbar: 'images/toolbar.png',
      theme_ntp_background: 'images/ntp_background.png',
      theme_ntp_attribution: 'images/attribution.png',
    },

    colors: {
      // Frame colors
      frame: KANSO_ZEN_COLORS.primary.dark,
      frame_inactive: KANSO_ZEN_COLORS.primary.light,
      frame_incognito: KANSO_ZEN_COLORS.primary.dark,
      frame_incognito_inactive: KANSO_ZEN_COLORS.primary.medium,
      
      // Toolbar colors
      toolbar: KANSO_ZEN_COLORS.secondary.snow,
      tab_text: KANSO_ZEN_COLORS.primary.dark,
      tab_background_text: KANSO_ZEN_COLORS.neutral.gray,
      bookmark_text: KANSO_ZEN_COLORS.primary.dark,
      
      // New Tab Page colors
      ntp_background: KANSO_ZEN_COLORS.secondary.snow,
      ntp_text: KANSO_ZEN_COLORS.primary.dark,
      ntp_link: KANSO_ZEN_COLORS.accent.blue,
      ntp_section: KANSO_ZEN_COLORS.secondary.frost,
      ntp_section_text: KANSO_ZEN_COLORS.primary.accent,
      ntp_section_link: KANSO_ZEN_COLORS.accent.blue,
      
      // UI element colors
      button_background: KANSO_ZEN_COLORS.neutral.white,
      omnibox_background: KANSO_ZEN_COLORS.neutral.white,
      omnibox_text: KANSO_ZEN_COLORS.primary.dark,
    },

    tints: {
      buttons: KANSO_ZEN_TINTS.buttons,
      frame: KANSO_ZEN_TINTS.frame,
      frame_inactive: KANSO_ZEN_TINTS.frameInactive,
      frame_incognito: KANSO_ZEN_TINTS.frameIncognito,
      frame_incognito_inactive: KANSO_ZEN_TINTS.frameIncognitoInactive,
      background_tab: KANSO_ZEN_TINTS.backgroundTab,
    },

    properties: {
      ntp_background_alignment: KANSO_ZEN_PROPERTIES.ntpBackgroundAlignment,
      ntp_background_repeat: KANSO_ZEN_PROPERTIES.ntpBackgroundRepeat,
      ntp_logo_alternate: KANSO_ZEN_PROPERTIES.ntpLogoAlternate,
    },
  },
});

/**
 * @REVIEW: Validation utility for Chrome theme manifest
 */
export const validateThemeManifest = (manifest: IChromeThemeManifest): boolean => {
  const requiredFields = ['manifest_version', 'name', 'version', 'theme'];
  return requiredFields.every(field => field in manifest);
};

/**
 * @REVIEW: Export the generated manifest
 */
export const KANSO_ZEN_MANIFEST = createChromeThemeManifest();