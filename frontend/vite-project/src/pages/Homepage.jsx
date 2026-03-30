import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import Blogcard from "../components/Blogcard";
import Warningblogcard from "../components/Warningblogcard";
import api from "../../lib/axios";

function Homepage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    setBlogs(prev => prev.filter(blog => blog._id !== id));
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/blog");
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
        <h1 className="text-5xl font-bold text-violet-400 mb-6">Blogger App</h1>

        <Link to="/createblog">
          <button className="mb-6 px-6 py-4 bg-violet-600 hover:bg-violet-500 rounded-lg">
            + Create Blog
          </button>
        </Link>
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