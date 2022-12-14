import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'


function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  const navigation = useNavigate();

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e =>{
    e.preventDefault()
    setError('')
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) =>{
        if (auth){
          auth.user.updateProfile({
            displayName: name,
            admin: false
          }).then(()=>{
            navigation('/admin');
          })

        }
      })
      .catch(error => alert(error.message))
  }



  return(
    <div className='login'>

      <div className='login__container'>
        <h1>Sign-Up</h1>

        <form>
          <h5>Display Name</h5>
          <input type='text' value={name} onChange={e => setName(e.target.value)} />

          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <h5>Re-enter password</h5>
          <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

          <button className='login__signInButton ' onClick={register}>Create Admin User</button>

          {error && <div>{error}</div>}
        </form>


      </div>
    </div>
  )
}

export default Register;
