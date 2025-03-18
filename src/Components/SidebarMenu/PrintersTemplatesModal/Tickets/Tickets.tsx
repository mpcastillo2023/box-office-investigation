import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import { Button, DropdownSelect, Switch } from "components-gallery";
import TemplatesListData from "../../../../Utils/TemplatesListData/TemplatesListData";

const Tickets = () => {
  const TemplatesList = TemplatesListData.map((template, index) => ({
    optionValue: (index + 1).toString(),
    optionText: template.name
  }));

  const printersList = [
    {
      optionValue: "1",
      optionText: "Por defecto:POS-80C"
    }
  ];

  return (
    <>
      <div className={styles.ticketsContainer}>
        <div className={styles.ticketsTitle}>
          <FormattedMessage
            id="printersTemplatesModal.tickets.title"
            defaultMessage="Seleccione la impresora y la plantilla a utilizar al imprimir las entradas de los productos que vende esta taquilla"
          />
        </div>
        <div className={styles.ticketsContent}>
          <FormattedMessage
            id="printersTemplatesModal.tickets.default"
            defaultMessage="Plantilla por defecto"
          />
          <div className={styles.ticketsDefault}>
            <div className={styles.row}>
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Button size="medium" variant="primary">
                <FormattedMessage
                  id="printersTemplatesModal.tickets.defaultButton"
                  defaultMessage="APLICAR A TODOS"
                />
              </Button>
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.essencial"
                defaultMessage="La Pedrera Essencial"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.night.experience"
                defaultMessage="La Pedrera Night Experience"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.Premium"
                defaultMessage="La Pedrera Premium"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.sunrise"
                defaultMessage="La Pedrera Sunrise"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.open.date"
                defaultMessage="La Pedrera Open Date"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.essencial.groups"
                defaultMessage="La Pedrera Essencial"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
          <div className={styles.ticketsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.la.pedrera.trencadis"
                defaultMessage="Trencadis a La Pedrera"
              />
              <DropdownSelect
                className={styles.select}
                optionList={printersList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.tickets.template"
                defaultMessage="Plantilla"
              />
              <DropdownSelect
                className={styles.select}
                optionList={TemplatesList}
                customStyle={styles}
                value="1"
              />
            </div>
            <div>
              <Switch textBeside="PaH" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
