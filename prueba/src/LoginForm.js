import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const LoginForm = ({ handleShow }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    alert('Inicio de sesión exitoso!');
  };

  return (
    <div className="text-center">
      <img src="logo.png" alt="Logo" className="mb-4" style={{ width: '100px' }} />
      <h1>Bienvenido</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="fade-in">
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingrese un email válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingrese una contraseña.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </Form>
      <a href="#" onClick={handleShow}>
        ¿No tienes una cuenta? Regístrate
      </a>
    </div>
  );
};

export default LoginForm;