const fs = require('fs');
const path = require('path');

const directoryPath = 'src';
const filePath = path.join(directoryPath, 'index.js');

// Create the 'src' directory
fs.mkdirSync(directoryPath);

// Create the 'index.js' file
fs.writeFileSync(filePath, '');

console.log('Directory and file created successfully.');
