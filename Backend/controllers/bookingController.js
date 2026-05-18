import Booking from "../model/Booking.js";
import { protect, admin } from "../middleware/auth.js";

const bookEvent = async (req, res) => {
  const bookings = await Booking.find();
  res.send(bookings);
};