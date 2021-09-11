import React, { useState, useEffect } from "react";
import logo from "../../assets/image/grab_logo_158.png";
import styles from "./navbar.styles.module.css";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const resize = () => {
    let currentHideNav = window.innerWidth < 768;

    setIsMobile(currentHideNav);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <ul>
          <li>
            <a href="#">
              <BsList className={styles.listIcon} />
              <small style={{ display: "block", marginTop: "-12px" }}>
                Menu
              </small>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="grab"></img>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.sideContainer}>
        {!isMobile && (
          <div>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.smallText}>Be our partner</span>{" "}
                  <RiArrowDropDownLine />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <span className={styles.smallText}>Help centre</span>
                </a>
              </li>
            </ul>
          </div>
        )}

        <ul>
          <li>
            <input type="text" style={{ display: "none" }} />
            <AiOutlineSearch className={styles.searchIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
