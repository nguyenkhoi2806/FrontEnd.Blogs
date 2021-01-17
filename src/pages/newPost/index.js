import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Redirect } from "react-router";

import ImagePicker from "./Input/ImagePicker";
import * as ImageServices from "../../services/Image";
import * as PostApi from "../../api/postApi";
import "./index.scss";

function NewPost(props) {
  const { register, handleSubmit, setValue, control } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function submitPost(data) {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image);
    formData.append("introduction", data.introduction);
    PostApi.SavePost(formData).then((res) => {
      if (res.post) {
        return setSuccess(true);
      } else setSubmitError(true);

      setIsSubmitting(false);
    });
  }

  const contentHandler = (event, editor) => {
    setValue("content", editor.getData());
  };

  function handleImagePicker(input, value, files) {
    console.log(files);
    if (files) {
      ImageServices.generateBase64FromImage(files[0])
        .then((b64) => {
          setImagePreview(b64);
          setValue("image", files[0]);
        })
        .catch((e) => {
          setImagePreview(null);
        });
    }
  }

  if (success) return <Redirect to="/my-post" />;

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
        <Controller
          control={control}
          name="image"
          render={({ onChange, value }) => (
            <ImagePicker
              id="image"
              label="Image"
              onChange={handleImagePicker}
            />
          )}
        />
        {imagePreview && (
          <div className="image-upload">
            <img src={imagePreview} alt="image" className="" />
          </div>
        )}
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Controller
          control={control}
          name="content"
          render={({ onChange, value }) => (
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
          )}
        />
      </Form.Group>
      <div className="submit-container text-right">
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading…" : "Save"}
        </Button>
      </div>
      {submitError && (
        <Alert variant="danger">
          <Alert.Heading>Ops! Something wrong</Alert.Heading>
          <p>Change this and that and try again.</p>
          <hr />
        </Alert>
      )}
    </Form>
  );
}

export default NewPost;
