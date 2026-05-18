import Booking from "../model/Booking.js";
import OTP from "../model/OTP.js";
import User from "../model/User.js";
import Event from "../model/Event.js";
import { sendEmail, sendBookingEmail } from "../utils/email.js";

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const sendBookingOTP = async (email, otp, type) => {
  try {
    const otp = generateOTP();
    await OTP.findByIdAndDelete({email: req.user.email, action: "booking"});
      await OTP.create({email: req.user.email, otp:otp, action: "booking"});
      await sendEmail(req.user.email, otp, 'event booking');
      res.json({message: "OTP sent successfully"});
  } catch (error) {
    console.log(error);
  }
}