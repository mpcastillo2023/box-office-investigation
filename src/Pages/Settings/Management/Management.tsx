import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const Management = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className={styles.managementContainer}>
        <div className={styles.managementTitle}>
          <FormattedMessage
            id="management.title"
            defaultMessage="Administración"
          />
        </div>
        <div className={styles.managementBody}>
          <div>
            <FormattedMessage id="management.apiKey" defaultMessage="API Key" />
            <TextInput className={styles.input} />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.allowOfflineMode"
                  defaultMessage="Permitir modo Offline"
                />
              }
            />
          </div>
          <div>
            <FormattedMessage
              id="management.rangeRequestIds"
              defaultMessage="Rango: Número de IDs a solicitar"
            />
            <TextInput className={styles.input} />
          </div>
          <div>
            <FormattedMessage
              id="management.rangeSafetyMargin"
              defaultMessage="Rango: Margen de seguridad (#IDs)"
            />
            <TextInput className={styles.input} />
          </div>
          <div>
            <TextInput className={styles.input} placeholder="Check Health" />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.simplifiedInvoice"
                  defaultMessage="Factura simplificada (obsoleto)"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enableBilling"
                  defaultMessage="Habilitar facturación (nuevo 2017)"
                />
              }
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder={formatMessage({ id: "management.minAmountInvoice" })}
            />
          </div>
          <div>
            <FormattedMessage
              id="management.invoiceModalType"
              defaultMessage="Tipo de modal para facturar*"
            />
            <DropdownSelect
              optionList={[
                {
                  optionText: "No aplica",
                  optionValue: "noAplica"
                }
              ]}
              customStyle={styles}
              className={styles.select}
              value="noAplica"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.printClosingReport"
                  defaultMessage="Imprimir informe de cierre"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enablePromoCodes"
                  defaultMessage="Habilitar códigos promocionales"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enableDistributorSelection"
                  defaultMessage="Habilitar selección de distribuidor"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enableSchoolAgencySelection"
                  defaultMessage="Habilitar selección de escuelas/agencias"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enablePasswordChange"
                  defaultMessage="Habilitar cambio de contraseña"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.enablePrinterTemplateSelection"
                  defaultMessage="Habilitar selección impresoras y plantillas"
                />
              }
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="management.printUserHistory"
                  defaultMessage="Imprimir histórico de usuarios"
                />
              }
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder={formatMessage({
                id: "management.sessionExpirationTime"
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
