import React from "react";
import styles from "./content.styles.module.css";
import { BsArrowRight } from "react-icons/bs";

import oldman from "../../assets/image/covid-image-food-delivery-new.png";
import delivery from "../../assets/image/covid-image-delivery-services@2x.jpg";
import moto from "../../assets/image/covid-delivery-partner-icon.png";
import partner from "../../assets/image/covid-merchant-partner-icon.png";

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.outerWrapper}>
        <div className={styles.downWrapper}>
          <div className={styles.leftWrapper}>
            <p className={styles.bigText}>FOOD DELIVERY</p>
            <div>
              <p className={styles.text}>
                Get your comfort food from your favourite restaurant without
                leaving home. Order via the Grab app ,or click below to order
                from our website.
              </p>
              <p className={styles.link}>
                <span>
                  <BsArrowRight style={{ marginRight: 10 }} />
                </span>
                <a
                  href="https://food.grab.com/my/en/?utm_source=grab.com&utm_medium=referral&utm_campaign=Homepage-link"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Order via website
                </a>
              </p>
            </div>
          </div>
          <img src={oldman} alt="oldman" />
          <div className={styles.leftWrapper} style={{ paddingTop: 148 }}>
            <p className={styles.bigText}>Delivery services</p>
            <div>
              <p className={styles.text}>
                Need help to send or receive package safely and quicky?
                GrabExpress is still available
              </p>
              <p className={styles.link}>
                <span>
                  <BsArrowRight style={{ marginRight: 10 }} />
                </span>
                <a
                  href="https://www.grab.com/my/download/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download the app
                </a>
              </p>
            </div>
          </div>
          <img
            src={delivery}
            alt="delivery"
            style={{ width: 526, height: 584 }}
          />
        </div>
        <div className={styles.downWrapper}>
          <div className={styles.rightWrapper}>
            <p className={styles.rightLink}>
              <span>
                <img src={moto} alt="moto" style={{ width: 56, height: 56 }} />
              </span>
              Want to ride with us?
            </p>
            <p className={styles.rightLink}>
              <span>
                <img
                  src={partner}
                  alt="partner"
                  style={{ width: 56, height: 56 }}
                />
              </span>
              Are you a restaurant owner?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
