// import { auth } from '../config/firebase'
import AdminNav from '../components/AdminNav'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import NotFound from '../components/NotFound';


function Dashboard() {

  // const navigation = useNavigate();


  return(
    <Routes>
      <Route path='register' element={<><AdminNav /><Register/></>} />
      <Route path='/' element={<><AdminNav /><Home/></>} />
      <Route path='*' element={<><AdminNav /><NotFound/></>} />
    </Routes>
  )
}

export default Dashboard;
