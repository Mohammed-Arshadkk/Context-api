import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Modules/Login.css';
import { UserContext } from '../Context/UserContextProvider';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {userData, setUserData} = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault();
 // Validate username and password (you can replace this with your actual authentication logic)
 const existingUser = userData.find(
  (user) => user.username === username && user.password === password
);

if (existingUser) {
  // User exists, navigate to home page
  navigate('/home');
} else {
  // User doesn't exist, display error
  console.log('Invalid username or password');
}
};

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username or email"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;
