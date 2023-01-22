const nodemailer = require("nodemailer")
//another transport service for prod env called sendGrid
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
    let testaccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "baylee.harvey40@ethereal.email",
        pass: "XzXxt3UvRUD4pbB7Vx",
      },
    });

    let info = await transporter.sendMail({
      from: "coding monkey <lanre@example.com>",
      to: "bar@example.com",
      subject: "Hello world ✔",
      text: "Hello to myself!",
      html: "<p><b>Hello</b> to myself! from nodejs</p>",
    });

    res.json(info)
}

const sendEmail = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "iabdulkareem94@gmail.com", // Change to your recipient
      from: "alanre427@gmail.com", // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    const info = await sgMail.send(msg)
    
    res.json(info)
    
}

module.exports =sendEmail
