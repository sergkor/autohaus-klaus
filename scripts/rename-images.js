const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Path to the images directory
const imagesDir = path.join(__dirname, '../public/images');

// Read all files in the directory
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for PNG files
  const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
  
  // Create a mapping of old names to new GUID names
  const nameMapping = {};
  
  // Rename each file
  pngFiles.forEach(file => {
    const oldPath = path.join(imagesDir, file);
    const extension = path.extname(file);
    const newFileName = `${uuidv4()}${extension}`;
    const newPath = path.join(imagesDir, newFileName);
    
    // Store the mapping
    nameMapping[file] = newFileName;
    
    // Rename the file
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming ${file}:`, err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
  
  // Write the mapping to a JSON file for reference
  fs.writeFile(
    path.join(__dirname, '../image-mapping.json'),
    JSON.stringify(nameMapping, null, 2),
    (err) => {
      if (err) {
        console.error('Error writing mapping file:', err);
      } else {
        console.log('Image mapping saved to image-mapping.json');
      }
    }
  );
}); 