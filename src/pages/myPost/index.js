import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";
import * as PostApi from "../../api/postApi";
import "./index.scss";

function MyPost(props) {
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const pageLimit = 4;

  useEffect(() => {
    PostApi.MyPost().then((res) => {
      setData(res.posts);
      setTotalPosts(res.totalItems);
    });
  }, []);

  function loadDataMyPost(page) {
    PostApi.MyPost(page).then((res) => {
      setData(res.posts);
    });
  }

  function PaginationItem() {
    let paginationHtml = [];
    for (let i = 1; i <= Math.ceil(totalPosts / pageLimit); i++) {
      paginationHtml.push(
        <li className="page-item" key={i}>
          <button className="page-link" onClick={() => loadDataMyPost(i)}>
            {i}
          </button>
        </li>
      );
    }

    return paginationHtml;
  }

  return (
    <div className="my-post-container">
      <div className="card">
        <div className="card-header">My Post</div>
        <div className="card-body">
          {data.length > 0 ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Introduction</th>
                    <th scope="col">Created date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((post, index) => (
                    <TrPost key={index} post={post} />
                  ))}
                </tbody>
              </table>
              <nav>
                <ul className="pagination pagination-sm justify-content-center">
                  {PaginationItem()}
                </ul>
              </nav>
            </div>
          ) : (
            <div className="alert alert-primary" role="alert">
              No post data available
            </div>
          )}
        </div>
      </div>
    </div>
  );

  function TrPost({ post }) {
    return (
      <tr>
        <td width="300">
          {post.title.length > 50
            ? post.title.slice(0, 50) + "..."
            : post.title}
        </td>
        <td width="300">
          {post.introduction.length > 150
            ? post.introduction.slice(0, 150) + "..."
            : post.introduction}
        </td>
        <td>{moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
        <td>
          <Link to={"/edit-post/" + post._id} className="btn btn-primary mr-3">
            Edit
          </Link>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
