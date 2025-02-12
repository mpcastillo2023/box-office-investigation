import { useState } from "react";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div id="sidebarMenu">
        <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <Outlet />
      <Footer toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Layout;
