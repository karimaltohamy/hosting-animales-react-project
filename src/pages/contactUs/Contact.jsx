import React from "react";
import "./contact.scss";
import img from "../../assets/images/ai-generated-8556454_1920.jpg";
import { t } from "i18next";

function Contact() {
  return (
    <section className="contact-form">
      <div className="container">
        <h4 className="sectionHeader" data-aos="zoom-out">
          {t("contact_Us")}
        </h4>
        <h1 className="heading" data-aos="zoom-out">
          {t("Get_In_Touch!")}
        </h1>
        <div className="contactForm">
          <form action="#" data-aos="fade-left" data-aos-delay="200">
            <h1 className="sub-heading">{t("Need_Support!")}</h1>
            <p className="para para2">
              {t("Contact us for a quote , help to join the them.")}
            </p>
            <input
              type="text"
              data-aos="fade-left"
              data-aos-delay="300"
              className="input"
              placeholder={t("Name")}
            />
            <input
              type="text"
              data-aos="fade-left"
              data-aos-delay="600"
              className="input"
              placeholder={t("Email")}
            />
            <input
              type="text"
              data-aos="fade-left"
              data-aos-delay="800"
              className="input"
              placeholder={t("Subject")}
            />
            <textarea
              className="input textarea"
              cols="30"
              rows="6"
              data-aos="fade-left"
              data-aos-delay="1100"
              placeholder={t("Message")}
            ></textarea>
            <input type="submit" className="input submit" value={t("Send")} />
          </form>

          <div
            className="map-container"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div className="mapBg"></div>
            <div className="map">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
