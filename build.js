/**
 * @REVIEW: Build script for Chrome theme generation
 * Compiles TypeScript configuration and generates production manifest
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * @REVIEW: Theme build configuration
 */
const BUILD_CONFIG = {
  sourceDir: path.join(__dirname, 'assets'),
  outputDir: path.join(__dirname),
  manifestFile: 'manifest.json',
  
  // Image placeholders - Replace with actual images
/*   imagePlaceholders: [
    'images/frame.png',
    'images/toolbar.png', 
    'images/ntp_background.png',
    'images/attribution.png'
  ], */
  
  iconSizes: [16, 32, 48, 128],
};

/**
 * @REVIEW: Create placeholder images
 * Generates minimal PNG files for theme testing
 */
async function createPlaceholderImages() {
  console.log('🎨 Creating placeholder images...');
  
  const imagePromises = BUILD_CONFIG.imagePlaceholders.map(
    async (imagePath) => {
      const fullPath = path.join(BUILD_CONFIG.outputDir, imagePath);
      await fs.mkdir(path.dirname(fullPath), { recursive: true });
      
      // Create minimal 1x1 transparent PNG for testing
      const minimalPNG = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
        0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, // IHDR chunk
        0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, // 1x1 dimensions
        0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4, // RGBA, no compression
        0x89, 0x00, 0x00, 0x00, 0x0B, 0x49, 0x44, 0x41, // IDAT chunk
        0x54, 0x78, 0x9C, 0x62, 0x00, 0x02, 0x00, 0x00, // Minimal data
        0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00, // CRC
        0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE, // IEND chunk
        0x42, 0x60, 0x82
      ]);
      
      await fs.writeFile(fullPath, minimalPNG);
      console.log(`  ✓ Created ${imagePath}`);
    }
  );
  
  await Promise.all(imagePromises);
}

/**
 * @REVIEW: Create placeholder icons
 * Generates extension icons for Chrome Web Store
 */
async function createPlaceholderIcons() {
  console.log('🚀 Creating extension icons...');
  
  const iconPromises = BUILD_CONFIG.iconSizes.map(async (size) => {
    const iconPath = path.join(BUILD_CONFIG.outputDir, 'icons', `icon-${size}.png`);
    await fs.mkdir(path.dirname(iconPath), { recursive: true });
    
    // Create minimal PNG for icon
    const minimalIconPNG = Buffer.from([
      0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
      0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
      0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x10, // 16x16 size
      0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4,
      0x89, 0x00, 0x00, 0x00, 0x0B, 0x49, 0x44, 0x41,
      0x54, 0x78, 0x9C, 0x62, 0x00, 0x02, 0x00, 0x00,
      0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00,
      0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE,
      0x42, 0x60, 0x82
    ]);
    
    await fs.writeFile(iconPath, minimalIconPNG);
    console.log(`  ✓ Created icon-${size}.png`);
  });
  
  await Promise.all(iconPromises);
}

/**
 * @REVIEW: Validate manifest.json
 * Ensures manifest follows Chrome extension requirements
 */
async function validateManifest() {
  console.log('✅ Validating manifest.json...');
  
  try {
    const manifestPath = path.join(BUILD_CONFIG.outputDir, BUILD_CONFIG.manifestFile);
    const manifestContent = await fs.readFile(manifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    // Required fields validation
    const requiredFields = ['manifest_version', 'name', 'version', 'theme'];
    const missingFields = requiredFields.filter(field => !(field in manifest));
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    // Manifest version validation
    if (manifest.manifest_version !== 3) {
      throw new Error('Theme must use manifest_version 3 for latest Chrome compatibility');
    }
    
    // Theme structure validation
    if (!manifest.theme || typeof manifest.theme !== 'object') {
      throw new Error('Theme object is required and must be an object');
    }
    
    console.log('  ✓ Manifest validation passed');
    console.log(`  ✓ Theme name: ${manifest.name}`);
    console.log(`  ✓ Version: ${manifest.version}`);
    
  } catch (error) {
    console.error('❌ Manifest validation failed:', error.message);
    process.exit(1);
  }
}

/**
 * @REVIEW: Main build process
 * Orchestrates the complete theme build
 */
async function buildTheme() {
  console.log('🏗️  Building Kanso Zen Chrome Theme...\n');
  
  try {
    /* await createPlaceholderImages(); */
    console.log();
    
    /* await createPlaceholderIcons(); */
    console.log();
    
    await validateManifest();
    console.log();
    
    console.log('🎉 Theme build completed successfully!');
    console.log('\n📦 Installation Instructions:');
    console.log('1. Open Chrome and go to chrome://extensions/');
    console.log('2. Enable "Developer mode" in the top right');
    console.log('3. Click "Load unpacked" and select this folder');
    console.log('4. The Kanso Zen theme will be applied automatically');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Execute build if run directly
if (require.main === module) {
  buildTheme();
}

module.exports = { buildTheme, validateManifest };