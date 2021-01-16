import React, { useState } from "react";
import { Modal, Tab, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

import * as actions from "../../../../../store/actions/index";
import LoginForm from "./Form/loginForm";
import SignForm from "./Form/signUpForm";

function UserMenu(props) {
  const [show, setShow] = useState(false);
  const user = props.user;

  const closeModal = () => setShow(false);

  function AuthModal() {
    return (
      <Modal show={show} onHide={closeModal} size="lg">
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
                <LoginForm saveUser={props.saveUser} closeModal={closeModal} />
              </Tab.Pane>
              <Tab.Pane eventKey="sing_up">
                <SignForm saveUser={props.saveUser} closeModal={closeModal} />
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
      {props.isLogin ? (
        <li className="nav-item dropdown">
          <DropdownButton menuAlign="right" title={" Hi " + user.name}>
            <Dropdown.Item as="button">My Post</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => props.logout()}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </li>
      ) : (
        <li className="nav-item">
          <span className="nav-link" onClick={() => setShow(true)}>
            Login
          </span>
        </li>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(actions.saveUser(user)),
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
