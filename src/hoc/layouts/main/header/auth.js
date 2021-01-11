import React, { useState } from "react";
import { Modal, Button, Form, Tab, Nav } from "react-bootstrap";
import { useForm } from "react-hook-form";

function SingUpForm() {
  const { register, handleSubmit, errors } = useForm();

  function submitSignUp(data) {
    console.log(data)
  }

  return (
    <Form className="pt-3" onSubmit={handleSubmit(submitSignUp)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          ref={register}
          type="text"
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          ref={register}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          ref={register}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();

  function submitLogin(data) {
    console.log(data);
  }

  return (
    <Form className="pt-3" onSubmit={handleSubmit(submitLogin)}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          ref={register}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" ref={register} type="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function Auth(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function AuthModal() {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="pt-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="login">
            <Nav fill variant="tabs" className="text-center">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sing_up">Sign up</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm />
              </Tab.Pane>
              <Tab.Pane eventKey="sing_up">
                <SingUpForm />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <AuthModal />
      <li>
        <a className="nav-link" href="#" onClick={() => setShow(true)}>
          Login
        </a>
      </li>
    </>
  );
}

export default Auth;
