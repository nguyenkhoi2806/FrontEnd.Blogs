import React from "react";

const CommentPostItem = () => {
  return (
    <div className="media pt-2 pb-2 pl-4 pr-4">
      <img
        className="d-flex mr-3 rounded-circle"
        src="http://placehold.it/50x50"
        alt=""
      />
      <div className="media-body">
        <h5 className="mt-0">Commenter Name </h5>
        <p className="mb-0">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <small className="text-secondary">1 minute ago</small>
      </div>
    </div>
  );
};

function CommentPost(props) {
  return (
    <div className="comment-container">
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <CommentPostItem />
        <CommentPostItem />
        <CommentPostItem />
      </div>
    </div>
  );
}

export default CommentPost;
