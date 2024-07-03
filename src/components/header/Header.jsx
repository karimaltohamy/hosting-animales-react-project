import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";
import profileImg from "../../assets/images/images.png";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="rounded-full">
          <img
            src={profileImg}
            alt="profileImg"
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
        <Link to={"/"}>
          <GiAnimalSkull size={55} />
        </Link>{" "}
        <button>
          <MdOutlineLanguage size={30} className="!w-[30px]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
