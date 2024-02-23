var nodemailer = require('nodemailer');

async function sendEmail(email, code) {
  try {
    // The body of the email for recipients
    var body_html = `<!DOCTYPE>
    <html>
    <body>
    <p>Your authentication code is : </p> <b>${code}</b>
    </body>
    </html>`;
    console.log("Here is email", email);
    console.log("Here is code", code);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
    });

    var mailOptions = {
      from: '',
      to: '',
      subject: 'Registration with node js',
      html: body_html
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log(info);
      }
    });
  } catch (error) {
    console.error("send-email-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot send email",
    });
    
    
  }
  // return { 
  //   'error': error, 
  //   'success': info.response 
  // }

}
module.exports = { sendEmail };
