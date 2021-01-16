import React from "react";

import PostHeader from "./header/header";
import Comment from "./comment";
import Search from "../../components/search";

function PostView(props) {
  return (
    <div className="post-view-container">
      <div className="row">
        <div className="col-lg-8">
          <PostHeader />
          <div className="post-content text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit
            excepturi nam quia corporis eligendi eos magni recusandae laborum
            minus inventore? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum
            obcaecati impedit odit illo dolorum ab tempora nihil dicta earum
            fugiat. Temporibus, voluptatibus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos, doloribus, dolorem iusto
            blanditiis unde eius illum consequuntur neque dicta incidunt ullam
            ea hic porro optio ratione repellat perspiciatis. Enim, iure! Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante. Someone famous in Source Title Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi,
            ut quas placeat totam sunt tempora commodi nihil ullam alias modi
            dicta saepe minima ab quo voluptatem obcaecati? Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut,
            explicabo, aliquam tenetur ratione tempore quidem voluptates
            cupiditate voluptas illo saepe quaerat numquam recusandae? Qui,
            necessitatibus, est!
          </div>
          <Comment/>
        </div>
        <div className="col-lg-4">
            <Search/>
        </div>
      </div>
    </div>
  );
}

export default PostView;
