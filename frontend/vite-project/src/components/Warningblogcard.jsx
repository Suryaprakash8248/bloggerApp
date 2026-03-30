import React from 'react'
import { Link } from 'react-router';

function Warningblogcard() {
  return (
    <div className="flex flex-col items-center justify-center text-center 
    bg-gray-800 border border-gray-700 rounded-xl p-10 
    max-w-md mx-auto mt-10 shadow-lg">

      <h2 className="text-2xl font-semibold text-violet-400 mb-2">
        No blogs yet
      </h2>

      <p className="text-gray-300 mb-6">
        Start your journey by creating your first blog 🚀
      </p>

      <Link to="/createblog">
        <button className="px-6 py-2 bg-violet-600 hover:bg-violet-500 
        rounded-lg transition duration-200 
        hover:shadow-[0_0_10px_#8b5cf6]">
          Create Blog
        </button>
      </Link>
    </div>
  );
}

export default Warningblogcard;