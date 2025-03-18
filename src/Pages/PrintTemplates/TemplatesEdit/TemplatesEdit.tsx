import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";

const TemplatesEdit = () => {
  return (
    <>
      <div className={styles.templatesEditContainer}>
        <div className={styles.templatesEditHeader}>
          <FormattedMessage
            id="printTemplates.templatesEdit"
            defaultMessage="Editar opciones de plantilla"
          />
        </div>
        <div className={styles.templatesListSubtitle}>
          <FormattedMessage
            id="templatesList.subtitle"
            defaultMessage="Seleccionar una plantilla de la lista para editarla"
          />
        </div>
      </div>
    </>
  );
};

export default TemplatesEdit;
