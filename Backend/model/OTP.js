import mongoose from "mongoose";

const OTP = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  otp:{
    type:String,
    required:true
  },
  action{
    type:String,
    enum:['account_verification','resetpassword'],
  },
  createdAt:{
    type:Date,
    default:Date.now(),
    expire:300
  }
})

export default mongoose.model("OTP",OTP)