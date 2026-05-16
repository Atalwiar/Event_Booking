import mongoose from "mongoose";

const connectDB = async () => {
 await mongoose.connect(process.env.MONGO_URL).then(() => console.log("database connected")).catch((err) => console.log(err));
}

export default connectDB