# Kanso Zen Multi-Browser Theme

A minimalist Zen-inspired theme featuring harmonious colors and clean aesthetics, inspired by [kanso.nvim](https://github.com/webhooked/kanso.nvim). Now supports **Chrome**, **Firefox**, and **Zen Browser** with native CSS integration.


## 🚀 Quick Start

### ⚡ Chrome (Extension)
1. Run `npm run build`
2. Open `chrome://extensions/`
3. Enable Developer mode
4. Click "Load unpacked" → select this folder
5. ✅ Theme applies instantly!

### 🦊 Firefox (Extension) 
1. Run `npm run build`
2. Open `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select `manifest-firefox.json`

### 🧘 Zen Browser (Native CSS Theme) - **RECOMMENDED**
1. Run `npm run zen`
2. Follow instructions in `zen-browser/ZEN_INSTALL.md`
3. Copy CSS files to your Zen profile
4. ✅ Full native integration!

### 📦 Publish to Chrome Store
1. See [QUICK_START.md](./QUICK_START.md) for fast publishing
2. See [TESTING_AND_PUBLISHING.md](./TESTING_AND_PUBLISHING.md) for detailed guide

## 🎨 Authentic Kanso Color Palette

### Background Hierarchy
- **Zen BG0**: `#090e13` (9, 14, 19) - Deepest dark for frame
- **Ink BG2**: `#22262d` (34, 38, 45) - Primary interface
- **Zen BG3**: `#393b44` (57, 59, 68) - Elevated elements

### Foreground Colors  
- **Primary**: `#c5c9c7` (197, 201, 199) - Main text
- **Secondary**: `#f2f1ef` (242, 241, 239) - Emphasized text
- **Gray**: `#717c7c` (113, 124, 124) - Subdued text

### Accent System
- **Blue**: `#7fb4ca` (127, 180, 202) - Primary accent
- **Green**: `#98bb6c` (152, 187, 108) - Success states
- **Yellow**: `#dca561` (220, 165, 97) - Warning states
- **Red**: `#c34043` (195, 64, 67) - Error states
- **Violet**: `#938aa9` (147, 138, 169) - Special accents

## 📁 Project Structure

```
kanso-zen-multi-browser-theme/
├── manifest.json                    # ✅ Chrome extension
├── manifest-firefox.json           # 🦊 Firefox extension  
├── zen-browser/                    # 🧘 Native CSS theme
│   ├── userChrome.css              #   └─ Browser interface
│   ├── userContent.css             #   └─ Website content  
│   ├── ZEN_INSTALL.md              #   └─ Installation guide
│   └── package-info.json           #   └─ Build metadata
├── package.json                     # ✅ NPM scripts
├── build.js                        # ✅ Multi-browser build
├── assets/                         # ✅ TypeScript configs
│   ├── kanso-colors.ts             #   └─ Authentic color system
│   └── colors.ts                   #   └─ Legacy colors
├── images/                         # ✅ Theme images
├── icons/                          # ✅ Extension icons  
└── docs/                          # 📚 Documentation
```

## 🎯 Multi-Browser Features

### Chrome Extension
- **Manifest V3** - Latest Chrome compatibility
- **WebExtensions API** - Standard extension format  
- **Auto-installation** - One-click theme application

### Firefox Extension  
- **Manifest V2** - Firefox compatibility
- **WebExtensions API** - Cross-browser standard
- **Hex color format** - Firefox-optimized colors

### Zen Browser CSS Theme - **BEST EXPERIENCE**
- **Native Integration** - Direct CSS variable mapping
- **Complete Theming** - Browser UI + website content
- **Developer Tools** - Themed debugging interface
- **Performance** - Zero extension overhead
- **Customizable** - Full CSS control

## 📊 Browser Comparison

| Feature | Chrome Extension | Firefox Extension | Zen Browser CSS |
|---------|------------------|-------------------|-----------------|
| **Installation** | ✅ One-click | ✅ One-click | ⚠️ Manual CSS |
| **Browser UI** | ✅ Full theming | ✅ Full theming | ✅ Complete control |
| **Website Content** | ❌ Not themed | ❌ Not themed | ✅ Full styling |
| **DevTools** | ❌ Default colors | ❌ Default colors | ✅ Kanso themed |
| **Performance** | ✅ Fast | ✅ Fast | ✅ Fastest |
| **Customization** | ⚠️ Limited | ⚠️ Limited | ✅ Full CSS |
| **Auto-updates** | ✅ Extension store | ✅ Extension store | ❌ Manual |
| **Integration** | ⚠️ Extension layer | ⚠️ Extension layer | ✅ Native |

**Recommendation**: Use **Zen Browser CSS** for the best experience, fallback to extensions for other browsers.
- **TypeScript configs** - Type-safe color management  
- **Build automation** - One-command asset generation
- **Minimalist design** - Zen-inspired aesthetic
- **High contrast** - Optimal readability
- **Store-ready** - Complete publishing workflow

## 🛠️ Development Commands

```bash
# Multi-browser build
npm run build          # Build all: Chrome + Firefox + Zen
npm run validate        # Validate all manifests and CSS

# Browser-specific
npm run build:chrome    # Validate Chrome manifest  
npm run build:firefox   # Validate Firefox manifest
npm run zen             # Build Zen Browser CSS theme

# Development
npm run debug           # Debug theme configuration  
npm run debug      # Debug theme installation
```

## 🔧 Customization

### Colors
Edit RGB values in `manifest.json`:
```json
"colors": {
  "frame": [45, 52, 64],
  "toolbar": [236, 239, 244]
}
```

### Images
Replace PNG files in `images/` directory:
- `frame.png` - Browser frame background
- `toolbar.png` - Toolbar background  
- `ntp_background.png` - New tab page background
- `attribution.png` - Attribution logo (see [current attribution](./images/attribution.png))

### Advanced Configuration
- **TypeScript configs**: `assets/colors.ts` and `assets/manifest-generator.ts`
- **Build customization**: `build.js`
- **Tints**: HSL adjustments for UI depth

## 💭 Why I Built This

Simple really - I wanted my entire development environment to match! 🎨

I'm already using kanso.nvim for my editor, matching themes for tmux and VSCode, so naturally Chrome needed to follow the same aesthetic. There's something satisfying about having that consistent dark, minimalist vibe across all your tools :D

It's all about that seamless workflow where everything just... *flows* together.

So it seems
![Kanso Zen Theme Preview](./images/attribution.png)

## 📚 Documentation

- **[Quick Start Guide](./QUICK_START.md)** - Fast testing & publishing
- **[Testing & Publishing](./TESTING_AND_PUBLISHING.md)** - Complete workflow
- **[Installation Guide](./INSTALL.md)** - Local testing instructions
- **[Development Resources](./docs/RESOURCES.md)** - Tools and references

## 🌟 Features

### ✅ Production Ready
- Manifest V3 compliance
- Chrome Web Store optimized
- Complete asset pipeline
- Validation and testing tools

### ✅ Developer Friendly  
- TypeScript configuration
- Build automation
- Asset generation
- Comprehensive documentation

### ✅ Design Excellence
- Nordic-inspired color palette
- Zen minimalist aesthetic
- High contrast accessibility
- Consistent visual harmony

---

## 🤖 Built With

This Chrome theme was built using:
- **[OpenCode](https://github.com/sst/opencode)** - AI-powered development environment
- **Claude Sonnet 4** - Advanced AI assistant for code generation and project management
- **Modern tooling** - TypeScript, Node.js, and automated build processes

## 🙏 Credits

This theme is inspired by the beautiful [kanso.nvim](https://github.com/webhooked/kanso.nvim) color scheme. Special thanks to the original creators for their elegant minimalist design philosophy.

*Ready to create your custom Chrome theme? Start with [QUICK_START.md](./QUICK_START.md) for instant testing!*