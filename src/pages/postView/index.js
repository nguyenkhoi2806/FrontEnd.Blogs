import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

import PostHeader from "./header/header";
import Comment from "./comment";
import Search from "../../components/search";
import * as PostApi from "../../api/postApi";
import "./index.scss"

function PostView(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    loadViewPost();
  }, []);

  function loadViewPost() {
    PostApi.GetPostView(id).then((res) => {
      if (res.post) {
        setPost(res.post);
        setComments(res.comments);
      }
      else setError(true);
    });
  }

  if (error) return <Redirect to="/" />;

  if (Object.keys(post).length === 0) return null;


  return (
    <div className="post-view-container">
      <div className="row">
        <div className="col-lg-8">
          <PostHeader post={post} />
          <div className="post-content text-justify">
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>
          <Comment post={post}
                   loadViewPost={loadViewPost}
                   comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default PostView;
