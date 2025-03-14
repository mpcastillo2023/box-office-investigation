import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";

const Printing = () => {
  return (
    <>
      <div className={styles.printingContainer}>
        <div className={styles.printingTitle}>
          <FormattedMessage id="printing.title" defaultMessage="Impresión" />
        </div>
        <div className={styles.printingBody}>
          <div className={styles.row}>
            <div className={styles.columnSwitch}>
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.printTickets"
                    defaultMessage="Imprimir entradas"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.allowPrintChoice"
                    defaultMessage="Permitir escoger imprimir o no la entrada"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.printMerchantReceipt"
                    defaultMessage="Imprimir copia del recibo para el comercio"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.printCustomerReceipt"
                    defaultMessage="Imprimir copia del recibo para el cliente"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.printSimpleInvoice"
                    defaultMessage="Imprimir recibo (Factura Simplificada)"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.allowMultipleReservations"
                    defaultMessage="Permitir imprimir múltiples reservas"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.closeDetailAfterTicketPrint"
                    defaultMessage="Cerrar detalle tras imprimir entradas"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.closeDetailAfterReceiptPrint"
                    defaultMessage="Cerrar detalle tras imprimir recibo"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.highlightPrintedReservations"
                    defaultMessage="Resaltar reservas imprimidas"
                  />
                }
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside={
                  <FormattedMessage
                    id="printing.printTicketsAsSingleDoc"
                    defaultMessage="Imprimir entradas como documento único"
                  />
                }
              />
            </div>
            <div className={styles.column}>
              <div>
                <FormattedMessage
                  id="printing.peripheralServerPath"
                  defaultMessage="Ruta servidor periféricos"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.auditPrinter"
                  defaultMessage="Impresora arqueo"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.withdrawalPrinter"
                  defaultMessage="Impresora retirada"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.ticketPrinter"
                  defaultMessage="Impresora de entradas"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.receiptPrinter"
                  defaultMessage="Impresora de recibos"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.reportPrinter"
                  defaultMessage="Impresora de informes"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="printing.receiptHeader"
                  defaultMessage="Cabecera de recibos"
                />
                <TextInput className={styles.input} />
              </div>
            </div>
          </div>
          <div className={styles.row50}>
            <FormattedMessage
              id="printing.printQuality"
              defaultMessage="Calidad de impresión (dpi)"
            />
            <DropdownSelect
              optionList={[
                { optionText: "DPI por defecto", optionValue: "dpi" }
              ]}
              customStyle={styles}
              className={styles.select}
            />
          </div>
          <div className={styles.row50}>
            <FormattedMessage
              id="printing.ticketType"
              defaultMessage="Tipo de entradas"
            />
            <TextInput className={styles.input} />
          </div>
          <div className={styles.row50}>
            <FormattedMessage
              id="printing.priceType"
              defaultMessage="Tipo de Precio"
            />
            <TextInput className={styles.input} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Printing;
