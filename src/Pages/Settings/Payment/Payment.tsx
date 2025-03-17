import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import React from "react";

const Payment = () => {
  return (
    <>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentTitle}>
          <FormattedMessage id="payment.title" defaultMessage="Validación" />
        </div>
        <div className={styles.paymentBody}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside={
                    <FormattedMessage
                      id="payment.gloryCashLogy"
                      defaultMessage="Glory / CashLogy"
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
                      id="payment.cashDrawer"
                      defaultMessage="Cajón (efectivo)"
                    />
                  }
                />
              </div>
              <div>
                <FormattedMessage
                  id="payment.cashDrawerCommand"
                  defaultMessage="Comando apertura Cajón"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <Switch
                  customStyles={styles}
                  size="extraSmall"
                  textBeside={
                    <FormattedMessage
                      id="payment.cashKeeper"
                      defaultMessage="CashKeeper"
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
                      id="payment.mandatoryChangeAmount"
                      defaultMessage="Importe de cambio obligatorio"
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
                      id="payment.enableDeferredPayment"
                      defaultMessage="Habilitar pago diferido"
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
                      id="payment.enableDenominationCalculator"
                      defaultMessage="Habilitar Calculadora de Denominaciones"
                    />
                  }
                />
              </div>
              <div>
                <FormattedMessage
                  id="payment.changeCalculator"
                  defaultMessage="Calculadora de cambio*"
                />
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "Mostrar siempre (tablet/escritorio)",
                      optionValue: "mostrar"
                    }
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="mostrar"
                />
              </div>
            </div>
            <div className={styles.column}>
              <div>
                <FormattedMessage
                  id="payment.terminalType"
                  defaultMessage="Tipo de terminal"
                />
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "Redsys",
                      optionValue: "redsys"
                    }
                  ]}
                  customStyle={styles}
                  className={styles.select}
                  value="redsys"
                />
              </div>
              <div style={{ display: "flex", gap: "7px" }}>
                <div>
                  <FormattedMessage
                    id="payment.terminalNumber"
                    defaultMessage="Número de terminal"
                  />
                  <TextInput className={styles.input} />
                </div>
                <div>
                  <FormattedMessage
                    id="payment.merchantNumber"
                    defaultMessage="Número de comercio"
                  />
                  <TextInput className={styles.input} />
                </div>
              </div>
              <div>
                <FormattedMessage
                  id="payment.signatureKey"
                  defaultMessage="Clave de firma"
                />
                <TextInput className={styles.input} />
              </div>
              <div>
                <FormattedMessage
                  id="payment.mobilePaymentIntegration"
                  defaultMessage="Integración pago móvil*"
                />
                <DropdownSelect
                  optionList={[
                    {
                      optionText: "NO APLICA",
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
                      id="payment.webserviceRefunds"
                      defaultMessage="Devoluciones Webservice RedSyS"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
