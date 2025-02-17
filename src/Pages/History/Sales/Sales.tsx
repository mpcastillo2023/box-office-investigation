import { UseIsDesktop } from "components-gallery";
import SalesTable from "./SalesTable/SalesTable";
import styles from "./Styles/styles.module.scss";
import QueueIcon from "@icons/queue-list.svg";
import SaleList from "./SalesList/SaleList";

const Sales = () => {
  const { isDesktop } = UseIsDesktop();
  return (
    <>
      <div className={styles.salesContainer}>
        <div className={styles.updateSalesList}>
          <div>Ultimas 50 ventas de esta taquilla</div>
          <div className={styles.updateButton}>ACTUALIZAR</div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.salesFilters}>
            <div>
              <QueueIcon />
            </div>
            <div className={styles.inputText}>
              <input type="text" placeholder="Filtre List" />
            </div>
            <div className={styles.filtersButton}>PAGAR SELECCION</div>
            <div className={styles.filtersButton}>IMPRIMIR SELECCION</div>
          </div>
          {isDesktop ? <SalesTable /> : <SaleList />}
        </div>
      </div>
    </>
  );
};

export default Sales;
