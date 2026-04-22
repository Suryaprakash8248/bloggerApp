import jwt from "jsonwebtoken";

export const authUser = async (req,res,next) => {
  try {
    const getToken = req.header("Authorization");
    if(!getToken) return res.status(400).json("no token");
    const decoded = jwt.verify(getToken.replace("Bearer ",""), "secretkey");
    if(!decoded) return res.status(401).json("invalid token");
    
    req.user = decoded;
    next();
  } catch (error) {
    console.log("failed to authenticate users", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
}