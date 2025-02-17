import styles from "../Styles/styles.module.scss";
import Calendar from "@icons/calendar.svg";

export default function CatalogsCalendar() {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarIcon}>
        <Calendar />
        08/02/2025
      </div>
      <div className={styles.daysContainer}>
        <div className={styles.day}>HOY</div>
        <div>MAÑANA</div>
      </div>
    </div>
  );
}
