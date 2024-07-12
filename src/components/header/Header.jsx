import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";
import profileImg from "../../assets/images/images.png";
import arImg from "../../assets/images/ar.png";
import enImg from "../../assets/images/Flag-United-States-of-America.webp";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const [mobile, setMobile] = useState(false);

  const changeLanguage = async (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    if (lang == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (lang == "en") {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
    window.location.reload();
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <header className="">
      <div className="container">
        {!mobile && (
          <div className="flex items-center justify-between web">
            <Link to={"/"}>
              <GiAnimalSkull size={55} />
            </Link>

            <div className="links">
              <Link to={"/"} className="link">
                {t("home")}
              </Link>
              <Link to={"/hosting"} className="link">
                {t("hosting")}
              </Link>
              <Link to={"/hosts"} className="link">
                {t("hosts")}
              </Link>
              <Link to={"/clinics"} className="link">
                {t("clinics")}
              </Link>
              <Link to={"/exercises"} className="link">
                {t("exercises")}
              </Link>
              <Link to={"/contact"} className="link">
                {t("contact_Us")}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="rounded-full"
                onClick={() =>
                  changeLanguage(i18n.language == "ar" ? "en" : "ar")
                }
              >
                <img
                  src={i18n.language == "ar" ? enImg : arImg}
                  alt="profileImg"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
              </div>
              <Link to={"/profile"}>
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
              </Link>
            </div>
          </div>
        )}
        {mobile && (
          <div className="flex items-center justify-between mobile">
            <div
              className="rounded-full"
              onClick={() =>
                changeLanguage(i18n.language == "ar" ? "en" : "ar")
              }
            >
              <img
                src={i18n.language == "ar" ? enImg : arImg}
                alt="profileImg"
                className="w-[35px] h-[35px] object-cover rounded-full"
              />
            </div>
            <Link to={"/"}>
              <GiAnimalSkull size={55} />
            </Link>
            <button>
              <img
                src={profileImg}
                alt="profileImg"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
