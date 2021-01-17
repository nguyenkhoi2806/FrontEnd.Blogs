import Home from "../pages/home";
import NewPost from "../pages/newPost";
import PostView from "../pages/postView";
import MyPost from "../pages/myPost"

const Route = (props = {}) => {
  class Route {
    constructor({
      path = "",
      component = "",
      exact = true,
      privateRoute = false,
    }) {
      this.path = path;
      this.component = component;
      this.exact = exact;
      this.privateRoute = privateRoute;
    }
  }
  return new Route(props);
};

const routes = [
  Route({
    path: "/",
    component: Home,
    exact: true,
  }),
  Route({
    path: "/new-post",
    component: NewPost,
    privateRoute: true,
  }),
  Route({
    path: "/my-post",
    component: MyPost,
    privateRoute: true,
  }),
  Route({
    path: "/post-view/:id",
    component: PostView,
  }),
];

export default routes;
