import React, { Component } from "react";

import Header from "./header";
import "./index.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <Header/>
        { this.props.children }
      </>
    );
  }
}

export default Layout;
