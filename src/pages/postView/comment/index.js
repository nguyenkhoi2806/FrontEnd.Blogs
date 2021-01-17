import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import moment from "moment";

import * as CommentApi from "../../../api/commentApi";

const CommentPostItem = ({ comment }) => {
  return (
    <div className="media pt-2 pb-2 pl-4 pr-4">
      <img
        className="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50"
        alt=""
      />
      <div className="media-body">
        <h5 className="mt-0">{comment.creator.name} </h5>
        <p className="mb-0">{comment.content}</p>
        <small className="text-secondary">
          {moment(comment.createdAt).fromNow()}
        </small>
      </div>
    </div>
  );
};

function CommentPost(props) {
  const { register, handleSubmit, reset } = useForm();
  function submitComment(data) {
    const dataSubmit = {
      content: data.content,
      postId: props.post._id,
    };
    CommentApi.SaveComment(dataSubmit).then((res) => {
      if (res.comment) {
        props.loadViewPost();
        reset();
      }
    });
  }

  return (
    <div className="comment-container">
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          {props.isLogin ? (
            <form onSubmit={handleSubmit(submitComment)}>
              <div className="form-group">
                <textarea
                  className="form-control"
                  required
                  name="content"
                  ref={register}
                  rows="3"
                ></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Comment
                </button>
              </div>
            </form>
          ) : (
            <div className="alert alert-light" role="alert">
              Please login before comment
            </div>
          )}
        </div>
        {props.comments &&
          props.comments.map((comment) => (
            <CommentPostItem comment={comment} />
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentPost);
