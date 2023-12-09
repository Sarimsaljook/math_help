import React from 'react';
import './../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();

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
         <label>Username: </label>
         <input type="text" name="uname" required />
        
       </div>
       <div className="input-container">
         <label>Password: </label>
         <input type="password" name="pass" required />
       </div>

       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
        <label style={{ textDecoration: 'underline' }} onClick={() => {
          navigate('/signup');
        }}>Not Signed Up?</label>
       </div>

       <div className="button-container">
         <button className='login-button'>Login</button>
       </div>
      </form>

        </div>
      </div>
    </div>
  )
}

export default LoginPage