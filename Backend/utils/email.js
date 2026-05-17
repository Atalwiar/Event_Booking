import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


export const sendEmail = async (email, otp, type) => {
  try{
    const title = type === "account_verification" ? "Verify Your Account " : "Reset Password";
    const msg = type === "account_verification" ? "please use the following OTP to verify your new Event account" : "please use the following OTP to verify and confirm your event";
const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: type,
    html: `<h2>Hi ${otp}</h2>
    <p>you booking for event <strong>${type}</strong> is successfully confirm </p>
    <p>thank you for choosing Event </p>
    `
  }
 await transporter.sendMail(mailOption);
 console.log(`OTP mail send to ${email} for ${type}`);
 
  }catch(error){
    console.log(error);
    
  }
}