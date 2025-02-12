import { Link } from "react-router";
import styles from "./Styles/styles.module.scss";
import ArrowLeftIcon from "@icons/arrow-left.svg";

const History = () => {
  return (
    <>
      <div className={styles.historyContainer}>
        <div className={styles.historyHeader}>
          <Link to="/ticketbooth">
            <ArrowLeftIcon />
          </Link>
          Reservas
        </div>
      </div>
    </>
  );
};

export default History;
