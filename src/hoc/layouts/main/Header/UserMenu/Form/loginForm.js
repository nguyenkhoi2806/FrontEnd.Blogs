import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import * as UserApi from "../../../../../../api/userApi";
import * as Storage from "../../../../../../services/Storage";

function LoginForm(props) {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  function submitLogin(data) {
    UserApi.Login(data).then((res) => {
      if (!res.user) {
        setErrorMessage(res.message);
      } else {
        props.saveUser(res.user);
        Storage.saveItem("token", res.token);
        Storage.saveItem("user", res.user);
        props.closeModal();
      }
    });
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
        {errorMessage && (
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" ref={register} type="password" />
      </Form.Group>

      <div className="text-right submit-container">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
