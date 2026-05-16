import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.js";
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/auth",router);

app.get("/",(req,res)=>{
  res.send("hello");
})

app.listen(
process.env.PORT,
()=>
console.log(`server is running on port ${process.env.PORT}`));

connectDB();