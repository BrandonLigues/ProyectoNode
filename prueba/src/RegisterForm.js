import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const RegisterForm = ({ show, handleClose }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    alert('Formulario enviado con éxito!');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su nombre.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="apellidoPaterno">
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="text" placeholder="Apellido Paterno" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su apellido paterno.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="apellidoMaterno">
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="text" placeholder="Apellido Materno" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su apellido materno.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="correo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Correo Electrónico" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un correo electrónico válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="contraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una contraseña.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="confirmarContraseña">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Confirmar Contraseña" required />
            <Form.Control.Feedback type="invalid">
              Las contraseñas no coinciden.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">
            Registrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterForm;