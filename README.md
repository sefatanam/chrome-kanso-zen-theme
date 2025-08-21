# Kanso Zen Chrome Theme

A minimalist Zen-inspired Chrome theme featuring harmonious colors and clean aesthetics, inspired by [kanso.nvim](https://github.com/webhooked/kanso.nvim).


## 🚀 Quick Start

### ⚡ Test Locally (30 seconds)
1. Run `npm run build`
2. Open `chrome://extensions/`
3. Enable Developer mode
4. Click "Load unpacked" → select this folder
5. ✅ Theme applies instantly!

### 📦 Publish to Chrome Store
1. See [QUICK_START.md](./QUICK_START.md) for fast publishing
2. See [TESTING_AND_PUBLISHING.md](./TESTING_AND_PUBLISHING.md) for detailed guide

## 🎨 Color Palette

### Primary Colors
- **Frame**: `#2D3440` (45, 52, 64) - Deep slate
- **Toolbar**: `#ECEFF4` (236, 239, 244) - Light frost
- **Background**: `#ECEFF4` (236, 239, 244) - Clean white

### Accent Colors  
- **Links**: `#58A6FF` (88, 166, 255) - Bright blue
- **Text**: `#2E3440` (46, 52, 64) - Dark charcoal
- **Secondary**: `#E5E9F0` (229, 233, 240) - Soft gray

## 📁 Project Structure

```
chrome-kanso-zen-theme/
├── manifest.json                    # ✅ Theme configuration
├── package.json                     # ✅ NPM scripts
├── build.js                        # ✅ Build automation
├── images/                         # ✅ Theme background images
├── icons/                          # ✅ Extension icons  
├── assets/                         # ✅ TypeScript configs
├── store-assets/                   # 📦 Chrome Web Store assets
├── docs/                          # 📚 Additional documentation
├── QUICK_START.md                 # ⚡ Fast testing & publishing
├── TESTING_AND_PUBLISHING.md      # 📖 Detailed guide
└── INSTALL.md                     # 🔧 Installation instructions
```

## 🎯 Theme Features

- **Manifest V3** - Latest Chrome compatibility
- **TypeScript configs** - Type-safe color management  
- **Build automation** - One-command asset generation
- **Minimalist design** - Zen-inspired aesthetic
- **High contrast** - Optimal readability
- **Store-ready** - Complete publishing workflow

## 🛠️ Development Commands

```bash
npm run build      # Generate theme assets
npm run validate   # Check manifest validity  
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