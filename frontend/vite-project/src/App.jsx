import { Routes, Route } from 'react-router';
import { Toaster } from 'react-hot-toast'
import './App.css'
import Homepage from './pages/Homepage.jsx';
import Createblog from './pages/Createblog.jsx';
import Updateblog from './pages/Updateblog.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
     <div>
      <Toaster />
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/createblog' element={<Createblog/>} />
      <Route path='/updateblog/:id' element={<Updateblog />} />
     </Routes>
     <Footer />
     </div>
  )
}

export default App;
