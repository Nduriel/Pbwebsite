const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aros0885@gmail.com', // your email address to send email from
    pass: 'wqqkvudujclwvnqd' // your gmail account password
  }
});

module.exports = transporter;