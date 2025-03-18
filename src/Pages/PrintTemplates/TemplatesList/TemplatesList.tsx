import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import Templates from "./Tamplates/Templates";

const TemplatesList = () => {
  return (
    <>
      <div className={styles.templatesListContainer}>
        <div className={styles.templatesListHeader}>
          <div>
            <FormattedMessage
              id="templatesList.title"
              defaultMessage="Lista de plantillas"
            />
          </div>
        </div>
        <div className={styles.templatesListSubtitle}>
          <FormattedMessage
            id="templatesList.subtitle"
            defaultMessage="Directorio de las
          plantillas:/home/rcardenas/templatesBoxOffice/ticket/"
          />
        </div>
        <div className={styles.templatesListContent}>
          <Templates />
        </div>
      </div>
    </>
  );
};

export default TemplatesList;
