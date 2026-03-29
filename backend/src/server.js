
import dotenv from "dotenv";
dotenv.config();


import express, { json } from "express";
import connectDb from "./config/db.js";
import router from "./router/blogRouter.js";
import cors from "cors";
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use("/api/blog",router);

app.use(express.static(path.join(__dirname, "../frontend/vite-project/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/vite-project/dist/index.html"));
});


connectDb().then(()=> {
  (app.listen(port, ()=> {
  console.log(`server is listening at ${port}`);
}))
});