import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { BasicTable } from "components-gallery";

const Refunds = () => {
  return (
    <>
      <div className={styles.refundsContainer}>
        <div className={styles.refundsTitle}>
          <FormattedMessage
            id="refunds.title"
            defaultMessage="Lista de devoluciones"
          />
        </div>
        <div className={styles.refundsTable}>
          <BasicTable
            customStyle={styles}
            displayData={[]}
            columns={[
              {
                name: "Id.",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.id"
                    defaultMessage="Id."
                  />
                )
              },
              {
                name: "refundDate",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.refundDate"
                    defaultMessage="Fecha de devolucion"
                  />
                )
              },
              {
                name: "refundType",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.refundType"
                    defaultMessage="Devuelto"
                  />
                )
              },
              {
                name: "pending",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.pending"
                    defaultMessage="Pendiente"
                  />
                )
              },
              {
                name: "bill",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.bill"
                    defaultMessage="Factura"
                  />
                )
              },
              {
                name: "reason",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.reason"
                    defaultMessage="Motivo / Comentario"
                  />
                )
              },
              {
                name: "actions",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.actions"
                    defaultMessage="Acciones"
                  />
                )
              }
            ]}
          />
        </div>
        <div className={styles.noRefunds}>
          <FormattedMessage
            id="refunds.noRefunds"
            defaultMessage="No hay devoluciones"
          />
        </div>
      </div>
    </>
  );
};

export default Refunds;
