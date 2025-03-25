import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { BasicTable } from "components-gallery";

const Payments = () => {
  const initDate = "12/03/2025 (100%)";
  const finalDate = "12/03/2025 (0%)";
  return (
    <>
      <div className={styles.paymentsContainer}>
        <div className={styles.paymentsTitle}>
          <FormattedMessage
            id="payments.title"
            defaultMessage="Lista de pagos y devoluciones"
          />
        </div>
        <div className={styles.paymentsInfo}>
          <div>
            <FormattedMessage
              id="payments.paymentDate.initial"
              defaultMessage="Fecha limite pago inicial:"
            />
          </div>
          <div className={styles.initDate}>{initDate}</div>
        </div>
        <div className={styles.paymentsInfo}>
          <div>
            <FormattedMessage
              id="payments.paymentDate.final"
              defaultMessage="Fecha limite pago final:"
            />
          </div>
          <div className={styles.finalDate}>{finalDate}</div>
        </div>
        <div className={styles.paymentsTable}>
          <BasicTable
            customStyle={styles}
            displayData={[]}
            columns={[
              {
                name: "Id.",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.id"
                    defaultMessage="Nombre"
                  />
                )
              },
              {
                name: "ref",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.ref"
                    defaultMessage="Referencia"
                  />
                )
              },
              {
                name: "type",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.type"
                    defaultMessage="Tipo"
                  />
                )
              },
              {
                name: "method",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.method"
                    defaultMessage="Metodo / Canal"
                  />
                )
              },
              {
                name: "amopunt",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.amount"
                    defaultMessage="Importe"
                  />
                )
              },
              {
                name: "state",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.state"
                    defaultMessage="Estado"
                  />
                )
              },
              {
                name: "seller",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.seller"
                    defaultMessage="Distribuidor / Vaucher"
                  />
                )
              }
            ]}
          />
        </div>
        <div className={styles.paymentsTitle}>
          <FormattedMessage
            id="payments.total.title"
            defaultMessage="Desglose del total de la reserva"
          />
        </div>
        <div className={styles.paymentsTableTotal}>
          <BasicTable
            customStyle={styles}
            displayData={[
              {
                name: "Nen(menor 12 anys)",
                quantity: 1,
                amount: "0,00 €",
                total: "0,00 €"
              }
            ]}
            columns={[
              {
                name: "name",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.name"
                    defaultMessage="Nombre"
                  />
                )
              },
              {
                name: "quantity",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.quantity"
                    defaultMessage="Cantidad"
                  />
                )
              },
              {
                name: "amount",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.amount"
                    defaultMessage="Importe"
                  />
                )
              },
              {
                name: "total",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.purchaseDetails.total"
                    defaultMessage="Total"
                  />
                )
              }
            ]}
          />
          <div className={styles.paymentsTotal}>
            <FormattedMessage
              id="saleDataModal.details.purchaseDetails.total.label"
              defaultMessage="Total a pagar: 0,00 €"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
