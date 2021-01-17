import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Redirect } from "react-router";

import ImagePicker from "./Input/ImagePicker";
import * as ImageServices from "../../services/Image";
import * as PostApi from "../../api/postApi";
import "./index.scss";

const Domain = process.env.REACT_APP_DOMAIN_API;

function FormPost(props) {
  const { register, handleSubmit, setValue, control, getValues } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    if (id) {
      PostApi.GetPostEdit(props.match.params.id).then((res) => {
        if (res.error) setError(true);
        else {
          setValue("title", res.post.title);
          setValue("introduction", res.post.introduction);
          setValue("content", res.post.content);
          setValue("image", res.post.imageUrl);
          setImagePreview(Domain + res.post.imageUrl);
        }
      });
    }
  }, []);

  function submitPost(data) {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("image", data.image);
    formData.append("introduction", data.introduction);
    if (id) {
      PostApi.UpdatePost(formData, id).then((res) => {
        if (res.post) {
          return setSuccess(true);
        } else setSubmitError(true);

        setIsSubmitting(false);
      });
    } else {
      PostApi.CreatePost(formData).then((res) => {
        if (res.post) {
          return setSuccess(true);
        } else setSubmitError(true);

        setIsSubmitting(false);
      });
    }
  }

  function handleImagePicker(input, value, files) {
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

  if (error) return <Redirect to="" />;

  return (
    <Form onSubmit={handleSubmit(submitPost)} className="form-post">
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
              update={id ? true : false}
            />
          )}
        />
        {imagePreview && (
          <div className="image-upload">
            <img src={imagePreview} alt="image" />
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
              onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
              }}
              data={id ? getValues("content") : ""}
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

export default FormPost;
