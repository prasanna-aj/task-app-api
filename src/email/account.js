const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  //   try {
  sgMail.send({
    to: email,
    from: "ajprasannasai@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Thanks for choosing Us :) `,
  });
  //   } catch (error) {
  //     console.log(error);
  //   }
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ajaprasannasai@gmail.com",
    subject: "Good Bye!",
    text: "Thanks for using our service. Hope to see you soon again! :)",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
