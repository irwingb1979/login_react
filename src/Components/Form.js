import React from 'react';

const LoginForm = ({ handleSubmit, username, password, changeUser, changePassword }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={changeUser}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={changePassword}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
