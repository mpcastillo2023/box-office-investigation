import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { BasicTable } from "@cg-components/index";

const Details = () => {
  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.purchaseDetails}>
          <div className={styles.purchaseDetailsTitle}>
            <FormattedMessage
              id="saleDataModal.details.purchaseDetails.title"
              defaultMessage="Detalles de la compra"
            />
          </div>
          <div className={styles.purchaseDetailsTable}>
            <div>
              <BasicTable
                customStyle={styles}
                displayData={[
                  {
                    id: 66153841,
                    purchaseDate: "12/03/2025",
                    amount: "0.00 €",
                    chanel: "Taquilla Individual",
                    bill: " ",
                    ref: "b7f1dd33-cc9d-47a2-bb3b"
                  }
                ]}
                columns={[
                  {
                    name: "id",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.id"
                        defaultMessage="ID"
                      />
                    )
                  },
                  {
                    name: "purchaseDate",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.purchaseDate"
                        defaultMessage="Fecha de compra"
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
                    name: "chanel",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.chanel"
                        defaultMessage="Canal"
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
                    name: "ref",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.ref"
                        defaultMessage="Referencia"
                      />
                    )
                  }
                ]}
              />
            </div>
            <div>
              <BasicTable
                customStyle={styles}
                displayData={[
                  {
                    name: "--",
                    email: "--",
                    tlf: "--",
                    language: "cs",
                    nationality: "--",
                    postalCode: "--"
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
                    name: "email",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.email"
                        defaultMessage="Email"
                      />
                    )
                  },
                  {
                    name: "tlf",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.tlf"
                        defaultMessage="Teléfono"
                      />
                    )
                  },
                  {
                    name: "language",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.language"
                        defaultMessage="Idioma"
                      />
                    )
                  },
                  {
                    name: "nationality",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails"
                        defaultMessage="Nacionalidad"
                      />
                    )
                  },
                  {
                    name: "postalCode",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.postalCode"
                        defaultMessage="Código Postal"
                      />
                    )
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.purchaseDetails}>
          <div className={styles.purchaseDetailsTitle}>
            <FormattedMessage
              id="saleDataModal.details.reservationDetails.title"
              defaultMessage="Detalles de la Reserva"
            />
          </div>
          <div className={styles.purchaseDetailsTable}>
            <div>
              <BasicTable
                customStyle={styles}
                displayData={[
                  {
                    id: 71307306,
                    product: "La Pedrera Esencial",
                    mount: 1,
                    amount: "0.00 €",
                    chanel: "Taquilla Individual",
                    state: "Confirmada",
                    confirmDate: "12/03/2025 17:57"
                  }
                ]}
                columns={[
                  {
                    name: "id.",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.id"
                        defaultMessage="ID"
                      />
                    )
                  },
                  {
                    name: "product",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.product"
                        defaultMessage="Producto"
                      />
                    )
                  },
                  {
                    name: "quantity",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.quantity"
                        defaultMessage="Entradas"
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
                    name: "chanel",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.chanel"
                        defaultMessage="Canal"
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
                    name: "confirmDate",
                    label: (
                      <FormattedMessage
                        id="saleDataModal.details.purchaseDetails.confirmDate"
                        defaultMessage="Fecha de confirmación"
                      />
                    )
                  }
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.purchaseDetails}>
          <div className={styles.purchaseDetailsTitle}>
            <FormattedMessage
              id="saleDataModal.details.visitDetails.title"
              defaultMessage="Detalles de la visita"
            />
          </div>
          <div className={styles.purchaseDetailsTable}>
            <BasicTable
              customStyle={styles}
              displayData={[
                {
                  name: "La Pedrera",
                  number: 1,
                  type: "Normal",
                  eventDate: "12/03/2025",
                  eventTime: "17:45h",
                  rangeValidity: "12/03/2025 17:45 - 12/03/2025 18:00"
                },
                {
                  name: "Audioguia gratuita",
                  number: 1,
                  type: "extra",
                  eventDate: "12/03/2025",
                  eventTime: "00:00h",
                  rangeValidity: "12/03/2025 00:00 - 12/03/2025 23:59"
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
                  name: "number",
                  label: (
                    <FormattedMessage
                      id="saleDataModal.details.purchaseDetails.number"
                      defaultMessage="Cantidad"
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
                  name: "eventDate",
                  label: (
                    <FormattedMessage
                      id="saleDataModal.details.purchaseDetails.eventDate"
                      defaultMessage="Fecha del evento"
                    />
                  )
                },
                {
                  name: "eventTime",
                  label: (
                    <FormattedMessage
                      id="saleDataModal.details.purchaseDetails.eventTime"
                      defaultMessage="Hora del evento"
                    />
                  )
                },
                {
                  name: "rangeValidity",
                  label: (
                    <FormattedMessage
                      id="saleDataModal.details.purchaseDetails.rangeValidity"
                      defaultMessage="Rango de validez"
                    />
                  )
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
