/* eslint-disable react/jsx-no-literals */
import { Outlet } from "react-router-dom";
import styles from "./Styles/styles.module.scss";

const ProductHeader = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div>La Pedrera TPV1-PROVENÇA-Taquilla individual</div>
      </header>

      <Outlet />
    </>
  );
};

export default ProductHeader;
