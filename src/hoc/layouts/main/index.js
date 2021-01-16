import React from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import "./index.scss";

function Layout(props) {

  return (
    <>
      <Header />
      <Container>{props.children}</Container>
    </>
  );
}
export default Layout;
