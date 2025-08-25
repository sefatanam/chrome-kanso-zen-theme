# Kanso Zen Browser Theme Installation Guide

## Overview
This is the **native CSS theme** for Zen Browser using the authentic Kanso color palette. Unlike browser extensions, this provides deep integration with Zen Browser's interface using CSS custom properties.

## 🚀 Quick Installation

### Step 1: Find Your Zen Browser Profile
1. Open Zen Browser
2. Type `about:support` in the address bar
3. Look for "Profile Folder" and click "Open Folder"
4. This opens your profile directory

### Step 2: Create Chrome Directory
1. In your profile folder, create a new folder called `chrome`
2. If the folder already exists, that's perfect!

### Step 3: Install Theme Files
1. Copy `userChrome.css` to `[Profile]/chrome/userChrome.css`
2. Copy `userContent.css` to `[Profile]/chrome/userContent.css`

### Step 4: Enable userChrome.css
1. Type `about:config` in Zen Browser
2. Search for `toolkit.legacyUserProfileCustomizations.stylesheets`
3. Set it to `true` (double-click to toggle)

### Step 5: Restart Zen Browser
Close and reopen Zen Browser to see the Kanso theme applied!

## 📁 File Structure
After installation, your profile should look like:
```
[Profile Directory]/
├── chrome/
│   ├── userChrome.css    ← Browser interface styling
│   └── userContent.css   ← Website content styling
└── [other profile files]
```

## 🎨 Theme Features

### Browser Interface (userChrome.css)
- **Zen Background**: Deep dark `#090e13` for minimal eye strain
- **Ink Interface**: Primary dark `#22262d` for main UI elements
- **Kanso Colors**: Authentic blue `#7fb4ca`, violet `#938aa9`, green `#98bb6c`
- **Smart Accents**: Context-aware color highlighting
- **Zen Integration**: Native CSS variable mapping

### Website Content (userContent.css)
- **Internal Pages**: Themed new tab, settings, add-ons, downloads
- **Form Elements**: Dark input fields with Kanso accent colors
- **Code Styling**: Enhanced syntax highlighting backgrounds
- **PDF Viewer**: Consistent dark theme for document viewing
- **Website Fixes**: Improved readability for popular sites

## 🛠️ Customization

### Accent Color Variants
Add these attributes to your browser for different accent colors:

```css
/* Green accent */
:root[zen-accent="green"] { /* Already included */ }

/* Violet accent */  
:root[zen-accent="violet"] { /* Already included */ }

/* Orange accent */
:root[zen-accent="orange"] { /* Already included */ }
```

### Color Variables
All Kanso colors are available as CSS variables:

```css
/* Backgrounds */
--kanso-zen-bg0: #090e13;    /* Deepest dark */
--kanso-ink-bg2: #22262d;    /* Primary interface */
--kanso-zen-bg3: #393b44;    /* Elevated elements */

/* Foregrounds */
--kanso-fg-primary: #c5c9c7;   /* Main text */
--kanso-fg-secondary: #f2f1ef; /* Emphasized text */
--kanso-fg-gray: #717c7c;      /* Subdued text */

/* Accent Colors */
--kanso-main-blue: #7fb4ca;    /* Primary accent */
--kanso-main-green: #98bb6c;   /* Success states */
--kanso-main-red: #c34043;     /* Error states */
--kanso-main-yellow: #dca561;  /* Warning states */
```

## 🔧 Troubleshooting

### Theme Not Applying
1. **Check Profile Location**: Ensure you're in the correct profile folder
2. **Verify Chrome Folder**: Must be exactly `chrome` (lowercase)
3. **Enable userChrome**: `toolkit.legacyUserProfileCustomizations.stylesheets` = `true`
4. **Restart Required**: Always restart Zen Browser after changes
5. **File Names**: Ensure exact names `userChrome.css` and `userContent.css`

### Partial Theme Application
- **Browser Only**: Only `userChrome.css` is working - check `userContent.css` placement
- **Content Only**: Only `userContent.css` is working - verify userChrome setting in about:config
- **Mixed Results**: Clear browser cache and restart

### Performance Issues
- **Slow Loading**: CSS is extensive - this is normal on first load
- **Memory Usage**: CSS customizations use minimal additional memory
- **Compatibility**: Tested with Zen Browser latest versions

## 🔄 Updates

### Manual Updates
1. Download latest theme files
2. Replace existing files in `[Profile]/chrome/`
3. Restart Zen Browser

### Theme Versions
- **v1.0**: Initial Kanso theme implementation
- **Current**: Full Zen Browser integration with content styling

## 📋 Comparison with Extensions

| Feature | CSS Theme | Firefox Extension | Chrome Extension |
|---------|-----------|-------------------|------------------|
| **Integration** | ✅ Native | ⚠️ Limited | ✅ Good |
| **Customization** | ✅ Full Control | ❌ Fixed | ⚠️ Some Control |
| **Performance** | ✅ Fast | ✅ Fast | ✅ Fast |
| **Content Styling** | ✅ Full | ❌ None | ❌ None |
| **DevTools** | ✅ Themed | ❌ Default | ❌ Default |
| **Updates** | ⚠️ Manual | ✅ Automatic | ✅ Automatic |

## 💡 Tips

### Development Workflow
1. Edit CSS files in your favorite editor
2. Use browser's Developer Tools to test changes live
3. Press `Ctrl+Shift+I` to inspect themed elements
4. Use `!important` for stubborn style overrides

### Color Consistency
- All colors follow Kanso nvim specification
- RGB values match exactly with Chrome extension
- Hex values preserve Kanso authenticity

### Browser Compatibility
- **Zen Browser**: ✅ Full support (primary target)
- **Firefox**: ✅ Compatible (with limitations)
- **Chrome**: ❌ Not applicable (uses extensions)

## 🎯 What's Next

The CSS theme approach provides the best integration with Zen Browser. You now have:

1. **Complete Interface Theming**: Every element matches Kanso colors
2. **Content Styling**: Websites and internal pages follow the theme
3. **Professional Look**: Consistent with kanso.nvim editor theme
4. **Easy Customization**: Modify CSS variables to adjust colors
5. **Future-Proof**: Works with Zen Browser updates

Enjoy your beautifully themed Zen Browser with authentic Kanso colors! 🎨