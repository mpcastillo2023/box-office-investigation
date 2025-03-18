import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import { Template } from "../../../Utils/TemplatesListData/TemplatesListData";
import { Button, DropdownSelect, TextInput } from "components-gallery";
import SaveIcon from "@icons/save.svg";
import PrintIcon from "@icons/printer.svg";
import TrashIcon from "@icons/trash.svg";

type Props = {
  activeTemplate: Template | null;
};

const TemplatesEdit = ({ activeTemplate }: Props) => {
  return (
    <>
      <div className={styles.templatesEditContainer}>
        <div className={styles.templatesEditHeader}>
          <FormattedMessage
            id="printTemplates.templatesEdit"
            defaultMessage="Editar opciones de plantilla"
          />
        </div>
        {activeTemplate ? (
          <div className={styles.templateEditBody}>
            <h3 className={styles.fileName}>{activeTemplate.name}</h3>
            <p className={styles.rowTitle}>
              <FormattedMessage
                id="printTemplates.pageFormat"
                defaultMessage="Formato de página"
              />
            </p>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.width"
                    defaultMessage="Ancho"
                  />
                </span>
                <TextInput className={styles.input} value={"85mm"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.height"
                    defaultMessage="Alto"
                  />
                </span>
                <TextInput className={styles.input} value={"852mm"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.orientation"
                    defaultMessage="Orientación"
                  />
                </span>
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "Automática",
                      optionValue: "Automatica"
                    }
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="Automatica"
                />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
            </div>
            <p className={styles.rowTitle}>
              <FormattedMessage
                id="printTemplates.margins"
                defaultMessage="Márgenes"
              />
            </p>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.top"
                    defaultMessage="Superior"
                  />
                </span>
                <TextInput className={styles.input} value={"0"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.bottom"
                    defaultMessage="Inferior"
                  />
                </span>
                <TextInput className={styles.input} value={"0"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.left"
                    defaultMessage="Izquierda"
                  />
                </span>
                <TextInput className={styles.input} value={"0"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.right"
                    defaultMessage="Derecha"
                  />
                </span>
                <TextInput className={styles.input} value={"0"} />
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.units"
                    defaultMessage="mm/cm/in/px"
                  />
                </span>
              </div>
            </div>
            <p className={styles.rowTitle}>
              <FormattedMessage
                id="printTemplates.barcode"
                defaultMessage="Código BCID"
              />
            </p>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.width"
                    defaultMessage="Ancho"
                  />
                </span>
                <TextInput className={styles.input} value={"14"} />
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.height"
                    defaultMessage="Alto"
                  />
                </span>
                <TextInput className={styles.input} value={"14"} />
              </div>
              <div className={styles.column}>
                <span className={styles.labels}>
                  <FormattedMessage
                    id="printTemplates.barcodeType"
                    defaultMessage="Tipo de código"
                  />
                </span>
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "DataMatrix",
                      optionValue: "DataMatrix"
                    }
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="DataMatrix"
                />
              </div>
            </div>
            <p className={styles.rowTitle}>
              <FormattedMessage
                id="printTemplates.includedConfig"
                defaultMessage="Configuración incluida en la plantilla"
              />
            </p>
            <div className={styles.configWrapper}>
              <div className={styles.configDisplayRow}>
                <span className={styles.measurement}>pageWidth</span>
                <span className={styles.measurementValue}>84mm</span>
              </div>
              <div className={styles.configDisplayRow}>
                <span className={styles.measurement}>pageHeight</span>
                <span className={styles.measurementValue}>54mm</span>
              </div>
            </div>
            <div className={styles.configWrapper}>
              <Button
                variant="primary"
                type="submit"
                className={styles.saveButton}
              >
                <SaveIcon />
                <FormattedMessage id="buttons.save" defaultMessage="Guardar" />
              </Button>
              <Button
                variant="empty"
                type="submit"
                className={styles.printButton}
              >
                <PrintIcon />
                <FormattedMessage
                  id="buttons.print"
                  defaultMessage="Imprimir"
                />
              </Button>
              <Button
                variant="empty"
                type="submit"
                className={styles.deleteButton}
              >
                <TrashIcon />
                <FormattedMessage
                  id="buttons.delete"
                  defaultMessage="Eliminar"
                />
              </Button>
            </div>
          </div>
        ) : (
          <div className={styles.templatesListSubtitle}>
            <FormattedMessage
              id="templatesList.subtitle"
              defaultMessage="Seleccionar una plantilla de la lista para editarla"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TemplatesEdit;
