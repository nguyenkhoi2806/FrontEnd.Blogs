import Home from "../pages/home";
import NewPost from "../pages/newPost";
import PostView from "../pages/postView";

const routes = [
    {
        path: '/',
        page: Home,
        exact: true
    },
    {
        path: '/new-post',
        page: NewPost,
        exact: true
    },
    {
        path: "/view/:id",
        page: PostView
    }
]

export default routes;