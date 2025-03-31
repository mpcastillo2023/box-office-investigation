/* eslint-disable react/jsx-no-literals */
import styles from "./Styles/styles.module.scss";
import Clock from "../Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import React from "react";

const FooterScreen2 = () => {
  return (
    <div className={styles.loginFooterContainer}>
      <div className={styles.versionContainer}>
        <div>BoxOffice v4.0.0</div>
      </div>
      <div className={styles.clorianInfo}>
        <div className={styles.clockContainer}>
          <ClockIcon />
          <Clock />
        </div>
        <img src={ClorianLogo} alt="Clorian Logo" />
      </div>
    </div>
  );
};

export default FooterScreen2;
