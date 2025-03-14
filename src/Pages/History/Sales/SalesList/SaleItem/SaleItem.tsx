import { FormattedMessage } from "react-intl";
import { Sales } from "../../SalesData";
import styles from "./Styles/styles.module.scss";

type Props = {
  sale: Sales;
};

export default function SaleItem({ sale }: Props) {
  const { local, sessionDate, product, salesDate, state, quantity, value } =
    sale;
  return (
    <div className={styles.salesItem}>
      <div className={styles.salesCol}>
        <div className={styles.dateId}>
          <span className={styles.id}>{local}</span> <span>{sessionDate}</span>
        </div>
        <span className={styles.title}>{product}</span>
        <span className={styles.salesDate}>{salesDate}</span>
      </div>
      <div className={styles.salesCol}>
        <span
          className={state === "Devuelta" ? styles.returned : styles.confirm}
        >
          {state}
        </span>
        <span>
          {quantity}{" "}
          <FormattedMessage id="sale.ticketShort" defaultMessage="ent" />
        </span>
        <span>{value}</span>
      </div>
    </div>
  );
}
