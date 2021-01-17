import React, { useEffect, useState } from "react";
import * as PostApi from "../../api/postApi";
import "./index.scss";

import moment from "moment";
import { Link } from "react-router-dom";

const Domain = process.env.REACT_APP_DOMAIN_API;

function Home(props) {
  const [data, setData] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const pageLimit = 4;
  const [pageActive, setPageActive] = useState(1);

  useEffect(() => {
    PostApi.GetAll().then((res) => {
      setData(res.posts);
      setTotalPosts(res.totalItems);
    });
  }, []);

  function loadData(page) {
    setPageActive(page);
    PostApi.GetAll(page).then((res) => {
      setData(res.posts);
    });
  }

  function PaginationItem() {
    let paginationHtml = [];
    for (let i = 1; i <= Math.ceil(totalPosts / pageLimit); i++) {
      paginationHtml.push(
        <li className={"page-item " + (i === pageActive && "active")} key={i}>
          <button className="page-link" onClick={() => loadData(i)}>
            {i}
          </button>
        </li>
      );
    }

    return paginationHtml;
  }

  return (
    <div className="home">
      <h5>List post update</h5>
      {data.length > 0 ? (
        <div className="row">
          <div className="col-12">
            <div className="card-deck row">
              {data.map((post, index) => (
                <div className="col-12 col-md-6 col-lg-3 p-0" key={index}>
                  <div className="card ">
                    <img
                      className="card-img-top"
                      src={Domain + post.imageUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <Link to={"/post-view/" + post._id}>
                        <strong className="card-title">{post.title}</strong>
                      </Link>
                      <p className="card-text">
                        {post.introduction.length > 100
                          ? post.introduction.slice(0, 100) + "..."
                          : post.introduction}
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        {moment(post.createdAt).fromNow()} by{" "}
                        <span className="text-primary">
                          {post.creator.name}
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <nav className="col-12 mt-3">
            <ul className="pagination pagination-sm justify-content-center">
              {PaginationItem()}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          No post available
        </div>
      )}
    </div>
  );
}

export default Home;
