import React, { useState } from "react";
import LogoSVG from "./svg/LogoSVG";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className="site-hd">
      <div
        className={
          isOpen
            ? "masthead u-constrainer show_down  "
            : "masthead u-constrainer"
        }
      >
        <LogoSVG color={isOpen ? "#0b6e75" : "#ffffff"} />
        <nav className={isOpen ? "hList responsive" : "hList"}>
          <Link className="navLink" to={''}>
            Home
          </Link>
          <Link className="navLink" to={''}>
            Current
          </Link>
          <Link className="navLink" to={''}>
            Voting
          </Link>
          <Link className="navLink" to={''}>
            Sign Up
          </Link>
        </nav>
        <Link to={''} className="hamburger" onClick={handleClickMenu}>
          {isOpen ? (
            <FaWindowClose fill={isOpen ? "#919191" : "#ffffff"} />
          ) : (
            <FaBars />
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
