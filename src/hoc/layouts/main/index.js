import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Header from "./header";
import "./index.scss";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>{this.props.children}</Container>
      </>
    );
  }
}

export default Layout;
