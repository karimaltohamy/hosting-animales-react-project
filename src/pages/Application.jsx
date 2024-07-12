import React, { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Application = () => {
  useEffect(() => {
    Aos.init();
  }, []);
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
