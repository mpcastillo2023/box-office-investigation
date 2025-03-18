/* eslint-disable react/jsx-no-literals */
import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React from "react";

const Validation = () => {
  return (
    <>
      <div className={styles.validationContainer}>
        <div className={styles.validationTitle}>Validación</div>
        <div className={styles.validationBody}>
          <div>
            <Switch size="extraSmall" textBeside={"Enviar a tornos"} />
          </div>
          <div>
            Método de validación
            <DropdownSelect
              optionList={[
                {
                  optionText: "No validar entradas",
                  optionValue: "noValidar"
                }
              ]}
              customStyle={styles}
              className={styles.select}
              value="noValidar"
            />
          </div>
          <div>
            Verifier POS
            <TextInput className={styles.input} placeholder="Ej: 235" />
          </div>
          <div>
            Verifier ID
            <TextInput className={styles.input} placeholder="Ej: 87" />
          </div>
          <div>
            <Switch size="extraSmall" textBeside={"Validar Impresiones"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Validation;
