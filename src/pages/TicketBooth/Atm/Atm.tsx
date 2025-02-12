import NumericPad from "./NumericPad/NumericPad";
import Products from "./Products/Products";
import styles from "./Styles/styles.module.scss";
import Tickets from "./Tickets/Tickets";

export default function Atm() {
  return (
    <>
      <div className={styles.atmContainer}>
        <Products />
        <Tickets />
        <NumericPad />
      </div>
    </>
  );
}
