import React from "react";
import appleStore from "../../assets/image/01-app-store-btn-250x74.png";
import googleStore from "../../assets/image/02-play-store-btn-250x74.png";

//styles
import styles from "./mobileLinks.styles.module.css";

const MobileLink = () => {
  console.log(`This is the mobile links ${styles}`);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Get the app</p>
      <div className={styles.image}>
        <a
          href="https://apps.apple.com/SG/app/id647268330?mt=8"
          target="_blank"
        >
          {" "}
          <img src={appleStore} alt="appleStore" style={{ marginRight: 30 }} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&referrer=af_tranid%3D7YzqWoBkAyC5kziowVyvVQ%26pid%3DMY-Website-ADR-Install_Button%26c%3DWebsite_Download%26af_web_id%3D83c680eb-b98f-481b-a54b-27b35818c95b-c%26utm_source%3DMY-Website-ADR-Install_Button%26utm_campaign%3DWebsite_Download"
          target="_blank"
        >
          <img src={googleStore} alt="googleStore" />
        </a>
      </div>
    </div>
  );
};

export default MobileLink;
