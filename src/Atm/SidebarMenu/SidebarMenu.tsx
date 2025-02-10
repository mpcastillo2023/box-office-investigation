import React, { useEffect, useRef } from "react";
import styles from "./Styles/styles.module.scss";
import ClorianLogoSidebar from "../../assets/images/clorian-logotipo-sidebar.png";
import ArchiveWithArrowIcon from "../../assets/icons/archive-box-arrow.svg";
import ArchiveBox from "../../assets/icons/archive-box.svg";
import ChartBarIcon from "../../assets/icons/chart-bar.svg";
import CubeIcon from "../../assets/icons/cube.svg";
import HashtagIcon from "../../assets/icons/hashtag.svg";
import ArrowPathIcon from "../../assets/icons/arrow-path.svg";
import PrinterIcon from "../../assets/icons/printer.svg";
import DocumentIcon from "../../assets/icons/document.svg";
import SignalIcon from "../../assets/icons/signal.svg";
import BookIcon from "../../assets/icons/book.svg";
import LOgoutIcon from "../../assets/icons/logout.svg";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target as Node)
        ) {
          toggleSidebar();
          console.log("clicked outside");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebar]);

  return (
    <>
      {isOpen && <div className={styles.overlay}></div>}
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.sidebarHeader}>
          <img src={ClorianLogoSidebar} alt="Clorian Logo" />
          Taquilla TPV1 - PROVENÇA
        </div>
        <ul className={styles.sidebarMenu}>
          <li className={styles.menuSection}>Operativas</li>
          <li className={styles.menuItem}>
            <ArchiveWithArrowIcon /> Retirada
          </li>
          <li className={styles.menuItem}>
            <ArchiveBox /> Arqueo
          </li>
          <li className={styles.menuItem}>
            <ChartBarIcon /> Informes
          </li>
          <li className={styles.menuSection}>Configuración</li>
          <li className={styles.menuItem}>
            <CubeIcon /> Cambiar producto principal
          </li>
          <li className={styles.menuItem}>
            <HashtagIcon /> Inicializar PinPad
          </li>
          <li className={styles.menuItem}>
            <ArrowPathIcon /> Actualizar datos de taquilla
          </li>
          <li className={styles.menuItem}>
            <PrinterIcon /> Impresoras por producto
          </li>
          <li className={styles.menuItem}>
            <DocumentIcon /> Plantillas de impresión
          </li>
          <li className={styles.menuItem}>
            <PrinterIcon /> Imprimir entrada de prueba
          </li>
          <li className={styles.menuItem}>
            <SignalIcon /> Comprobar actualizaciones
          </li>
          <li className={styles.menuSection}>Usuario - dquilez</li>
          <li className={styles.menuItem}>
            <BookIcon /> Manual de Usuario
          </li>
          <li className={styles.menuItem}>
            <LOgoutIcon /> Logout
          </li>
        </ul>
        <div className={styles.sidebarFooter}>v3.28.0 - 20250213 - qa</div>
      </div>
    </>
  );
};

export default SidebarMenu;
