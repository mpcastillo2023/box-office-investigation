import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { BasicTable, Button } from "components-gallery";
import PencilIcon from "@icons/pencil.svg";

const Issues = () => {
  return (
    <>
      <div className={styles.issuesContainer}>
        <div className={styles.issuesTitle}>
          <FormattedMessage
            id="issues.title"
            defaultMessage="Listado de incidencias"
          />
        </div>
        <div>
          <Button
            variant="primary"
            size="large"
            className={styles.issuesCreateButton}
            onClick={() => {}}
          >
            <div>
              <PencilIcon />
            </div>
            <div>
              <FormattedMessage
                id="issues.createIssue"
                defaultMessage="Crear incidencia"
              />
            </div>
          </Button>
        </div>
        <div className={styles.issuesTable}>
          <BasicTable
            customStyle={styles}
            displayData={[]}
            columns={[
              {
                name: "locator",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.locator"
                    defaultMessage="Localizador"
                  />
                )
              },
              {
                name: "priority",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.priority"
                    defaultMessage="Prioridad"
                  />
                )
              },
              {
                name: "title",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.title"
                    defaultMessage="Titulo"
                  />
                )
              },
              {
                name: "creationDate",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.creationDate"
                    defaultMessage="Fecha de Creacion"
                  />
                )
              },
              {
                name: "status",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.status"
                    defaultMessage="Estado"
                  />
                )
              },
              {
                name: "partDay",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.partDay"
                    defaultMessage="Parte del dia"
                  />
                )
              },
              {
                name: "pax",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.pax"
                    defaultMessage="PAX"
                  />
                )
              },
              {
                name: "actions",
                label: (
                  <FormattedMessage
                    id="saleDataModal.details.issues.actions"
                    defaultMessage="Acciones"
                  />
                )
              }
            ]}
          />
        </div>
        <div className={styles.noIssues}>
          <FormattedMessage
            id="issues.noIssues"
            defaultMessage="No hay incidencias"
          />
        </div>
      </div>
    </>
  );
};

export default Issues;
