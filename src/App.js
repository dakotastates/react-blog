import './styles/App.css';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'
import Admin from './admin/Admin'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">

      <Routes>
        <Route path='/admin/*' element={<><Admin/></>} />
        <Route path='/login' element={<><Navbar /><Login/></>} />
        <Route path='/register' element={<><Navbar /><Register/></>} />
        <Route path='/' element={<><Navbar /><Home/></>} />
        <Route path="*" element={<><Navbar /><NotFound/></>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
