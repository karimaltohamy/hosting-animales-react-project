import React, { Fragment } from "react";
import "./popup.scss";
import { t } from "i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Popup = ({
  title,
  children,
  setOpenPopup,
  openPopup,
  titleBtn,
  onClick,
  maxHight = false,
  maxWidth = false,
  needSubmit = true,
  imgs,
}) => {
  return (
    <Fragment>
      <div className={`overflow ${openPopup ? "active" : ""}`}></div>
      <div className={`model_poup ${openPopup ? "active" : ""}`}>
        <div
          className={`content ${maxHight && "max_height"} ${
            maxWidth && "max_width"
          }`}
        >
          <div className="head">
            <h5 className="title_model">{title}</h5>
            <div className="close_model" onClick={() => setOpenPopup(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          {children}
          <div className="slider">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              swipeable={true}
              stopOnHover={true}
            >
              {imgs.map((src, i) => {
                return (
                  <div className="all" key={i}>
                    <div className="btns flow">
                      <i className="fa-solid fa-heart icon"></i>
                    </div>
                    <img src={src} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          {needSubmit && (
            <button className="btn_submit" onClick={onClick}>
              {t(titleBtn ? titleBtn : "global_button_submit")}
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Popup;
