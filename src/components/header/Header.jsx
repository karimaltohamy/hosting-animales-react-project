import React from "react";
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

  console.log(i18n.language);
  return (
    <header className="mb-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div
            className="rounded-full"
            onClick={() => changeLanguage(i18n.language == "ar" ? "en" : "ar")}
          >
            <img
              src={i18n.language == "ar" ? enImg : arImg}
              alt="profileImg"
              className="w-[35px] h-[35px] object-cover rounded-full"
            />
          </div>
          <Link to={"/"}>
            <GiAnimalSkull size={55} />
          </Link>{" "}
          <button>
            <MdOutlineLanguage size={30} className="!w-[30px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
