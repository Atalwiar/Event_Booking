import User from "../model/User.js";
import bcrypt from "bcryptjs";

//Register Api
const Register = async (req,res)=>{
 const {name,email,password} = req.body;
 const result = await User.findOne({email});
 if(result){
  res.send("User already exist");
 }
 else{
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password,salt);
 const user = User.create({name,email,password:hashPassword});
 if(user){
  res.status(201).send("User created");
 } else{
  res.status(400).send("User not created");
 }

}
}


//Login Api
const Login = async (req,res)=>{
  res.send("Login")
}


//Verify Api
const verifyOpt = async (req,res)=>{
  res.send("verifyOpt")
}

export {Login,Register,verifyOpt}

