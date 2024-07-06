import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Application = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      {window.innerWidth <= 900 && <Navbar />}
      <Footer />
    </Fragment>
  );
};

export default Application;
