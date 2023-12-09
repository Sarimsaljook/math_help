import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/SignUpPage.css';
import { database, auth } from '../firebase.js'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const SignUp = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userClass, setUserClass] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    set(ref(database, 'users/' + user.uid), {
      username: name,
      email: email,
      name: name,
      userClass: userClass,
      password: password
    }).then(() => {
      // Navigate to the home page
      navigate('/');
      alert("Congratulation You are all signed up you can now use your credentials to login and use Math Help.")
    }).catch((err) => alert(err));
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
  });


  };

  return (
    <div className="app">
      <div className="signup-form">
        <div className="title">Welcome To Math Help!</div> 

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
     <form onSubmit={handleSignUp}>

     <div className="input-container">
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label>Class: </label>
              <input
                type="text"
                name="userClass"
                value={userClass}
                onChange={(e) => setUserClass(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label>Username: </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
        <label style={{ textDecoration: 'underline' }} onClick={() => {
          navigate('/');
        }}>Already a Member?</label>
       </div>

       <div className="button-container">
         <button className='signup-button' type='submit'>Sign Me Up!</button>
       </div>
      </form>

        </div>
      </div>
    </div>
  )
}

export default SignUp