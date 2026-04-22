import { Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast'
import './App.css'
import Homepage from './pages/Homepage.jsx';
import Createblog from './pages/Createblog.jsx';
import Updateblog from './pages/Updateblog.jsx';
import Footer from './components/Footer.jsx';
import Loginpage from './pages/Loginpage.jsx';
import Userregister from "./pages/Userregister.jsx";
function App() {
  return (
     <div>
      <Toaster />
      <Routes>
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/registeruser' element={<Userregister />} />
      <Route path='/' element={<Loginpage />} />
      <Route path='/createblog' element={<Createblog/>} />
      <Route path='/updateblog/:id' element={<Updateblog />} />
     </Routes>
     <Footer />
     </div>
  )
}

export default App;
