import express from "express";
import { deleteBLog, getAllBlog, getThisBlog, postBLog, updateBLog } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlog);
router.post("/",postBLog);
router.get("/:id",getThisBlog)
router.put("/:id",updateBLog);
router.delete("/:id",deleteBLog);

export default router;