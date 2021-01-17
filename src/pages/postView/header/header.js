import React from "react";
import moment from 'moment';

const Domain = process.env.REACT_APP_DOMAIN_API
function PostHeader(props) {
  const post = props.post;
  return (
    <div className="post-header mb-3">
      <h1 className="mt-4">{post.title}</h1>
      <hr></hr>
      <p className="lead">
        <span className="author">
          by
          <span className="text-primary"> {post.creator.name}</span>
        </span>
      </p>
      <hr></hr>
      <p className="post-date">Posted on { moment(post.createdAt).format('MMMM Do YYYY, h:mm') }</p>
      <img
        className="img-fluid rounded"
        src={ Domain + post.imageUrl }
        alt=""
      />
    </div>
  );
}

export default PostHeader;
