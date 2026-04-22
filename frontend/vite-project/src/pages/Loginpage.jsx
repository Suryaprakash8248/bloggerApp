import React, {useState} from 'react'
import {Link} from "react-router";
import api from '../../lib/axios';
import toast from 'react-hot-toast';
import { useNavigate} from 'react-router';
import { useEffect } from 'react';


function Loginpage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [token,setToken]= useState();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("fill both email and password")
      return;
      
    }



    try {
      const res = await api.post("/blog/user/login", {
        email,
        password
      });

      const receivedToken = res.data.token;
      const receivedUserInfo = res.data.user;
      setToken(receivedToken);
      setUserInfo(receivedUserInfo);
      localStorage.setItem("token", receivedToken);
      localStorage.setItem("userInfo",JSON.stringify(receivedUserInfo));
      console.log(token);
      
      toast.success("Login successful");     
       navigate("/homepage");
    } catch (err) {
      console.log("failed to fetch this user",err.message);
      
      toast.error("Wrong email or password");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-[350px] shadow-lg">

        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-violet-400 mb-6 text-center">
            Login
          </h1>

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
            Login
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          New user?{" "}
          <Link to="/registeruser" className="text-violet-400 hover:underline">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Loginpage;