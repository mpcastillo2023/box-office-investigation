/* eslint-disable react/jsx-no-literals */
import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React from "react";

const Management = () => {
  return (
    <>
      <div className={styles.managementContainer}>
        <div className={styles.managementTitle}>Administración</div>
        <div className={styles.managementBody}>
          <div>
            API Key
            <TextInput className={styles.input} />
          </div>
          <div>
            <Switch size="extraSmall" textBeside={"Permitir modo Offline"} />
          </div>
          <div>
            Rango: Número de IDs a solicitar
            <TextInput className={styles.input} />
          </div>
          <div>
            Rango: Margen de seguridad (#IDs)
            <TextInput className={styles.input} />
          </div>
          <div>
            <TextInput className={styles.input} placeholder="Check Health" />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Factura simplificada (obsoleto)"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar facturación (nuevo 2017)"}
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder={"Importe mínimo para pedir factura"}
            />
          </div>
          <div>
            Tipo de modal para facturar*
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
              size="extraSmall"
              textBeside={"Imprimir informe de cierre"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar códigos promocionales"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar selección de distribuidor"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar selección de escuelas/agencias"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar cambio de contraseña"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Habilitar selección impresoras y plantillas"}
            />
          </div>
          <div>
            <Switch
              size="extraSmall"
              textBeside={"Imprimir histórico de usuarios"}
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder={"Tiempo expiración (minutos)"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
