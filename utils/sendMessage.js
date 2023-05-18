const nodemailer = require('nodemailer'),
    ExpressError = require('./ExpressError');

module.exports.sendMail = async function (req, res, next) {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        }
    });
    
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO
    };

    const { name, email, message } = req.body;
    
    mailOptions.subject = `Website form. From ${name}`;
    mailOptions.text = `From: ${name}. Email: ${email}. Text: ${message}`;
    
    try {
        await transporter.sendMail(mailOptions).catch();  
      } catch (error) {
        next(new ExpressError('Something went wrong', 500));
      }
};
