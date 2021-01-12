import React from "react";
function PostHeader(props) {
  return (
    <div className="post-header mb-3">
      <h1 className="mt-4">Post Title</h1>
      <hr></hr>
      <p className="lead">
        <span className="author">
          by
          <a href="#"> Start Bootstrap</a>
        </span>
        <span className="author ml-2">
          view: <span className="text-dark"> 10 </span>
        </span>
      </p>
      <hr></hr>
      <p className="post-date">Posted on January 1, 2019 at 12:00 PM</p>
      <img
        className="img-fluid rounded"
        src="http://placehold.it/900x300"
        alt=""
      />
    </div>
  );
}

export default PostHeader;
