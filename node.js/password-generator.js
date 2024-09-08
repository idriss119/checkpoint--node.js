// Require the generate-password package
const generatePassword = require('generate-password');

function generateAndLogPassword() {
  // Generate a password
  const password = generatePassword.generate({
    length: 12,  
    numbers: true,  
    symbols: false,  
    strict : true,
  });

  console.log('Generated Password:', password);
}

generateAndLogPassword();
    