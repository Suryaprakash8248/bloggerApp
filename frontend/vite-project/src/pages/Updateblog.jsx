import axios from 'axios';
import {useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { Link,useParams } from 'react-router'
import { useNavigate } from 'react-router';
import api from '../../lib/axios';



function Updateblog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
   const [oldTitle, setOldTitle] = useState("");
  const [oldContent, setOldContent] = useState("");
  const {id} = useParams();
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  console.log(token);
  
  useEffect(()=>{
     const fetchBlog = async () => {
      try {
        const response = await api.get(`/blog/specificblog/${id}`, {
          headers:{Authorization:`Bearer ${token}`}
        });
        setOldTitle(response.data.title);
        setOldContent(response.data.content);

        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.log("failed to fetch this blog",error);
      }
    }; fetchBlog()
  },[id]);

 async function handleSubmit(e) {
  e.preventDefault();

  if (
    title.trim() === oldTitle.trim() &&
    content.trim() === oldContent.trim()
  ) {
    if(window.confirm("No changes made in this blog! wanna head to homepage")) {
      navigate("/homepage");
    }
    return;
  }

  if(title.trim()==="" || content.trim()==="") {
    toast.error("you can't leave title or content field empty ");
    return;
  }

  try {
    await api.put(`/blog/${id}`, {
      title,
      content
    }, {headers:{Authorization:`Bearer ${token}`}});

    toast.success("Blog updated successfully");
    navigate("/homepage");
  } catch (error) {
    toast.error("Failed to update the blog");
    console.log(error);
  }
}

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-xl w-[400px] border border-gray-700"
      >
        <h1 className="text-2xl font-bold text-violet-400 mb-4">
          Update Blog
        </h1>

        <Link to="/">
          <button className="mb-4 text-sm text-gray-400 hover:text-white">
            ← Back
          </button>
        </Link>

        <label className="block mb-1">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <label className="block mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default Updateblog;