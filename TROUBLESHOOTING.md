# 🔧 Troubleshooting: Theme Not Applying

## Issue: Theme loads but doesn't appear to change Chrome's appearance

### ✅ Quick Debugging Steps

#### 1. Verify Extension Loading
1. Go to `chrome://extensions/`
2. Look for **"Kanso Zen Theme"** in the list
3. Check if it shows **"Errors"** button (red text)
4. If errors exist, click to view details

#### 2. Check Theme Application  
Chrome themes apply **automatically** when loaded. You should see:

**Immediate Changes:**
- **Address bar background**: Should be yellow (test color)
- **New Tab Page background**: Should be light blue  
- **Toolbar**: Should have blue tint
- **Links**: Should be red (test color)

#### 3. Force Theme Refresh
```bash
# In Chrome:
1. Go to chrome://settings/appearance
2. Look for "Themes" section
3. You should see your theme is active
4. Try clicking "Reset to default" then reload your extension
```

#### 4. Test with Obvious Colors
I've updated the manifest with **very obvious test colors**:
- Yellow address bar
- Blue toolbar/new tab page  
- Red links
- Green buttons

If you still don't see changes, the issue is with loading, not colors.

#### 5. Alternative Loading Method
Instead of drag & drop, try:
```bash
1. chrome://extensions/
2. Enable "Developer mode" 
3. Click "Load unpacked" button
4. Navigate to and SELECT the folder
5. Click "Select Folder" or "Open"
```

#### 6. Check Chrome Version
```bash
# In Chrome:
1. Go to chrome://settings/help
2. Ensure Chrome version is 88+ (for Manifest V3)
3. If older, themes may not work properly
```

#### 7. Console Debugging
```bash
# Open Chrome DevTools (F12)
1. Go to Console tab
2. Look for any red error messages
3. Search for "extension" or "theme" related errors
4. Copy any error messages for debugging
```

### 🚨 Common Issues & Solutions

#### Issue: Extension shows "Errors"
**Solution**: Click errors button, fix manifest issues

#### Issue: Extension loads but no visual changes
**Solution**: Check if Chrome is using system theme override

#### Issue: Drag & drop doesn't work  
**Solution**: Use "Load unpacked" button instead

#### Issue: Theme appears then disappears
**Solution**: Check for file permission issues, try copying folder to Desktop first

### 📋 Quick Test Checklist

After loading the extension, check these elements:

- [ ] **Address bar**: Yellow background
- [ ] **New tab page**: Light blue background  
- [ ] **Toolbar**: Blue-tinted
- [ ] **Links**: Red color
- [ ] **Buttons**: Green background

If ANY of these show the test colors, the theme is working!

### 🔄 Reset and Retry

If nothing works:
```bash
1. Remove extension from chrome://extensions/
2. Restart Chrome completely
3. Clear any cached extension data
4. Try loading again with "Load unpacked"
```

---

**Next Steps**: Try the updated theme with obvious test colors, then report which specific elements (if any) are changing.