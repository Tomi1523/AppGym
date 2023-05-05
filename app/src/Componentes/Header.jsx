import React, { useState } from "react";
import "../Styles.css/Header.css";
import logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import {Link} from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpened(true);
  };

  const handleMenuClose = () => {
    setMenuOpened(false);
  };

  return (
    <div className="header">
      <img src={logo} className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.7rem",
            borderRadius: "8px",
          }}
          onClick={handleMenuOpen}
        >
          <img src={Bars} style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={handleMenuClose}>
          <Link
          onClick={handleMenuClose}
          to="home"
          spy={true}
          smooth={true}

          >Home</Link></li>
          <li onClick={handleMenuClose}><Link
          onClick={handleMenuClose}
          to="programs"
          spy={true}
          smooth={true}
          >programs</Link></li>

          <li onClick={handleMenuClose}>
          <Link
          onClick={handleMenuClose}
          to="reasons"
          spy={true}
          smooth={true}
          > 
          why us </Link></li>
          <li onClick={handleMenuClose}>
          <Link  onClick={handleMenuClose}
          to="plans"
          spy={true}
          smooth={true} > 
          
          
          Plans</Link></li>
          <li onClick={handleMenuClose}><Link
          onClick={handleMenuClose}
          to="Testimonials"
          spy={true}
          smooth={true}
          >Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};


export default Header;
