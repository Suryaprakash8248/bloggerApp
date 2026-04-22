import React from 'react'
import { useState } from 'react';
import api from '../../lib/axios.js';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
function Userregister() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !email || !password) {
      alert("Fill all fields!");
      return;
    }

    try {
      const res = await api.post("/blog/user/register", {
        username: userName,
        email:email,
        password:password
      });
      navigate("/")
      toast.success("Log in with your email and password");
      
    } catch (err) {
      toast.error('failed to register!');
      console.log(err.response?.data);
      
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-[350px] shadow-lg"
      >
        <h1 className="text-2xl font-bold text-violet-400 mb-6 text-center">
          Register yourself!
        </h1>

        <label className="block mb-1">Username</label>
        <input
          onChange={e => setUserName(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <label className="block mb-1">Email</label>
        <input
          type="email"
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <label className="block mb-1">Password</label>
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-violet-500"
        />

        <button className="w-full py-2 bg-violet-600 hover:bg-violet-500 rounded transition duration-200 hover:shadow-[0_0_10px_#8b5cf6]">
          Register
        </button>
      </form>
    </div>
  );
}

export default Userregister