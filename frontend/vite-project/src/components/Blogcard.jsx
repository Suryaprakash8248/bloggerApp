import axios from 'axios';
import toast from 'react-hot-toast';
import { Link} from 'react-router';

function Blogcard({ blog, onDelete }) {

  async function handleDelete(id) {
    if (window.confirm("Delete this blog?")) {
      try {
        await axios.delete(`http://localhost:5000/api/blog/${id}`);
        toast.success("Deleted!");
        onDelete(id);
      } catch (err) {
        toast.error("Failed");
      }
    }
  }

  return (
    <div  className="bg-gray-800 border border-gray-700 rounded-xl p-5 w-full max-w-[350px] mx-auto shadow-lg" >
      
      <h2 className="text-xl font-semibold text-violet-400 mb-2">
        {blog.title}
      </h2>

      <p className="text-gray-300 mb-4">{blog.content}</p>

      <div className="flex gap-3">
        <Link to={`/updateblog/${blog._id}`}>
          <button className="px-3 py-1 bg-violet-600 hover:bg-violet-500 rounded">
            Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(blog._id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Blogcard;