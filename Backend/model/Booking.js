import mongoose from "mongoose";

const Booking = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  eventId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Event",
    required:true
  }, 
  status:{
    type:String,
 enum : [pending,confirmed,cancelled], 
 default:"pending"
  },
  paymentStatus: {
 type: String,
 enum: ['paid', 'unpaid'],
 default: 'unpaid'
  },
  amount:{
    type:number,
    required:true
  }
},{timestamps:true});

export default Booking