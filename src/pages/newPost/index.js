import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import ImagePicker from "./Input/ImagePicker";
import * as ImageServices from "../../services/Image";
import "./index.scss";

function NewPost(props) {
  const { register, handleSubmit, errors, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  function submitPost(data) {}

  const contentHandler = (event, editor) => {
    setValue("content", editor.getData());
  };

  function handleImagePicker(input, value, files) {
    if (files) {
      ImageServices.generateBase64FromImage(files[0])
        .then((b64) => {
          setImagePreview(b64);
        })
        .catch((e) => {
          setImagePreview(null);
        });
    }
  }

  return (
    <Form onSubmit={handleSubmit(submitPost)}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" required ref={register} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Introduction</Form.Label>
        <textarea
          ref={register}
          name="introduction"
          className="form-control"
          required
        ></textarea>
      </Form.Group>
      <Form.Group>
        <ImagePicker id="image" label="Image" onChange={handleImagePicker} />
        {imagePreview && (
          <div className="image-upload">
            <img src={imagePreview} alt="image" className="" />
          </div>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <CKEditor
          editor={ClassicEditor}
          onChange={contentHandler}
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
      <div className="submit-container text-right">
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}

export default NewPost;
