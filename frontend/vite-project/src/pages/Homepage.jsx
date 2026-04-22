import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router';
import Blogcard from "../components/Blogcard";
import Warningblogcard from "../components/Warningblogcard";
import api from "../../lib/axios";

function Homepage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token);
  
  const handleDelete = async (id) => {
    setBlogs(prev => prev.filter(blog => blog._id !== id));
  };

  console.log(token);
  

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get(`/blog/user/${user._id}`, {
          headers:{
            Authorization:`Bearer ${token}`
          }
        });

        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div  className="flex justify-between mb-10">
        <Link to="/createblog">
          <button className="mb-6 px-6 py-4 bg-violet-600 hover:bg-violet-500 rounded-lg">
            + Create Blog
          </button>
        </Link>
        <h1 className="text-5xl font-bold text-violet-400 mb-6">Blogger App</h1>

        <div className="flex items-end h-10 w-150 justify-center ">
          <p>Welcome back, {user.username}</p>
          <button onClick={()=> {
            const confirm = window.confirm(`Do you want to log out ${user.username}?`);
            if(confirm) {navigate("/"); return;}
          }} className=" bg-red-700 p-2 hover:bg-red-500 rounded-lg">
            logOut
          </button>
        </div>
        
      </div>



      {loading ? (
        <p>Loading...</p>
      ) : blogs.length === 0 ? (
        <Warningblogcard />
      ) : (
        <div className="grid gap-6 justify-center 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4">
          {blogs.map(blog => (
            <Blogcard key={blog._id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;