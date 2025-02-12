import { Link } from "react-router";
import styles from "./Styles/styles.module.scss";
import ArrowSimpleLeftIcon from "@icons/simple-arrow-left.svg";

const History = () => {
  return (
    <>
      <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
          <Link to="/ticketbooth">
            <ArrowSimpleLeftIcon />
          </Link>
          Reservas
        </div>
      </div>
    </>
  );
};

export default History;
