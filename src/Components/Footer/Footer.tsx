/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import Bars4Icon from "@icons/bars-4.svg";
import MagnifyingGlass from "@icons/magnifying-glass.svg";
import Clock from "../../Components/Clock/Clock";
import ClockIcon from "@icons/clock.svg";
import BuildingIcon from "@icons/building.svg";
import ClorianLogo from "@images/clorian-logotipo.png";
import { Link } from "react-router";
import { Modal, Switch, UseIsDesktop } from "components-gallery";
import React from "react";
import UseFooter from "./hooks/UseFooter";

type SidebarProps = {
  toggleSidebar: () => void;
};

export default function Footer({ toggleSidebar }: SidebarProps) {
  const {
    isDesktop,
    isAppOnline,
    shouldDisplayOnlineModal,
    setShouldDisplayOnlineModal,
    setIsAppOnline
  } = UseFooter();

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerOptions}>
          <button onClick={toggleSidebar} className={styles.option}>
            <Bars4Icon />
            {isDesktop ? (
              <span>
                <FormattedMessage id="footer.menu" defaultMessage="Menú" />
              </span>
            ) : null}
          </button>
          <div className={styles.option}>
            <Link to="/history">
              <MagnifyingGlass />
              {isDesktop ? (
                <span>
                  <FormattedMessage
                    id="footer.reservations"
                    defaultMessage="Reservas"
                  />
                </span>
              ) : null}
            </Link>
          </div>
          <div className={styles.option}>
            <Link to="/ticketbooth">
              <BuildingIcon />
              {isDesktop ? (
                <span>
                  <FormattedMessage id="footer.drawer" defaultMessage="Cajón" />
                </span>
              ) : null}
            </Link>
          </div>
        </div>
        <div className={styles.clorianInfo}>
          <Switch
            textBeside={
              isAppOnline ? (
                <FormattedMessage id="footer.online" defaultMessage="Online" />
              ) : (
                <FormattedMessage
                  id="footer.offline"
                  defaultMessage="Offline"
                />
              )
            }
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
        confirmButtonText={
          <FormattedMessage id="footer.confirm" defaultMessage="Confirmar" />
        }
        cancelButtonText={
          <FormattedMessage id="footer.cancel" defaultMessage="Cancelar" />
        }
        customStyle={styles}
        onConfirmHandler={() => setIsAppOnline((prevState) => !prevState)}
        modalTitle={
          <div>
            <FormattedMessage
              id="footer.confirmModeChange"
              defaultMessage="¿Confirmar que desea cambiar de modo?"
            />
          </div>
        }
      >
        {isAppOnline ? (
          <div>
            <FormattedMessage
              id="footer.loseConnection"
              defaultMessage="La aplicación va a perder la conexión"
            />
          </div>
        ) : (
          <div>
            <FormattedMessage
              id="footer.restoreConnection"
              defaultMessage="La aplicación va a restablecer la conexión"
            />
          </div>
        )}
      </Modal>
    </>
  );
}
