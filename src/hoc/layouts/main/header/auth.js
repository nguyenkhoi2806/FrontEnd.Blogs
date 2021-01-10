import React, { useState } from "react";
import { Modal, Button, Form, Tab, Nav } from "react-bootstrap";

function Auth(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const Login = () => {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };

  const SingUp =() => {
      return <div>

      </div>
  }

  function AuthModal() {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav fill variant="tabs"className="text-center">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sing_up">Sign up</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login/>
              </Tab.Pane>
              <Tab.Pane eventKey="sing_up">
                <SingUp />
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
        <a class="nav-link" href="#" onClick={() => setShow(true)}>
          Login
        </a>
      </li>
    </>
  );
}

export default Auth;
