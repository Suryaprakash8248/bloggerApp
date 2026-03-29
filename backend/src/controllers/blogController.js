import { json } from "express";
import blog from "../model/blog.js";

export const getAllBlog = async(req,res)=> {
  try {
    const response = await blog.find();
    res.status(200).json(response);
    
  } catch (error) {
    console.log(`failed to get all blog`,error);
    
  }
}

export const getThisBlog = async (req,res)=> {
  const id = req.params.id
  try {
    const response = await blog.findById(id);
    res.json(response)
  } catch (error) {
    console.log(`failed to get this blog`,error);
    res.json({message:"failed to get this bog"})
  }
}

export const postBLog = async(req,res)=> {
  const {title,content} = req.body;
  try {
    const newBlog = new blog({title,content});
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
    
  } catch (error) {
    console.log(`failed to post blog`,error);
    
  }
}

export const updateBLog = async(req,res)=> {
  const {title,content} = req.body;
  const id = req.params.id;
  try {
    const updateThisBlog = await blog.findByIdAndUpdate(id, {
      title, content
    })
    res.status(201).json(updateThisBlog);
    
  } catch (error) {
    console.log(`failed to update blog`,error);
    
  }
}

export const deleteBLog = async(req,res)=> {
  const getBlog = req.params.id;
  try { 
    console.log(getBlog);
    
    const deleteThisBlog = await blog.findByIdAndDelete(getBlog);
    res.json({
      message:"this blog deleted successfully!"
    });
    
  } catch (error) {
    console.log(`failed to delete blog`,error.message);
    
  }
}
