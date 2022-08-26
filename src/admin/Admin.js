import {useEffect} from 'react'
import Dashboard from './Dashboard';
import Register from './Register';
import Login from './Login';


import { Routes, Route, useNavigate } from 'react-router-dom'

function Admin() {

  const navigation = useNavigate();

  const isLoggedIn = false;


  useEffect(() => {
    if (!isLoggedIn){
      navigation('/admin/login');
    } else{
      navigation('/admin/dashboard')
    }
  },[]);

  return (

    <div >

      <Routes>
        <Route path='/register' element={<><Register/></>} />
        <Route path='/login' element={<><Login/></>} />
        <Route path='dashboard' element={<><Dashboard/></>} />
      </Routes>
    </div>

  );
}

export default Admin;
