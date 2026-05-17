import { login, register, verifyOtp } from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.post("/verifyOtp", verifyOtp);
router.post("/verifyOpt", verifyOtp);
export default router;
