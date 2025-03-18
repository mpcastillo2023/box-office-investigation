/* eslint-disable react/jsx-no-literals */
import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React from "react";

const Payment = () => {
  return (
    <>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentTitle}>Validación</div>
        <div className={styles.paymentBody}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div>
                <Switch size="extraSmall" textBeside={"Glory / CashLogy"} />
              </div>
              <div>
                <Switch size="extraSmall" textBeside={"Cajón (efectivo)"} />
              </div>
              <div>
                Comando apertura Cajón
                <TextInput className={styles.input} />
              </div>
              <div>
                <Switch size="extraSmall" textBeside={"CashKeeper"} />
              </div>
              <div>
                <Switch
                  size="extraSmall"
                  textBeside={"Importe de cambio obligatorio"}
                />
              </div>
              <div>
                <Switch
                  size="extraSmall"
                  textBeside={"Habilitar pago diferido"}
                />
              </div>
              <div>
                <Switch
                  size="extraSmall"
                  textBeside={"Habilitar Calculadora de Denominaciones"}
                />
              </div>
              <div>
                Calculadora de cambio*
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
                Tipo de terminal
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
                  Número de terminal
                  <TextInput className={styles.input} />
                </div>
                <div>
                  Número de comercio
                  <TextInput className={styles.input} />
                </div>
              </div>
              <div>
                Clave de firma
                <TextInput className={styles.input} />
              </div>
              <div>
                Integración pago móvil*
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
                  size="extraSmall"
                  textBeside={"Devoluciones Webservice RedSyS"}
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
