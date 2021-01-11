import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function NewPost(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Introduction</Form.Label>
        <Form.Control type="text" name="introduction" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" type="text" name="content" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.File name="image" ref={register} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewPost;
