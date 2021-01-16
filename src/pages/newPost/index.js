import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./index.scss";

function NewPost(props) {
  const { register, handleSubmit, errors, setValue } = useForm();

  function submitPost(data) {}

  const inputHandler = (event, editor) => {
    setValue("content", editor.getData());
  };

  return (
    <Form onSubmit={handleSubmit(submitPost)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.File name="image" ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.File name="introduction" required ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <CKEditor
          editor={ClassicEditor}
          onChange={inputHandler}
          config={{
            removePlugins: [
              "Image",
              "ImageCaption",
              "ImageStyle",
              "ImageToolbar",
              "ImageUpload",
              "MediaEmbed",
            ],
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewPost;
