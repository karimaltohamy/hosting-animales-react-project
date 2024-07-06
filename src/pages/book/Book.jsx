import React, { useState } from "react";
import "./book.scss";

import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
                <h4> Arrondissement de ALULA</h4>
              </div>
              <div className="con2">
                <div className="rate">
                  <div className="inside">
                    <h1>Excellent</h1>
                    <p>from 4 Reviews</p>
                  </div>
                  <div className="outOfFive">
                    <h1>4.5/5</h1>
                  </div>
                </div>
                <h5>100% of guets recommend</h5>
              </div>
            </div>
            <div className="box box2">
              <div className="inside">
                <div className="flex">
                  <i className="fa-regular fa-clock"></i>
                  <div className="con">
                    <p>Duration</p>
                    <p>5 Hours</p>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="flex">
                  <i className="fa-regular fa-clock"></i>
                  <div className="con">
                    <p>Duration</p>
                    <p>5 Hours</p>
                  </div>
                </div>
              </div>
              <div className="inside">
                <div className="flex">
                  <i className="fa-regular fa-clock"></i>
                  <div className="con">
                    <p>Duration</p>
                    <p>5 Hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box3">
              {/*<Swiper
                effect={"cube"}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                cubeEffect={{
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={false}
                modules={[EffectCube, Pagination, Autoplay]}
              >
                {[img1, img2, img3, img4, img5, img6].map((src, i) => {
                  return (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <img src={src} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>*/}
              <div className="heading">
                <h1 className="Smaller">over View</h1>
                <p>
                  Start and end in San Francisco! With the in-depth cultural
                  tour Northern California Summer 2019, you have a 8 day tour
                  package taking you through San Francisco, USA and 9 other
                  destinations in USA. Northern California Summer 2019 includes
                  accommodation as well as an expert guide, meals, transport and
                  more.
                </p>
              </div>
            </div>
          </div>
          <div className={`line2 line ${show ? "show" : ""}`}>
            <div className="pref">
              <i className="fa-regular fa-user icon"></i>
              <div className="heading">
                <h1 className="Smaller">customer 01</h1>
                <h4 className="Smaller">member since may 2024</h4>
              </div>
            </div>
            <div className="equations">
              <div className="part part1">
                <h1 className="from">
                  From :<span className="text">$2000</span>
                </h1>
                <h1 className="to">
                  To :<span className="text">$200</span>
                </h1>
              </div>
              <div className="part part2">
                <h1>pick Date :</h1>
                <h1 className="text"> {date || "07/13/2024 to 07/13/2024"}</h1>
              </div>
              <div className="part part3">
                <h1>number of Pets : </h1>
                <div className="counter">
                  <span>-</span>
                  <span>{num}</span>
                  <span>+</span>
                </div>
              </div>
              <div className="part part4">
                <h1>Total : </h1>
                <h1 className="text">$1,100</h1>
              </div>
              <div className="end">
                <button className="book">BOOK NOW</button>
              </div>
            </div>
            <div className="trigger">
              <button className="here" onClick={() => setShow(!show)}>
                Book Here{" "}
                <i
                  className={`fa-solid ${
                    show ? "fa-arrow-down fa-shake" : "fa-arrow-up fa-shake"
                  }`}
                ></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
