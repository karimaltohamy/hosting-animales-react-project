import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sliderImg from "../../assets/images/slider-img.webp";
import sliderImg2 from "../../assets/images/slider-img2.webp";
import sliderImg3 from "../../assets/images/slider-img3.webp";
import sliderImg4 from "../../assets/images/slider-img4.webp";
import "./heroSlider.scss";

const HeroSlider = () => {
  return (
    <div
      className="container"
      data-aos="flip-up"
      data-aos-duration="1500"
      data-aos-easing="ease-out-cubic"
    >
      <div className="slide-container rounded-[12px] overflow-hidden bg-white px-5 pt-7 pb-5 shadow-lg border border-gray-200">
        <Carousel>
          <div className="rounded-lg overflow-hidden">
            <img
              src={sliderImg}
              alt="slider-img"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={sliderImg2}
              alt="slider-img"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={sliderImg3}
              alt="slider-img"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={sliderImg4}
              alt="slider-img"
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSlider;
