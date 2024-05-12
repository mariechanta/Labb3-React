import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <input type="text" placeholder="Användarnamn" />
      <input type="password" placeholder="Lösenord" />
      <button>Logga in</button>
    </form>
  );
};

export default LoginForm;
