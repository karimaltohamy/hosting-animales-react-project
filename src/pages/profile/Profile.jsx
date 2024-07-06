import React from "react";
import profileImg from "../../assets/images/images.png";
import { MdOutlineLocalPhone, MdAccountBalance } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import "./profile.scss";
import { MdOutlineEmail } from "react-icons/md";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <div className="container">
        <div className="bg-gray-200 p-4 rounded-md">
          <div>
            <img
              src={profileImg}
              alt="profileImg"
              className="w-[100px] h-[100px] rounded-full mx-auto"
            />
          </div>
          <h3 className="font-bold text-[27px] text-center">Karim Altohamy</h3>
          <span className="text-center text-[20px] text-gray-500 block font-semibold">
            Egypt
          </span>
        </div>
        <div className="items mt-5">
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdOutlineEmail size={22} />
              {t("email")}
            </div>
            <span>karim@eample.com</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdOutlineLocalPhone size={22} />
              {t("phone")}
            </div>
            <span>0100746948</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdAccountBalance size={22} />
              {t("Country")}
            </div>
            <span>Egypt</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GiModernCity size={22} />
              {t("City")}
            </div>
            <span>Cairo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
