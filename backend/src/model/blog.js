import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  }, 
  content:{
    type:String,
    required:true
  }
},{timeStamp:true});

const blog = mongoose.model("blog", blogSchema);

export default blog;