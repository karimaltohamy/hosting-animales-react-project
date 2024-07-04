import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";

const Application = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      {/* <Navbar /> */}

    </Fragment>
  );
};

export default Application;
