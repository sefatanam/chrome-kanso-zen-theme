# Quick Start Guide

## 🚀 Instant Local Testing (30 seconds)

### Method 1: One-Click Install
```bash
# 1. Build the theme
npm run build

# 2. Open Chrome extensions page
# Copy and paste this in Chrome address bar:
chrome://extensions/

# 3. Enable Developer mode (toggle top-right)
# 4. Click "Load unpacked" 
# 5. Select this folder: chrome-kanso-zen-theme/
# 6. ✅ Theme applies instantly!
```

### Method 2: Drag & Drop
1. Open `chrome://extensions/` 
2. Enable **Developer mode**
3. Drag this entire folder into the page
4. ✅ Done!

---

## 📦 Chrome Web Store Publishing (Quick Path)

### Prerequisites ⚡
- Google account
- $5 Chrome Web Store developer fee (one-time)
- 30 minutes setup time

### Fast Track Steps

#### 1. Prepare Assets (5 minutes)
```bash
# Replace placeholder images with your designs
# Required: 128x128 icon + theme screenshots
```

#### 2. Package Theme (2 minutes)
```bash
# Create distribution package
zip -r kanso-zen-theme.zip . -x "*.git*" "*.md" "node_modules/*" "assets/*"
```

#### 3. Upload to Store (10 minutes)
1. Visit: https://chrome.google.com/webstore/devconsole/
2. Click **"Add new item"**
3. Upload ZIP file
4. Fill required fields:
   - **Name**: "Kanso Zen Theme"
   - **Description**: "Minimalist Zen-inspired Chrome theme"
   - **Category**: Themes > Fun
5. Upload icon + screenshots
6. Submit for review

#### 4. Go Live (1-3 days)
- Automatic review: ~2 minutes
- Manual review: 1-3 business days
- Auto-publish when approved

---

## 🎯 Essential Checklist

### Before Testing ✅
- [ ] `npm run build` completed successfully
- [ ] `npm run validate` passes
- [ ] All PNG files generated

### Before Publishing ✅
- [ ] Custom icons created (not placeholders)
- [ ] Theme screenshots captured
- [ ] Store description written
- [ ] Privacy policy added
- [ ] Developer account activated

### After Publishing ✅
- [ ] Monitor user reviews
- [ ] Respond to feedback
- [ ] Plan updates/improvements

---

*📖 For detailed instructions, see [TESTING_AND_PUBLISHING.md](./TESTING_AND_PUBLISHING.md)*