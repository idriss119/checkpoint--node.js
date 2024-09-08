// Require nodemailer module
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rihab.naouar1996@gmail.com',  
    pass: '************'  
  }
});

let mailOptions = {
  from: 'rihab.naouar1996@gmail.com',  
  to: 'rihabbennaouar@gmail.com',  
  subject: 'Test Email',  
  text: 'Hello from Node.js'  
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred:', error);
  }
  console.log('Email sent successfully:', info.response);
});
