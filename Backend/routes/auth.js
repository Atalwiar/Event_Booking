import {Login,Register,verifyOpt} from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.post("/login",Login);
router.post("/register",Register);
router.post("/verifyOpt",verifyOpt);
export default router