const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: {
    name: 'B RAMBABU',
    address: process.env.USER
  },
  to: ["ashokkumargolagana@gmail.com"], // Array of receivers
  subject: "Hello ashok", // Subject line
  text: "Hello ashok", // Plain text body
  html: "<b>Hello ashok</b>", // HTML body
  attachments: [{
      filename: 'term paper.pdf',
      path: path.join(__dirname, 'term paper.pdf'),
      contentType: 'application/pdf'
    },
    {
      filename: 'download.jpeg',
      path: path.join(__dirname, 'download.jpeg'),
      contentType: 'image/jpeg'
    },
  ]
};

const sendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
};

sendMail(mailOptions); // Only pass mailOptions here
