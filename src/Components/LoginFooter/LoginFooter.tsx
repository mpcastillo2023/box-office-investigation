/* eslint-disable react/jsx-no-literals */
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import Clock from "../Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import CogIcon from "@icons/cog.svg";
import { Link } from "react-router-dom";
import { Button } from "components-gallery";
import PowerIcon from "@icons/power.svg";
import React from "react";

const LoginFooter = () => {
  return (
    <div className={styles.loginFooterContainer}>
      <div className={styles.versionContainer}>
        <div>v1.0</div>
        <div>© Clorian 2023</div>
        <div>2025668</div>
      </div>
      <div className={styles.clorianInfo}>
        <div>
          <Button
            size="full"
            variant="primary"
            type="submit"
            className={styles.settingsButton}
          >
            <PowerIcon />
            <FormattedMessage id="loginFooter.close" defaultMessage="Cerrar" />
          </Button>
        </div>
        <div>
          <Link className={styles.settingsButton} to="/settings/Login">
            <CogIcon />
            <FormattedMessage id="loginFooter.help" defaultMessage="Ayuda" />
          </Link>
        </div>
        <div className={styles.clockContainer}>
          <ClockIcon />
          <Clock />
        </div>
        <img src={ClorianLogo} alt="Clorian Logo" />
      </div>
    </div>
  );
};

export default LoginFooter;
