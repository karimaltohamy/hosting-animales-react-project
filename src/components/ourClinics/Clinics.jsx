import React, { useState } from "react";

import { t } from "i18next";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./clinics.scss";
import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Clinics() {
  return (
    <div className="clinics">
      <div className="container">
        <h1>Our Clinics</h1>
        <h4>{t("most-popular-hostingers")}</h4>
        <Swiper
          effect="coverflow"
          spaceBetween={20}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 37,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {[img1, img2, img3, img4, img5, img6].map((src, i) => {
            return (
              <SwiperSlide className="swiper-slide" key={i}>
                <div class="img">
                  <img src={src} alt="" />
                  <i className="fa-solid fa-heart icon flow"></i>
                  <div className="rateStar">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
                <div class="con">
                  <h2>
                    name : <span> Test</span>
                  </h2>
                  <div className="rate">
                    <h1>
                      4.8/5 <span>Excellent</span>
                    </h1>
                    <p>*</p>
                    <p> 4 Reviews</p>
                  </div>
                  <div className="price">
                    price : <span>40$ / session</span>
                  </div>
                  <button className="showMore">show More</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Clinics;
