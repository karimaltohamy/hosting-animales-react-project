import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import logo from "../../assets/images/bird-2374419_1920.jpg";
import "./loginAs.scss";

const LoginAsHostinger = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [languages, setLanguages] = useState([]);
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <div className="loginAs">
        <div className="line">
          <div className="logo">
            <img src={logo} alt="" loading="lazy" />
          </div>

          <form >
            <div className="text">
              <h3>{t("Start With Us")}</h3>
            </div>
            <div className="input_item">
              <label htmlFor=""> {t("username")} </label>
              <input
                type="text"
                placeholder={t("Enter your username")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input_item">
              <label htmlFor=""> {t("Email")} </label>
              <input
                type="email"
                placeholder={t("Enter your Email")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_item">
              <label htmlFor=""> {t("Phone")} </label>
              <input
                type="number"
                placeholder={t("Enter your Email")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_item flex">
              <div className="bik">
                <label htmlFor=""> {t("Age")} </label>
                <input type="number" placeholder={t("Enter your Age")} />
              </div>
              <div className="bik">
                <label htmlFor=""> {t("Host Place")} </label>
                <input type="email" placeholder={t("Enter your Host Place")} />
              </div>
            </div>
            <div className="input_item">
              <div className="upload">
                <label htmlFor=""> {t("Upload Photos For Your Place")} </label>
                <input
                  type="file"
                  multiple
                  name="files"
                  onChange={(e) => console.log(e.target.files)}
                />
              </div>
              <div className="place">
                <label htmlFor=""> {t("Natioanl Card Photo")} </label>
                <input type="file" />
              </div>
            </div>
            <button className="btn_login" type="submit">
              {t("Enroll")}
            </button>
          </form>
        </div>
      </div>
      {loading && <Loader plainBackground />}
    </Fragment>
  );
};

export default LoginAsHostinger;
