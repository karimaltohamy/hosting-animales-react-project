import React, { useState } from "react";
import "./book.scss";
import { t } from "i18next";

import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Book() {
  const [date, setDate] = useState();
  const [num, setNum] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className="single">
      <div className="img"></div>
      <div className="container">
        <div className="big">
          <div className="line1 line">
            <div className="box box1">
              <div className="con1">
                <h1>Hotel Name Test</h1>
                <h4>
                  <i class="fa-solid fa-location-dot"></i> {t("Location")}
                </h4>
              </div>
              <div className="con2">
                <div className="rate">
                  <div className="inside">
                    <h1>{t("Excellent")}</h1>
                    <p>
                      {t("From")} 4 {t("Reviews")}
                    </p>
                  </div>
                  <div className="outOfFive">
                    <h1>4.5/5</h1>
                  </div>
                </div>
                <h5>100% {t("of_guets_recommend")}</h5>
              </div>
            </div>
            <div className="box2">
              <Carousel autoPlay infiniteLoop>
                {[img1, img2, img3, img4, img5, img6].map((src, i) => {
                  return (
                    <div className="all">
                      <div className="btns flow">
                        <i className="fa-solid fa-heart icon"></i>
                        <i class="fa-solid fa-expand icon "></i>
                      </div>
                      <img src={src} alt="" key={i} />
                    </div>
                  );
                })}
              </Carousel>
              <div className="heading">
                <h1 className="Smaller">{t("Description")}</h1>
                <p>
                  Start and end in San Francisco! With the in-depth cultural
                  tour Northern California Summer 2019, you have a 8 day tour
                  package taking you through San Francisco, USA and 9 other
                  destinations in USA. Northern California Summer 2019 includes
                  accommodation as well as an expert guide, meals, transport and
                  more.
                </p>
                <div className="stage2">
                  <h3>{t("Highlights")}</h3>
                  <ul>
                    <li>
                      <span></span> Visit the Museum of Modern Art in Manhattan
                    </li>
                    <li>
                      <span></span>
                      See amazing works of contemporary art, including Vincent
                      van Gogh's The Starry Night
                    </li>
                    <li>
                      <span></span>
                      Check out Campbell's Soup Cans by Warhol and The Dance (I)
                      by Matisse
                    </li>
                    <li>
                      <span></span>
                      Behold masterpieces by Gauguin, Dali, Picasso, and Pollock
                    </li>
                    <li>
                      <span></span>
                      Enjoy free audio guides available in English, French,
                      German, Italian, Spanish, Portuguese
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="line2">
            <div className="customer">
              <i class="fa-regular fa-user icon"></i>
              <div className="con">
                <Link>
                  {t("Customer")} 01 <i className="fa-solid fa-certificate"></i>
                </Link>
                <p>{t("Member_Since")} may 2024</p>
              </div>
            </div>
            <div className="related-hotels">
              <h1>
                <span></span> {t("Related_Hotels")}
              </h1>
              {[img1, img2, img3, img4, img5, img6].map((src, i) => {
                return (
                  <div className="all">
                    <img src={src} alt="" key={i} />
                    <div className="inside">
                      <div className="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <a>Hotel Name Test</a>
                      <p>
                        {t("From")} <span>$340</span> /{t("Night")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="type">
              <h1>
                <span></span> {t("PROPERTY_TYPE")}
              </h1>
              {[
                "Apartments",
                "Hotels",
                "Homestays",
                "Villas",
                "Boats",
                "Motels",
                "Resorts",
                "Holiday homes",
                "Cruises",
              ].map((word) => {
                return (
                  <div className="togther">
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <p> {t(word)}</p>
                  </div>
                );
              })}
            </div>
            <div className="type">
              <h1>
                <span></span> {t("HOTEL_SERVICE")}
              </h1>
              {[
                "Free_luggage_deposit",
                "Laundry_Services",
                "Pets_welcome",
                "Tickets",
              ].map((word) => {
                return (
                  <div className="togther">
                    <span>
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <p> {t(word)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
