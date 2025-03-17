import { useState } from "react";
import SidebarMenu from "../../SidebarMenu/SidebarMenu";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Styles/styles.module.scss";
import React from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      <div id="sidebarMenu">
        <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
      <Footer toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Layout;
