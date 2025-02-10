import styles from "./Styles/styles.module.scss";
import Bars4Icon from "./../assets/icons/bars-4.svg";
import MagnifyingGlass from "./../assets/icons/magnifying-glass.svg";
import Clock from "./Clock/Clock";
import ClockIcon from "./../assets/icons/clock.svg";
import ClorianLogo from "../assets/images/clorian-logotipo.png";

type SidebarProps = {
  toggleSidebar: () => void;
};

export default function Footer({ toggleSidebar }: SidebarProps) {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerOptions}>
          <div onClick={toggleSidebar} className={styles.opction}>
            <Bars4Icon />
            Menu
          </div>
          <div className={styles.opction}>
            <MagnifyingGlass />
            Reservas
          </div>
        </div>
        <div className={styles.clorianInfo}>
          <div className={styles.clockContainer}>
            <ClockIcon />
            <Clock />
          </div>
          <img src={ClorianLogo} alt="Clorian Logo" />
        </div>
      </div>
    </>
  );
}
