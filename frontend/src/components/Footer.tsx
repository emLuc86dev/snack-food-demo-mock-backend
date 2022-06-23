import React from "react";
import { Link } from "react-router-dom";
import LogoSVG from "./svg/LogoSVG";

const Footer = () => {
  return (
    <footer className="site-ft">
      <div className="footer u-constrainer">
        <div className="footer-primary">
          <Link to={''} className="footLogo">
            <LogoSVG color="#6b6b6b" />
          </Link>
        </div>
        <div className="footer-secondary">
          <nav className="hList hList_divided u-vr_x3 footer">
            <Link to={''} className="navLink navLink_dark" >
              Home
            </Link>
            <Link to={''} className="navLink navLink_dark">
              Current
            </Link>
            <Link to={""} className="navLink navLink_dark" >
              Voting
            </Link>
            <Link to={""} className="navLink navLink_dark">
              Sign Up
            </Link>
          </nav>
          <small className="finePrint">
            &copy; The Nerdery | 9555 James Ave S #245, Bloomington, MN 55431
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
