/* eslint-disable react/jsx-no-literals */
import { DropdownSelect, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React from "react";

const BasicSettings = () => {
  const optionList = [
    {
      optionText: "TPV1-PROVENCA",
      optionValue: "TPV1-PROVENCA"
    }
  ];
  return (
    <>
      <div className={styles.basicSettingsContainer}>
        <div className={styles.basicSettingsTitle}>Configuración Básica</div>
        <div className={styles.basicSettingsBody}>
          <div>
            Cliente
            <TextInput className={styles.input} />
          </div>
          <div>
            Taquilla
            <DropdownSelect
              optionList={optionList}
              customStyle={styles}
              className={styles.select}
              value="TPV1-PROVENCA"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            Canal de venta Principal: Taquilla individual
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSettings;
