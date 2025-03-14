import "./SignUp.css";

import { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifie si tous les champs sont remplis
    if (!username || !email || !password) {
      alert('Please fill all the fields.');
      return;
    }

    Axios.post('http://localhost:5000/auth/signup', {
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
         if (response.data.status) {
        navigate('/login');         
         }
        
      })
      .catch((error) => {

          // Une autre erreur s'est produite
          console.error( error);
    
      });
  };

  return (
    <div className="sign-up container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="input-field">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button> 
        <p>Already have an account? <Link to="/login">Login</Link></p>
        
      </form>
    </div>
  );
};

export default Signup;
