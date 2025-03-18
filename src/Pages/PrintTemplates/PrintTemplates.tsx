import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import SimpleArrowLeftIcon from "@icons/simple-arrow-left.svg";
import styles from "./Styles/styles.module.scss";
import TemplatesList from "./TemplatesList/TemplatesList";
import TemplatesEdit from "./TemplatesEdit/TemplatesEdit";
import { Template } from "../../Utils/TemplatesListData/TemplatesListData";

const PrintTemplates = () => {
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);
  return (
    <>
      <div className={styles.printTemplatesContainer}>
        <div className={styles.printTemplatesHeader}>
          <Link to="/ticket-booth">
            <SimpleArrowLeftIcon />
          </Link>
          <FormattedMessage
            id="printTemplates.settings"
            defaultMessage="Gestion de plantillas de impresion"
          />
        </div>
        <div className={styles.printTemplatesContent}>
          <TemplatesList
            activeTemplate={activeTemplate}
            setActiveTemplate={setActiveTemplate}
          />
          <TemplatesEdit activeTemplate={activeTemplate} />
        </div>
      </div>
    </>
  );
};

export default PrintTemplates;
