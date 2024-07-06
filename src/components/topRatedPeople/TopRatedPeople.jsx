import React from "react";
import "./topRatedPeople.scss";
import { t } from "i18next";
import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";

function TopRatedPeople() {
  return (
    <div className="topPeople">
      <div className="container">
        <h1>Our Best personal Hostingres</h1>
        <h4>{t("most-popular-hostingers")}</h4>
        <div class="all">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => {
            return (
              <div class="sox" key={i}>
                <div class="image">
                  <img src={src} alt="" />
                  <i className="fa-solid fa-heart icon flow"></i>
                </div>
                <div className="con">
                  <h2>MR : Mohamed Gamal</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nostrum repudiandae unde ullam mollitia ex voluptate.
                  </p>
                  <div className="info">
                  <a href="">{t("book_now")}</a>
                  <h1>price : 200$</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRatedPeople;
