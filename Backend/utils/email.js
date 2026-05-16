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


const sendEmail = async (email, otp, type) => {
  try{
const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: type,
    text: `Your OTP is ${otp}`,
  }
 await transporter.sendMail(mailOption);
  }catch(error){
    console.log(error);
    
  }
}