import styles from "./Styles/styles.module.scss";
import Bars4Icon from "@icons/bars-4.svg";
import MagnifyingGlass from "@icons/magnifying-glass.svg";
import Clock from "./Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import BuildingIcon from "@icons/building.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import { Link } from "react-router";
import { Modal, Switch, UseIsDesktop } from "components-gallery";
import useNetworkStatus from "../../Hooks/useNetworkStatus";
import { useEffect, useState } from "react";

type SidebarProps = {
  toggleSidebar: () => void;
};

export default function Footer({ toggleSidebar }: SidebarProps) {
  const { isDesktop } = UseIsDesktop();
  const { isOnline } = useNetworkStatus();
  const [isAppOnline, setIsAppOnline] = useState(isOnline);
  const [shouldDisplayOnlineModal, setShouldDisplayOnlineModal] =
    useState(false);

  useEffect(() => {
    setIsAppOnline(isOnline);
  }, [isOnline]);
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerOptions}>
          <div onClick={toggleSidebar} className={styles.option}>
            <Bars4Icon />
            {isDesktop ? <span>Menu</span> : null}
          </div>
          <div className={styles.option}>
            <Link to="/history">
              <MagnifyingGlass />
              {isDesktop ? <span>Reservas</span> : null}
            </Link>
          </div>
          <div className={styles.option}>
            <Link to="/ticketbooth">
              <BuildingIcon />
              {isDesktop ? <span>Cajon</span> : null}
            </Link>
          </div>
        </div>
        <div className={styles.clorianInfo}>
          <Switch
            textBeside={isAppOnline ? "Online" : "Offline"}
            value={isAppOnline}
            onChange={() => setShouldDisplayOnlineModal(true)}
            customStyles={styles}
          />
          <div className={styles.clockContainer}>
            <ClockIcon />
            <Clock />
          </div>
          <img src={ClorianLogo} alt="Clorian Logo" />
        </div>
      </div>
      <Modal
        isModalOpen={shouldDisplayOnlineModal}
        setIsModalOpen={setShouldDisplayOnlineModal}
        variant="success"
        isConfirmModal={true}
        confirmButtonText={"Confirmar"}
        cancelButtonText={"Cancelar"}
        customStyle={styles}
        onConfirmHandler={() => setIsAppOnline((prevState) => !prevState)}
        modalTitle={<div>¿Confirmar que desea cambiar de modo?</div>}
      >
        {isAppOnline ? (
          <div>La aplicacion va a perder la conexion</div>
        ) : (
          <div>La aplicacion va a restablecer la conexion</div>
        )}
      </Modal>
    </>
  );
}
