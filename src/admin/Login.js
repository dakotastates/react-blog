import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigate();

  const signIn = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth)=>{
        if (auth){
          navigation('../dashboard');
        }
      })
      .catch(error => alert(error.message))
  }



  return(
    <div className='login'>

      <div className='login__container'>
        <h1>Admin Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
        </form>

      </div>
    </div>
  )
}

export default Login;
