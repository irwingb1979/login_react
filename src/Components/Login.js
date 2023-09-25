import React, { useState } from 'react';
import './Login.css';
import Success from './Success';
import LoginForm from './Form';

// Login component
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = database.some(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setMessage(true); // Set message to true for successful login
    } else {
      setMessage(false); // Set message to false for unsuccessful login
      alert('Please fill in with correct data');
    }
  };

  const changeUser = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <>
      {!message ? (
        // Include the LoginForm component here
        <LoginForm
          handleSubmit={handleSubmit}
          username={username}
          password={password}
          changeUser={changeUser}
          changePassword={changePassword}
        />
      ) : (
        <Success />
      )}
    </>
  );
};

export default Login;
