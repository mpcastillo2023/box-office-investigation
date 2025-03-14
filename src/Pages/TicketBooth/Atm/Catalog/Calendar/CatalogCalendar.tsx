import styles from "../Styles/styles.module.scss";
import Calendar from "@icons/calendar.svg";
import { FormattedMessage } from "react-intl";

export default function CatalogsCalendar() {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarIcon}>
        {/*eslint-disable-next-line react/jsx-no-literals*/}
        <Calendar />
        08/02/2025
      </div>
      <div className={styles.daysContainer}>
        <div className={styles.day}>
          <FormattedMessage id="catalogsCalendar.today" defaultMessage="HOY" />
        </div>
        <div>
          <FormattedMessage
            id="catalogsCalendar.tomorrow"
            defaultMessage="MAÑANA"
          />
        </div>
      </div>
    </div>
  );
}
