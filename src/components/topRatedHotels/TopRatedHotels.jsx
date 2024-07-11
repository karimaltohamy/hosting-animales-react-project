import React from "react";
import {t} from "i18next"
import img1 from "../../assets/images/Hotels/architecture-1837118_1920.jpg"
import img2 from "../../assets/images/Hotels/architecture-2572715_1920.jpg"
import img3 from "../../assets/images/Hotels/cat-box-7852492_1920.jpg"
import img4 from "../../assets/images/Hotels/hotel-575085_1920.jpg"
import img5 from "../../assets/images/Hotels/houses-742290_1920.jpg"
import img6 from "../../assets/images/Hotels/receptionists-5975962_1920.jpg"
import "./topRatedHotels.scss"
import { Link } from "react-router-dom";

function TopRatedHotels() {    
  return <div className="topRated">
    <div className="container">
    <h1>{t("top-rated-hotels")}</h1>
    <h4>{t("most-popular-hostingers")}</h4>
    <div className="grid">
        {[img1 , img2 , img3 , img4 , img5 , img6].map((src , i) => {
            return (
                <div className="box" key={i}>
                    <div className="img">
                        <img src={src} alt="" />
                        <p className="discount flow">30%</p>
                        <i className="fa-solid fa-heart icon flow"></i>
                        <Link to={"/book/hotel/2"} className="flow overFlow"><span>{t("book_now")}</span></Link>
                    </div>
                    <div className="con">
                        <div className="flex">
                            <div className="info">
                                <h1>Hotel Name</h1>
                                <p>Extra Info</p>
                            </div>
                            <div className="price">
                                <p className="last">$2000</p>
                                <p className="modern">$1400</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </div>
  </div>;
}

export default TopRatedHotels;
