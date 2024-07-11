import React, { useState } from "react";
import "./book.scss";
import { t } from "i18next";

import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg";
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg";
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg";
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg";
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg";
const imgs = [img1, img2, img3, img4, img5, img6];
import "react-responsive-carousel/lib/styles/carousel.min.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Popup from "../../components/PopUp-Slider/Popup";

function Book() {
  const [showTime, setShowTime] = useState(false);
  const [showNum, setShowNum] = useState(false);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [Pets, setPets] = useState(0);
  const [showSLiderPopUp, setShowSliderPopUp] = useState(false);

  const onChange = (dates, e) => {
    e.stopPropagation();
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setShowTime(false);
    }
  };
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
                  <i className="fa-solid fa-location-dot"></i> {t("Location")}
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
                {imgs.map((src, i) => {
                  return (
                    <div className="all" key={i}>
                      <div className="btns flow">
                        <i className="fa-solid fa-heart icon"></i>
                        <i
                          className="fa-solid fa-expand icon "
                          onClick={() => setShowSliderPopUp(true)}
                        ></i>
                      </div>
                      <img src={src} alt="" />
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
            <div className="box3">
              <div className="heading">
                <h1 className="Smaller mt">{t("Available_Rooms")}</h1>
              </div>
              <div className="search">
                <div className="core">
                  <div
                    className="second box"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTime(true);
                    }}
                  >
                    <div className="inside">
                      <i className="fa-regular fa-clock"></i>
                      <div className="toflex">
                        <h1>{t("Check In - Out")}</h1>
                        {startDate && endDate ? (
                          <h3>
                            {format(startDate, "yyyy-MM-dd")}
                            <i
                              className={`fa-solid fa-arrow-${
                                localStorage.lang == "en" ? "right" : "left"
                              } small`}
                            ></i>
                            {format(endDate, "yyyy-MM-dd")}
                          </h3>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {showTime && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          selectsDisabledDaysInRange
                          inline
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className="last box"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowNum(true);
                    }}
                  >
                    <div className="inside">
                      <i className="fa-solid fa-paw"></i>
                      <div className="toflex">
                        <h1>{t("Gustes")}</h1>
                        <h3>
                          {" "}
                          {t("PLease set the Number Of Pets ")} : {Pets}{" "}
                        </h3>
                      </div>
                    </div>
                    {showNum && (
                      <div className="setNumber flow" id="setNumber">
                        <i
                          className="fa-solid fa-xmark close"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowNum(false);
                          }}
                        ></i>
                        <h3> {t("PLease set the Number Of Pets ")} : </h3>
                        <input
                          type="number"
                          onChange={(e) => setPets(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                  <div className="btn">
                    <button>{t("Search")}</button>
                  </div>
                </div>
              </div>
              <div className="result">
                {imgs.map((src, i) => {
                  return (
                    <div className="all" key={i}>
                      <div className="img">
                        <div
                          className="btns flow"
                          onClick={() => setShowSliderPopUp(true)}
                        >
                          <p>6</p>
                          <i className="fa-solid fa-expand  "></i>
                        </div>
                        <img src={src} alt="" />
                      </div>
                      <div className="inside">
                        <h1>Hotel Name</h1>
                        <div className="pref">
                          <div className="icon-2">
                            <i className="fa-brands fa-uncharted"></i>
                            <p>200 sqft</p>
                          </div>
                          <div className="icon-2">
                            <i class="fa-solid fa-bed"></i>
                            <p>*2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rules">
              <div className="heading">
                <h1 className="Smaller">{t("Rules")}</h1>
              </div>
              <div className="row">
                <h2>{t("Check_In")}</h2>
                <p>12:00AM</p>
              </div>
              <div className="row">
                <h2>{t("Check_Out")}</h2>
                <p>11:00AM</p>
              </div>
              <div className="row">
                <h2>{t("Hotel_Policies")}</h2>
                <p>
                  {t("Guarantee_Policy")}{" "}
                  <span>
                    - A valid credit card will be required upon booking; - For
                    credit card reservations, the same card(s) must be presented
                    upon check in at the respective hotels; - Management
                    reserves the right to cancel any reservations without notice
                    if we are notified of any fraud or illegal activities
                    associated with the full payments received. Children Policy
                    - Child under 5-year old: free of charge. - Child from
                    5-year old to under 12-year old: surcharge
                    $10/person/room/night. - Child from 12-year old or extra
                    Adult: surcharge $15/person/room/night.
                    {show && (
                      <p className={`end`}>
                        Cancellation/Amendment Policy - If
                        cancellation/amendment is made 72 hours prior to your
                        arrival date, no fee will be charged. - If
                        cancellation/amendment is made within 72 hours,
                        including reservations made within 72 hours of your
                        arrival, 1st night’s room rate and tax will be charged -
                        In case of no-show, 100% room rate and tax will be
                        charged. - Early Bird/Long Stay/Last Min/Package Rates
                        are Non - changeable & Non - refundable Late check-out
                        policy - Late check-out is subject to room availability
                        - 12:00 to 17:00 check-out: 50% room rate surcharge -
                        After 17:00 check-out: 100% room rate surcharge
                      </p>
                    )}
                  </span>{" "}
                </p>
              </div>

              <div className="show" onClick={() => setShow(!show)}>
                {show ? t("Show_Less") : t("Show_All")}{" "}
                <i className={`fa-solid fa-caret-${show ? "up" : "down"}`}></i>
              </div>
            </div>
            <map>
              <div className="heading">
                <h1 className="Smaller">{t("Location")}</h1>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10095564.103630614!2d25.792133641888377!3d25.461867573556113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1720703590104!5m2!1sen!2seg"
                width="800"
                height="600"
                className="full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </map>
            <div className="reviewDiv">
              <div className="heading">
                <h1 className="Smaller">{t("Reviews")}</h1>
                <div className="box">
                  <div className="rate">
                    <h1><span className="size">4.7</span> /5</h1>
                    <h1>{t("Excellent")}</h1>
                    <h1>{t("Based_On")} <span>3 {t("Reviews")}</span></h1>
                  </div>
                  <div className="calc">
                    <div className="ex">
                      <h1>{t("Excellent")} </h1>
                      <span></span>
                      <span>2</span>
                    </div>
                    <div className="ex ">
                      <h1>{t("Very_Good")} </h1>
                      <span></span>
                      <span>1</span>
                    </div>
                    <div className="ex ">
                      <h1>{t("Average")} </h1>
                      <span></span>
                      <span>0</span>
                    </div>
                    <div className="ex ">
                      <h1>{t("Poor")} </h1>
                      <span></span>
                      <span>0</span>
                    </div>
                    <div className="ex ">
                      <h1>{t("Terrible")} </h1>
                      <span></span>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line2">
            <div className="customer">
              <i className="fa-regular fa-user icon"></i>
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
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
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
      {/* PopUp Slider */}
      <Popup
        maxHight={true}
        maxWidth={true}
        imgs={imgs}
        openPopup={showSLiderPopUp}
        setOpenPopup={setShowSliderPopUp}
        needSubmit={false}
        title={t("Hover_To_stop")}
      ></Popup>
    </div>
  );
}

export default Book;
