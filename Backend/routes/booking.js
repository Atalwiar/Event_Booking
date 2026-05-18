import express from "express"
import { protect , admin} from "../middleware/auth.js";
import { bookEvent, getMyBookings, confirmBooking, deleteBooking } from "../controllers/bookingController.js";
const router = express.Router();

router.post("/",protect,bookEvent);
router.get("/send-up",protect, sendBookingOTP);
router.get("/my",protect,getMyBookings);
router.put("/:id/confirm", protect, admin, confirmBooking);
router.delete("/:id",protect,admin,deleteBooking);

export default router