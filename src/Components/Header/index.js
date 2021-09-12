import React from "react";

import styles from "./headerLinks.styles.module.css";
import { BsFillCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.info}>
        <span>
          <BsFillCircleFill className={styles.animation}></BsFillCircleFill>
        </span>
        <a
          href="https://www.grab.com/my/safety/covid-19/"
          style={{ textDecoration: "none", color: "white" }}
        >
          COVID-19 info: All you need to know about our safety and operational
          measure
        </a>
      </p>
      <hr />
      <h2 className={styles.title}>
        Despite these uncertain times, we're still here to serve you{" "}
      </h2>
    </div>
  );
};

export default Header;
