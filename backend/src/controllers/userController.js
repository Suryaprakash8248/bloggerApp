import blog from "../model/blog.js";
import bcrypt from "bcrypt";
import user from "../model/user.js";
import jwt from "jsonwebtoken";

export const getAllUser = async (req,res) => {
  try {
    const response = await user.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error)
  }
}
export const registerUser = async (req,res)=> {
  try {
    const {username, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new user({
      username,
      email,
      password: hashedPassword
    });

    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
    
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const loginUser = async (req,res)=> {
  try {
    const {email, password} = req.body;
    const userLog = await user.findOne({email:email});
    
    if(!userLog) {
      return res.status(400).json("user not found");
    }

    const isMatch = await bcrypt.compare(password, userLog.password);
     if (!isMatch) {
      return res.status(400).json("Invalid credentials");
    }

    const token = jwt.sign({user:userLog._id},"secretkey",{expiresIn:"1hr"});
    res.status(200).json({
      message: "Login successful",
      user:userLog,
      token:token
    });

  } catch (error) {
    console.log("failed to log in", error.message);
    res.json(error)
  }
}
//deva 69e781f009ba3943685c5dea