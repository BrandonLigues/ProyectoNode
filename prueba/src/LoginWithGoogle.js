import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginWithGoogle = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <Button onClick={handleLogin} variant="primary">
      Iniciar sesión con Google
    </Button>
  );
};

export default LoginWithGoogle;