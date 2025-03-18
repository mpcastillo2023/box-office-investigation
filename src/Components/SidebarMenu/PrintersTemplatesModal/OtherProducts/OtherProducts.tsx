import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import { Button, DropdownSelect, Switch } from "components-gallery";
import TemplatesListData from "../../../../Utils/TemplatesListData/TemplatesListData";

const OtherProducts = () => {
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
      <div className={styles.otherProductsContainer}>
        <div className={styles.otherProductsTitle}>
          <FormattedMessage
            id="printersTemplatesModal.otherProducts.title"
            defaultMessage="Seleccione la impresora y la plantilla al imprimir las entradas de otros productos de NO vende esta taquilla"
          />
        </div>
        <div className={styles.otherProductsContent}>
          <FormattedMessage
            id="printersTemplatesModal.otherProducts.default"
            defaultMessage="config.default.template"
          />
          <div className={styles.otherProductsDefault}>
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
                  id="printersTemplatesModal.otherProducts.defaultButton"
                  defaultMessage="APLICAR A TODOS"
                />
              </Button>
            </div>
          </div>
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.art.pedra"
                defaultMessage="Catàleg Art en pedra"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.sean.scully"
                defaultMessage="Catàleg exposició <<Sean Scully>>"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.badalona.centre"
                defaultMessage="Espai Social Badalona Centre"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.badalona.llefià"
                defaultMessage="Espai Social Badalona Llefià"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.badalona.verneda"
                defaultMessage="Espai Social Badalona - La Verneda"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.badalona.gràcia"
                defaultMessage="Espai Social Badalona - Gràcia"
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
                id="printersTemplatesModal.otherProducts.template"
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
          <div className={styles.otherProductsCustom}>
            <div className={styles.row}>
              <FormattedMessage
                id="printersTemplatesModal.otherProducts.badalona.prosperitat"
                defaultMessage="Espai Social Badalona - Prosperitat"
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
                id="printersTemplatesModal.otherProducts.template"
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

export default OtherProducts;
