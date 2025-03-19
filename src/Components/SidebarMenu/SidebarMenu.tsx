/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
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
import useSidebar from "./hooks/useSidebar";
import { Link } from "react-router-dom";
import PrintersTemplatesModal from "./PrintersTemplatesModal/PrintersTemplatesModal";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const {
    sidebarRef,
    isCashDropModalOpen,
    setIsCashDropModalOpen,
    shouldDisplayUpdateModal,
    setShouldDisplayUpdateModal,
    isPrintersTemplatesModalOpen,
    setIPrintersTemplatesModalOpen
  } = useSidebar({ isOpen, toggleSidebar });

  const { theme, setTheme } = useContext(ThemeContext);

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
          <button onClick={toggleSidebar}>
            <SimpleArrowLeftIcon />
          </button>
        </div>

        <ul className={styles.sidebarMenu}>
          <li className={styles.menuSection}>
            <FormattedMessage
              id="sidebar.operations"
              defaultMessage="Operativas"
            />
          </li>
          <li className={styles.menuItem}>
            <button onClick={() => setIsCashDropModalOpen(true)}>
              <ArchiveWithArrowIcon />
              <FormattedMessage
                id="sidebar.withdraw"
                defaultMessage="Retirada"
              />
            </button>
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
            <button onClick={() => setIPrintersTemplatesModalOpen(true)}>
              <PrinterIcon />
              <FormattedMessage
                id="sidebar.printerByProduct"
                defaultMessage="Impresoras por producto"
              />
            </button>
          </li>
          <li className={styles.menuItem}>
            <Link to="/print-templates">
              <DocumentIcon />
              <FormattedMessage
                id="sidebar.printTemplates"
                defaultMessage="Plantillas de impresión"
              />
            </Link>
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
              defaultMessage="Usuario - box-office-qa"
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
            <Link to="/">
              <LogoutIcon />
              <FormattedMessage id="sidebar.logout" defaultMessage="Logout" />
            </Link>
          </li>
        </ul>
        {/*eslint-disable-next-line react/jsx-no-literals */}
        <div className={styles.sidebarFooterWrapper}>
          <span className={styles.sidebarFooterText}>BoxOffice v4.0.0 </span>
          <div className={styles.themeSwitchContainer}>
            <Switch
              customStyles={styles}
              size="extraSmall"
              value={theme === "new"}
              textBeside={
                <div className={styles.switchText}>
                  <FormattedMessage
                    id="sidebar.enableNewColors"
                    defaultMessage="Habilitar colores nuevos"
                  />
                </div>
              }
              onChange={(value) => setTheme(value ? "new" : "old")}
            />
          </div>
        </div>
      </div>

      <CashDropModal
        isCashDropModalOpen={isCashDropModalOpen}
        setIsCashDropModalOpen={setIsCashDropModalOpen}
      />
      <PrintersTemplatesModal
        isPrintersTemplatesModalOpen={isPrintersTemplatesModalOpen}
        setIPrintersTemplatesModalOpen={setIPrintersTemplatesModalOpen}
      />
    </>
  );
};

export default SidebarMenu;
