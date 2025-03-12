import styles from "./Styles/styles.module.scss";
import Clock from "../../../Components/Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import CogIcon from "@icons/cog.svg";
import { Link } from "react-router-dom";

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
          <Link className={styles.settingsButton} to="/settings">
            <CogIcon /> Ayuda
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
