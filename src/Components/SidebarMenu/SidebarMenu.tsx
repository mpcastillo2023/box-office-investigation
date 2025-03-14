/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import ArchiveWithArrowIcon from "@icons/archive-box-arrow.svg";
import ArchiveBox from "@icons/archive-box.svg";
import ChartBarIcon from "@icons/chart-bar.svg";
import CubeIcon from "@icons/cube.svg";
import HashtagIcon from "@icons/hashtag.svg";
import ArrowPathIcon from "@icons/arrow-path.svg";
import PrinterIcon from "@icons/printer.svg";
import DocumentIcon from "@icons/document.svg";
import SignalIcon from "@icons/signal.svg";
import BookIcon from "@icons/book.svg";
import LogoutIcon from "@icons/logout.svg";
import CashDropModal from "./CashDropModal/CashDropModal";
import SimpleArrowLeftIcon from "@icons/simple-arrow-left.svg";
import { Switch } from "components-gallery";
import { ThemeContext } from "../../Providers/ThemeProvider";
import UpdateModal from "../UpdateModal/UpdateModal";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isCashDropModalOpen, setIsCashDropModalOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [shouldDisplayUpdateModal, setShouldDisplayUpdateModal] =
    useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  return (
    <>
      {shouldDisplayUpdateModal ? (
        <UpdateModal
          shouldDisplayCheckingUpdateInfo={true}
          onCloseHandler={() => setShouldDisplayUpdateModal(false)}
        />
      ) : null}

      {isOpen && <div className={styles.overlay}></div>}
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      >
        <div className={styles.sidebarHeader}>
          <FormattedMessage
            id="sidebar.ticketBooth"
            defaultMessage="Taquilla TPV1 - PROVENÇA"
          />
          <div onClick={toggleSidebar}>
            <SimpleArrowLeftIcon />
          </div>
        </div>

        <ul className={styles.sidebarMenu}>
          <li className={styles.menuSection}>
            <FormattedMessage
              id="sidebar.operations"
              defaultMessage="Operativas"
            />
          </li>
          <li
            onClick={() => setIsCashDropModalOpen(true)}
            className={styles.menuItem}
          >
            <ArchiveWithArrowIcon />
            <FormattedMessage id="sidebar.withdraw" defaultMessage="Retirada" />
          </li>
          <li className={styles.menuItem}>
            <ArchiveBox />
            <FormattedMessage id="sidebar.audit" defaultMessage="Arqueo" />
          </li>
          <li className={styles.menuItem}>
            <ChartBarIcon />
            <FormattedMessage id="sidebar.reports" defaultMessage="Informes" />
          </li>

          <li className={styles.menuSection}>
            <FormattedMessage
              id="sidebar.configuration"
              defaultMessage="Configuración"
            />
          </li>
          <li className={styles.menuItem}>
            <CubeIcon />
            <FormattedMessage
              id="sidebar.changeMainProduct"
              defaultMessage="Cambiar producto principal"
            />
          </li>
          <li className={styles.menuItem}>
            <HashtagIcon />
            <FormattedMessage
              id="sidebar.initializePinPad"
              defaultMessage="Inicializar PinPad"
            />
          </li>
          <li className={styles.menuItem}>
            <ArrowPathIcon />
            <FormattedMessage
              id="sidebar.updateTicketBooth"
              defaultMessage="Actualizar datos de taquilla"
            />
          </li>
          <li className={styles.menuItem}>
            <PrinterIcon />
            <FormattedMessage
              id="sidebar.printerByProduct"
              defaultMessage="Impresoras por producto"
            />
          </li>
          <li className={styles.menuItem}>
            <DocumentIcon />
            <FormattedMessage
              id="sidebar.printTemplates"
              defaultMessage="Plantillas de impresión"
            />
          </li>
          <li className={styles.menuItem}>
            <PrinterIcon />
            <FormattedMessage
              id="sidebar.printTestTicket"
              defaultMessage="Imprimir entrada de prueba"
            />
          </li>
          <li
            className={styles.menuItem}
            onClick={() => setShouldDisplayUpdateModal(true)}
          >
            <SignalIcon />
            <FormattedMessage
              id="sidebar.checkUpdates"
              defaultMessage="Comprobar actualizaciones"
            />
          </li>

          <li className={styles.menuSection}>
            <FormattedMessage
              id="sidebar.user"
              defaultMessage="Usuario - dquilez"
            />
          </li>
          <li className={styles.menuItem}>
            <BookIcon />
            <FormattedMessage
              id="sidebar.userManual"
              defaultMessage="Manual de Usuario"
            />
          </li>
          <li className={styles.menuItem}>
            <LogoutIcon />
            <FormattedMessage id="sidebar.logout" defaultMessage="Logout" />
          </li>
        </ul>
        {/*eslint-disable-next-line react/jsx-no-literals */}
        <div className={styles.sidebarFooter}>v3.28.0 - 20250213 - qa</div>

        <div className={styles.themeSwitchContainer}>
          <Switch
            value={theme === "new"}
            textBeside={
              <FormattedMessage
                id="sidebar.enableNewColors"
                defaultMessage="Habilitar colores nuevos"
              />
            }
            onChange={(value) => setTheme(value ? "new" : "old")}
          />
        </div>
      </div>

      <CashDropModal
        isCashDropModalOpen={isCashDropModalOpen}
        setIsCashDropModalOpen={setIsCashDropModalOpen}
      />
    </>
  );
};

export default SidebarMenu;
