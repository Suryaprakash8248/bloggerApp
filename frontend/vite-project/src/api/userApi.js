import api from "../../lib/axios.js";

const fetchUser = async ()=> {
  try {
    const res = await api.get('/')
  } catch (error) {
    console.log("failed to fetch this user", error.message);
    
  }
}