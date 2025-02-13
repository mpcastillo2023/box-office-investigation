import { useState } from "react";
import SidebarMenu from "../Components/SidebarMenu/SidebarMenu";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

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
      <Outlet />
      <Footer toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Layout;
