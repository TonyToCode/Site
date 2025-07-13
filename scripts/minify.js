#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { minify } = require('terser');
const cssnano = require('cssnano');
const postcss = require('postcss');

// Minify JavaScript files
async function minifyJS(inputPath, outputPath) {
  try {
    const code = fs.readFileSync(inputPath, 'utf8');
    const result = await minify(code, {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn']
      },
      mangle: true,
      format: {
        comments: false
      }
    });
    
    fs.writeFileSync(outputPath, result.code);
    console.log(`✅ Minified JS: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error minifying ${inputPath}:`, error);
  }
}

// Minify CSS files
async function minifyCSS(inputPath, outputPath) {
  try {
    const css = fs.readFileSync(inputPath, 'utf8');
    const result = await postcss([cssnano({ preset: 'default' })])
      .process(css, { from: inputPath, to: outputPath });
    
    fs.writeFileSync(outputPath, result.css);
    console.log(`✅ Minified CSS: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error minifying ${inputPath}:`, error);
  }
}

// Create minified versions
async function createMinifiedAssets() {
  console.log('🚀 Starting asset minification...');
  
  // Ensure dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Minify JavaScript files
  const jsFiles = [
    'assets/js/config.js',
    'assets/js/locations.js',
    'assets/js/maps.js',
    'assets/js/logo3d.js'
  ];
  
  for (const file of jsFiles) {
    const inputPath = path.join(__dirname, '..', file);
    const outputPath = path.join(distDir, file.replace('.js', '.min.js'));
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    if (fs.existsSync(inputPath)) {
      await minifyJS(inputPath, outputPath);
    }
  }
  
  // Minify CSS files
  const cssFiles = [
    'assets/css/styles.css',
    'assets/css/rsm-official.css',
    'assets/css/premium-design.css'
  ];
  
  for (const file of cssFiles) {
    const inputPath = path.join(__dirname, '..', file);
    const outputPath = path.join(distDir, file.replace('.css', '.min.css'));
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    if (fs.existsSync(inputPath)) {
      await minifyCSS(inputPath, outputPath);
    }
  }
  
  console.log('✨ Asset minification complete!');
}

// Run if called directly
if (require.main === module) {
  createMinifiedAssets().catch(console.error);
}

module.exports = { minifyJS, minifyCSS, createMinifiedAssets };