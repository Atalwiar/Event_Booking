import express from "express"
import { protect, admin } from "../middleware/auth.js"
const router = express.Router();

//admin or user can access this routes
router.get('/',protect,admin,{getAllEvents);
router.get("/:id",getEventById);

//Admin can access this routes
router.post("/",protect,admin,createEvent);
router.put("/:id",protect,admin,updateEvent);
router.delete("/:id",protect,admin,deleteEvent);

export default router