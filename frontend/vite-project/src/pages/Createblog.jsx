import axios from 'axios';
import React, { useState } from 'react'
import {toast} from "react-hot-toast";
import { Link, Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import api from '../../lib/axios';

function Createblog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
    const token = localStorage.getItem("token");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log("token-----",token, userInfo);
  const navigate = useNavigate();

   async function handleSubmit(e) {
    e.preventDefault();
    
    console.log(userInfo);
    
    if(title==="" || content==="") {
      toast.error("you should provide both Title and Content");
      return;
    } else {
    try {
       await api.post("/blog/", {
        title,content, userId:userInfo._id
      }, {
        headers:{Authorization: `Bearer ${token}`}
      });
      toast.success("blog created successfully");
      navigate("/homepage");
    } catch (error) {
      toast.error("failed to create blog")
      console.log("failed to create blog",error);
      
    }};
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl w-[400px] border border-gray-700"
      >
        <h1 className="text-2xl font-bold text-violet-400 mb-4">
          Create Blog
        </h1>

        <Link to="/">
          <button className="mb-4 text-sm text-gray-400 hover:text-white">
            ← Back
          </button>
        </Link>

        <label className="block mb-1">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <label className="block mb-1">Content</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded">
          Create
        </button>
      </form>
    </div>
  )
}

export default Createblog;

