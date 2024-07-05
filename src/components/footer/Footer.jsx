import React from "react";
import "./footer.scss"
import footerLogo from "../../assets/images/bird-2374419_1920.jpg"

function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="footer_top">
          <h4>Follow us</h4>
          <div class="social_media">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="info">
            <div class="logo">
              <img src={footerLogo} alt="" />
            </div>
            <div class="links">
              <a href="contact.html" class="link">
                Contact Us
              </a>
              <a href="#" class="link">
                who are we
              </a>
              <a href="#" class="link">
                privacy policy
              </a>
            </div>
          </div>
          <p>© 2022. All rights reserved by 5Code.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
