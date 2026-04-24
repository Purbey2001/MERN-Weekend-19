import express from "express";
import nodemailer from "nodemailer";
const PORT = 3000;

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "[EMAIL_ADDRESS]",
    pass: "replace your password",
  },
});
const mailOptions = {
  from: "[EMAIL_ADDRESS]",
  to: "[EMAIL_ADDRESS]",
  subject: "Welcome aboard!",
  text: "This is a test email sent from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.get("/", (req, res) => {
  res.end("hi");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
