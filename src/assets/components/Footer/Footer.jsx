import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* Social Icons */}
        <div className={style.socialIcons}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={style.footerLinks}>
          <div className={style.column}>
            <a href="#">Audio Description</a>
            <a href="#">Investor Relations</a>
            <a href="#">Legal Notices</a>
          </div>

          <div className={style.column}>
            <a href="#">Help Centre</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
          </div>

          <div className={style.column}>
            <a href="#">Gift Cards</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
          </div>

          <div className={style.column}>
            <a href="#">Media Centre</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        {/* Service Code */}
        <button className={style.serviceCode}>Service Code</button>

        {/* Copyright */}
        <p className={style.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;