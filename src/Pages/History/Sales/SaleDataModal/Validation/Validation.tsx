import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { BasicTable } from "components-gallery";
import UserIcon from "@icons/user.svg";
import CheckCircleIcon from "@icons/check-circle.svg";

const Validation = () => {
  return (
    <>
      <div className={styles.validationContainer}>
        <div className={styles.validationTitle}>
          <FormattedMessage
            id="validation.title"
            defaultMessage="Historico de validaciones de las entradas"
          />
        </div>
        <div className={styles.validationTable}>
          <BasicTable
            customStyle={styles}
            displayData={[]}
            columns={[
              {
                name: "Id.ticket",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.validation.id"
                    defaultMessage="Id.ticket"
                  />
                )
              },
              {
                name: "scanDate",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.validation.scanDate"
                    defaultMessage="Fecha de escaneo"
                  />
                )
              },
              {
                name: "name",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.validation.name"
                    defaultMessage="Nombre"
                  />
                )
              },
              {
                name: "type",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.validation.type"
                    defaultMessage="Tipo"
                  />
                )
              },
              {
                name: "user",
                label: <UserIcon />
              },
              {
                name: "reason",
                label: <CheckCircleIcon />
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
        <div className={styles.noValidation}>
          <FormattedMessage
            id="validation.noValidation"
            defaultMessage="No hay validaciones"
          />
        </div>
      </div>
    </>
  );
};

export default Validation;
