import styles from "./Styles/styles.module.scss";
import Bars4Icon from "@icons/bars-4.svg";
import MagnifyingGlass from "@icons/magnifying-glass.svg";
import Clock from "./Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import BuildingIcon from "@icons/building.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import { Link } from "react-router";

type SidebarProps = {
  toggleSidebar: () => void;
};

export default function Footer({ toggleSidebar }: SidebarProps) {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerOptions}>
          <div onClick={toggleSidebar} className={styles.option}>
            <Bars4Icon />
            Menu
          </div>
          <div className={styles.option}>
            <Link to="/history">
              <MagnifyingGlass />
              Reservas
            </Link>
          </div>
          <div className={styles.option}>
            <Link to="/ticketbooth">
              <BuildingIcon />
              Cajon
            </Link>
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
