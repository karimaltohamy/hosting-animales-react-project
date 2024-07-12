import React from "react";

import { t } from "i18next";
import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";

import "./Training.scss";

function Training() {
  return (
    <div className="training">
      <div className="container" data-aos="zoom-in">
        <h1>{t("Our_Training")}</h1>
        <h4>{t("most-popular-hostingers")}</h4>
        <div className="grid">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => {
            return (
              <div
                class="box"
                key={i}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <div class="img">
                  <img src={src} alt="" />
                  <div className="flow">
                    <i className="fa-solid fa-heart icon "></i>
                    <div className="rateStar">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="con">
                  <h2>
                    {t("Name")} : <span> Test</span>
                  </h2>
                  <div className="rate">
                    <h1>
                      4.8/5 <span>{t("Excellent")}</span>
                    </h1>
                    <p>*</p>
                    <p> 4 {t("Reviews")}</p>
                  </div>
                  <div className="price">
                    {t("price")} : <span>40$ / {t("Session")}</span>
                  </div>
                  <button className="showMore">{t("Show_More")}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Training;
