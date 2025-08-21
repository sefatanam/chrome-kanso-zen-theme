/**
 * @REVIEW: Chrome theme debugging helper
 * Provides step-by-step verification of theme loading
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * @REVIEW: Check all required files exist
 */
async function checkFiles() {
  console.log('🔍 Checking theme files...\n');
  
  const requiredFiles = [
    'manifest.json',
    'icons/icon-16.png',
    'icons/icon-32.png', 
    'icons/icon-48.png',
    'icons/icon-128.png'
  ];
  
  let allFilesExist = true;
  
  for (const file of requiredFiles) {
    try {
      const stats = await fs.stat(path.join(__dirname, file));
      console.log(`✅ ${file} (${stats.size} bytes)`);
    } catch (error) {
      console.log(`❌ ${file} - MISSING`);
      allFilesExist = false;
    }
  }
  
  return allFilesExist;
}

/**
 * @REVIEW: Validate manifest.json structure
 */
async function checkManifest() {
  console.log('\n📋 Checking manifest.json...\n');
  
  try {
    const manifestContent = await fs.readFile(path.join(__dirname, 'manifest.json'), 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    // Required fields check
    const required = ['manifest_version', 'name', 'version', 'theme'];
    for (const field of required) {
      if (manifest[field]) {
        console.log(`✅ ${field}: ${typeof manifest[field] === 'object' ? 'present' : manifest[field]}`);
      } else {
        console.log(`❌ ${field}: MISSING`);
      }
    }
    
    // Theme colors check
    if (manifest.theme && manifest.theme.colors) {
      console.log(`\n🎨 Theme colors found: ${Object.keys(manifest.theme.colors).length} colors`);
      
      // Show some key colors for verification
      const keyColors = ['frame', 'toolbar', 'ntp_background'];
      for (const color of keyColors) {
        if (manifest.theme.colors[color]) {
          console.log(`   ${color}: [${manifest.theme.colors[color].join(', ')}]`);
        }
      }
    }
    
    return true;
  } catch (error) {
    console.log(`❌ Manifest error: ${error.message}`);
    return false;
  }
}

/**
 * @REVIEW: Provide installation instructions
 */
function showInstallationSteps() {
  console.log('\n🚀 Chrome Installation Steps:\n');
  console.log('1. Open Chrome browser');
  console.log('2. Type in address bar: chrome://extensions/');
  console.log('3. Toggle "Developer mode" ON (top-right switch)');
  console.log('4. Click "Load unpacked" button');
  console.log('5. Navigate to and SELECT this folder:');
  console.log(`   ${__dirname}`);
  console.log('6. Click "Select Folder" or "Open"');
  console.log('\n📍 What you should see IMMEDIATELY:');
  console.log('   - Red toolbar background');
  console.log('   - Green new tab page');
  console.log('   - Purple address bar');
  console.log('   - Yellow buttons');
  console.log('\nIf you see these colors, the theme is working!');
}

/**
 * @REVIEW: Show troubleshooting steps
 */
function showTroubleshooting() {
  console.log('\n🔧 If theme still not visible:\n');
  console.log('1. Check chrome://extensions/ for errors:');
  console.log('   - Look for red "Errors" button next to theme');
  console.log('   - Click to see detailed error messages');
  console.log('\n2. Try reloading the extension:');
  console.log('   - Click refresh icon ↻ next to theme');
  console.log('   - Or remove and re-add the extension');
  console.log('\n3. Check Chrome theme settings:');
  console.log('   - Go to chrome://settings/appearance');
  console.log('   - Look for "Themes" section');
  console.log('   - Should show your theme is active');
  console.log('\n4. Chrome version check:');
  console.log('   - Go to chrome://settings/help');
  console.log('   - Ensure Chrome 88+ (for Manifest V3)');
  console.log('\n5. Clear Chrome theme cache:');
  console.log('   - chrome://settings/appearance');
  console.log('   - Click "Reset to default"');
  console.log('   - Then reload your theme extension');
}

/**
 * @REVIEW: Main debug function
 */
async function debugTheme() {
  console.log('🐛 CHROME THEME DEBUG TOOL\n');
  console.log('=' * 50 + '\n');
  
  // Check files
  const filesOk = await checkFiles();
  
  // Check manifest
  const manifestOk = await checkManifest();
  
  // Show results
  console.log('\n📊 DEBUG SUMMARY:');
  console.log(`Files: ${filesOk ? '✅ All present' : '❌ Missing files'}`);
  console.log(`Manifest: ${manifestOk ? '✅ Valid' : '❌ Invalid'}`);
  
  if (filesOk && manifestOk) {
    console.log('\n🎉 Theme files are ready!');
    showInstallationSteps();
  } else {
    console.log('\n⚠️  Issues found. Fix the problems above first.');
  }
  
  showTroubleshooting();
}

if (require.main === module) {
  debugTheme();
}

module.exports = { debugTheme };