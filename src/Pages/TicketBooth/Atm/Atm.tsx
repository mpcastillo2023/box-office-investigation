import NumericPad from "./NumericPad/NumericPad";
import Catalog from "./Catalog/Catalog";
import styles from "./Styles/styles.module.scss";
import Tickets from "./Tickets/Tickets";

export default function Atm() {
  return (
    <>
      <div className={styles.atmContainer}>
        <Catalog />
        <Tickets />
        <NumericPad />
      </div>
    </>
  );
}
