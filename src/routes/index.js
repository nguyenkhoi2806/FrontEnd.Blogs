import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";

import RouteData from "./routesData";
import LayoutMain from "../hoc/layouts/main";
import * as actions from "../store/actions";
import * as TokenService from "../services/Token";
import * as StorageService from "../services/Storage";

const RouteCustom = ({ component: Component, layout: Layout, ...props }) => (
  <Route
    {...props}
    render={(props) => {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

const PrivateRoute = ({
  isPrivate: IsPrivate,
  component: Component,
  layout: Layout,
  ...props
}) => (
  <Route
    {...props}
    render={(props) => {
      if (IsPrivate && !StorageService.getToken()) return <Redirect to="/" />;

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

function RouteControl(props) {
  useEffect(() => {
    if (!TokenService.checkTokenExpiration()) {
      autoLogin();
    }
  }, []);

  function autoLogin() {
    props.saveUser(StorageService.getUser());
  }

  function RouteNotLogin() {
    const RouteNotPrivateData = RouteData.filter(
      (route) => !route.privateRoute
    );
    return RouteNotPrivateData.map((route, index) => (
      <RouteCustom
        key={index}
        exact={route.exact}
        layout={LayoutMain}
        path={route.path.toString()}
        component={route.component}
      />
    ));
  }

  function RouteLogin() {
    const RoutePrivateData = RouteData.filter((route) => route.privateRoute);
      return RoutePrivateData.map((route, index) => (
        <PrivateRoute
          key={index}
          exact={route.exact}
          layout={LayoutMain}
          isPrivate={route.privateRoute}
          path={route.path.toString()}
          component={route.component}
        />
      ));
  }

  return (
    <BrowserRouter history={createBrowserHistory}>
      <Switch>
        {RouteLogin()}
        {RouteNotLogin()}
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    isLogin: state.user.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(actions.saveUser(user)),
    logOut: () => dispatch(actions.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RouteControl);
