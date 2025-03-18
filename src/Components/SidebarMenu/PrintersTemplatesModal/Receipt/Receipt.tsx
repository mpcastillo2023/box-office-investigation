import React from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import { DropdownSelect } from "components-gallery";
import TemplatesListData from "../../../../Utils/TemplatesListData/TemplatesListData";

const Tickets = () => {
  const TemplatesList = [
    { optionValue: "0", optionText: "Use Plantillas internas" },
    ...TemplatesListData.map((template, index) => ({
      optionValue: (index + 1).toString(),
      optionText: template.name
    }))
  ];
  return (
    <>
      <div className={styles.receiptContainer}>
        <div className={styles.receiptTitle}>
          <FormattedMessage
            id="printersTemplatesModal.receipt.title"
            defaultMessage="Sellecione la plantilla a ultilizar segun el tipo de recibo"
          />
        </div>
        <div className={styles.receiptContent}>
          <div className={styles.row}>
            <FormattedMessage
              id="printersTemplatesModal.receipt.purchase"
              defaultMessage="Plantilla del Recibo de compra"
            />
            <DropdownSelect
              className={styles.select}
              optionList={TemplatesList}
              customStyle={styles}
              value="0"
            />
          </div>
          <div className={styles.row}>
            <FormattedMessage
              id="printersTemplatesModal.receipt.return"
              defaultMessage="Plantilla de devolucion"
            />
            <DropdownSelect
              className={styles.select}
              optionList={TemplatesList}
              customStyle={styles}
              value="0"
            />
          </div>
          <div className={styles.row}>
            <FormattedMessage
              id="printersTemplatesModal.receipt.TPV"
              defaultMessage="Plantilla de recibo de TPV"
            />
            <DropdownSelect
              className={styles.select}
              optionList={TemplatesList}
              customStyle={styles}
              value="0"
            />
          </div>
          <div className={styles.row}>
            <FormattedMessage
              id="printersTemplatesModal.receipt.cash.closure"
              defaultMessage="Plantilla de cierre de caja"
            />
            <DropdownSelect
              className={styles.select}
              optionList={TemplatesList}
              customStyle={styles}
              value="0"
            />
          </div>
          <div className={styles.row}>
            <FormattedMessage
              id="printersTemplatesModal.receipt.out"
              defaultMessage="Plantilla de retirada"
            />
            <DropdownSelect
              className={styles.select}
              optionList={TemplatesList}
              customStyle={styles}
              value="0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
