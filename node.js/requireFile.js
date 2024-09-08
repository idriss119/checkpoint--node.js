const fs = require('fs');

// Content to write to the file

// Write to the file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File "welcome.txt" has been created with content: ', content);
});

const filePath = 'hello.txt';

// Read from file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(`Contents of "${filePath}":`);
  console.log(data);
});