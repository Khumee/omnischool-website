const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'logo.png');

// Trim whitespace from all sides, keeping a small extend for padding
sharp(inputPath)
  .trim({
    threshold: 10, // sensitivity for detecting "whitespace" pixels
  })
  .flatten({ background: { r: 255, g: 255, b: 255 } }) // ensure white background
  .extend({
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .toBuffer()
  .then(buffer => sharp(buffer).toFile(outputPath))
  .then(info => {
    console.log('Successfully cropped logo:', info);
  })
  .catch(err => {
    console.error('Error cropping logo:', err);
  });
