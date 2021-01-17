import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import * as UserApi from "../../../../../../api/userApi";
import { useState } from "react";
import * as Storage from "../../../../../../services/Storage";

function SingUpForm(props) {
  const { register, handleSubmit } = useForm();
  const [messageError, serMessageError] = useState();

  function submitSignUp(data) {
    UserApi.Signup(data).then((res) => {
      if (!res.user) {
        serMessageError(res.message);
      } else {
        props.saveUser(res.user);
        Storage.saveItem("token", res.token);
        Storage.saveItem("user", res.user);
        props.closeModal();
      }
    });
  }

  return (
    <Form className="pt-3" onSubmit={handleSubmit(submitSignUp)}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          ref={register}
          type="text"
          required={true}
          placeholder="Enter Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          ref={register}
          type="email"
          required={true}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          ref={register}
          type="password"
          required={true}
          placeholder="Password"
        />
        {messageError && (
          <Form.Text className="text-danger">{messageError}</Form.Text>
        )}
      </Form.Group>
      <div className="text-right submit-container">
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </div>
    </Form>
  );
}

export default SingUpForm;
