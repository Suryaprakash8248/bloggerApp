import express from "express";
import { deleteBLog, getAllBlog, getThisBlog, getThisUserBlog, postBLog, updateBLog } from "../controllers/blogController.js";
import { getAllUser, loginUser, registerUser } from "../controllers/userController.js";
import { authUser } from "../../middleware/authUser.js";

const router = express.Router();

router.get("/",authUser, getAllBlog);
router.get("/users",getAllUser);
router.post("/",authUser,postBLog);
router.post("/user/login", loginUser);
router.post("/user/register",registerUser);
router.get("/user/:userId",authUser, getThisUserBlog);
router.get("/specificblog/:id",authUser,getThisBlog)
router.put("/:id",authUser,updateBLog);
router.delete("/:id",authUser,deleteBLog);

export default router;