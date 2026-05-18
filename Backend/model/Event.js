import mongoose from "mongoose";

const Event = new mongoose.Schema({
  title:{
    type:string,
    required:true
  },
  description:{
    type:string,
    required:true
  },
  date:{
    type:Date,
    required:true
  },
  location:{
    type:string,
    required:true
  },
  category:{
    type:string,
    required:true
  }, 
  totalSeats:{
    type:number,
    required:true
  },
  ticketPrice:{
    type:number,
    required:true
  },
  imageUrl:{
    type:string,
    required:true
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }


  }{timestamps:true});

  export default mongoose.model("Events",Event)