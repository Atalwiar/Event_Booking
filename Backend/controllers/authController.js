import User from "../model/User.js";

const Register = async (req,res)=>{
  res.send("Ragister")
}

const Login = async (req,res)=>{
  res.send("Login")
}

const verifyOpt = async (req,res)=>{
  res.send("verifyOpt")
}

export {Login,Register,verifyOpt}

