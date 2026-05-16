import {Login,Ragister,verifyOpt} from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.post("/login",Login);
router.post("/ragister",Ragister);
router.post("/verifyOpt",verifyOpt);
export default router