const fs = require('fs');
const path = require('path');

module.exports = function(source) {
  const filePath = this.resourcePath;
  const fileName = path.basename(filePath);
  
  // Read the file contents
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Return the file contents as a string
  return `export default ${JSON.stringify(fileContents)};`;
};