import {useEffect} from 'react'
import Dashboard from './Dashboard';
// import Register from './Register';
import Login from './Login';
import { auth } from '../config/firebase'
import { useDispatch, useSelector } from "react-redux";

import { Routes, Route, useNavigate } from 'react-router-dom'

function Admin() {

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{

      if (authUser) {
        if (!isLoggedIn) dispatch({ type: "SET_USER", payload: authUser });
        if (window.location.pathname === "/admin")
          navigation('/admin/dashboard')
        navigation(window.location.pathname)
      } else {
        navigation('/admin/login')
      }

    })
  },[dispatch])

  return (

    <div >

      <Routes>
        <Route path='/dashboard/*' element={<><Dashboard/></>} />
        <Route path='/login' element={<><Login/></>} />
      </Routes>
    </div>

  );
}

export default Admin;
