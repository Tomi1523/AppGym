import React from "react";
import "../Styles.css/Footer.css";
import Github from "../assets/github.png";
import Instragam from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} />
          <img src={Instragam} />
          <img src={Linkedin} />
        </div>
        <div className="logo-f">
          <img src={Logo} />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
