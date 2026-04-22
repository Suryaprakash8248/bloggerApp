import mongoose from "mongoose";

const connectDb = async ()=>{
  try {
    const res = await mongoose.connect(process.env.MONGODB_URL);
    
    console.log(`mongodb connected successfully`);
  } catch (error) {
    console.log(`failed to connect with mongodb`, error);
  }
}

export default connectDb;

