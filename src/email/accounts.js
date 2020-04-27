const sgmail = require("@sendgrid/mail");
const setapikey =
  "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";

sgmail.setApiKey(setapikey);
sendemail = async () => {
  try {
    await sgmail.send({
      from: "ajprasannasai@gmail.com",
      to: "ajprasannasai@gmail.com",
      subject: "First Try",
      text: "Hi from te other side",
    });
  } catch (e) {
    console.log(e);
  }
  sendemail();
};
