import { UseIsDesktop } from "components-gallery";
import { FormattedMessage, useIntl } from "react-intl";
import SalesTable from "./SalesTable/SalesTable";
import styles from "./Styles/styles.module.scss";
import QueueIcon from "@icons/queue-list.svg";
import SaleList from "./SalesList/SaleList";
import React from "react";

const Sales = () => {
  const { isDesktop } = UseIsDesktop();
  const { formatMessage } = useIntl();
  return (
    <>
      <div className={styles.salesContainer}>
        <div className={styles.updateSalesList}>
          <div>
            <FormattedMessage
              id="sales.last50Sales"
              defaultMessage="Últimas 50 ventas de esta taquilla"
            />
          </div>
          <div className={styles.updateButton}>
            <FormattedMessage id="sales.update" defaultMessage="ACTUALIZAR" />
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.salesFilters}>
            <div>
              <QueueIcon />
            </div>
            <div className={styles.inputText}>
              <input
                type="text"
                placeholder={formatMessage({ id: "sales.filterList" })}
              />
            </div>
            <div className={styles.filtersButton}>
              <FormattedMessage
                id="sales.paySelection"
                defaultMessage="PAGAR SELECCIÓN"
              />
            </div>
            <div className={styles.filtersButton}>
              <FormattedMessage
                id="sales.printSelection"
                defaultMessage="IMPRIMIR SELECCIÓN"
              />
            </div>
          </div>
          {isDesktop ? <SalesTable /> : <SaleList />}
        </div>
      </div>
    </>
  );
};

export default Sales;
