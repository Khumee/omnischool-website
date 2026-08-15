const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'logo.png');
const outputPath = path.join(__dirname, 'public', 'logo_cropped.png');

sharp(inputPath)
  .trim() // Automatically trims "boring" pixels (like transparent or white whitespace) from all edges
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully cropped logo:', info);
  })
  .catch(err => {
    console.error('Error cropping logo:', err);
  });
