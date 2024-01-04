import React, { useState } from 'react';
import './../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginUser = (e) =>  {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    console.log('hi');
    alert("WELCOME BACK!");
    navigate('/home');
  })
  .catch((err) => {
    alert(err);
    console.log(err);
  });
  }

  return (
    <div className="login-app">
      <div className="login-form">
        <div className="title">Welcome Back!</div> 

        <img
          src={require('./../assets/mathHelpLogo.png')}
          width={120}
          height={120}
          style={{
              display: 'block',  // Ensures the image is treated as a block element
              margin: 'auto',    // Centers the image horizontally
              }}
          alt="Math Help Logo"      
        />

    <div className="form" style={{ marginTop: 40}}>
     <form>
       <div className="input-container">
         <label>Email: </label>
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        
       </div>
       <div className="input-container">
         <label>Password: </label>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
       </div>

       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
        <label style={{ textDecoration: 'underline' }} onClick={() => {
          navigate('/signup');
        }}>Not Signed Up?</label>
       </div>

       <div className="button-container">
         <button className='login-button' onClick={(e) => loginUser(e)}>Login</button>
       </div>
      </form>

        </div>
      </div>
    </div>
  )
}

export default LoginPage