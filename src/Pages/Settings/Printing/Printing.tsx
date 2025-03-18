/* eslint-disable react/jsx-no-literals */
import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import React from "react";

const Printing = () => {
  return (
    <>
      <div className={styles.printingContainer}>
        <div className={styles.printingTitle}>Impresión</div>
        <div className={styles.printingBody}>
          <div className={styles.row}>
            <div className={styles.columnSwitch}>
              <Switch size="extraSmall" textBeside={"Imprimir entradas"} />
              <Switch
                size="extraSmall"
                textBeside={"Permitir escoger imprimir o no la entrada"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Imprimir copia del recibo para el comercio"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Imprimir copia del recibo para el cliente"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Imprimir recibo (Factura Simplificada)"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Permitir imprimir múltiples reservas"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Cerrar detalle tras imprimir entradas"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Cerrar detalle tras imprimir recibo"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Resaltar reservas imprimidas"}
              />
              <Switch
                size="extraSmall"
                textBeside={"Imprimir entradas como documento único"}
              />
            </div>
            <div className={styles.column}>
              <div>
                Ruta servidor periféricos
                <TextInput className={styles.input} />
              </div>
              <div>
                Impresora arqueo
                <TextInput className={styles.input} />
              </div>
              <div>
                Impresora retirada
                <TextInput className={styles.input} />
              </div>
              <div>
                Impresora de entradas
                <TextInput className={styles.input} />
              </div>
              <div>
                Impresora de recibos
                <TextInput className={styles.input} />
              </div>
              <div>
                Impresora de informes
                <TextInput className={styles.input} />
              </div>
              <div>
                Cabecera de recibos
                <TextInput className={styles.input} />
              </div>
            </div>
          </div>
          <div className={styles.row50}>
            Calidad de impresión (dpi)
            <DropdownSelect
              optionList={[
                { optionText: "DPI por defecto", optionValue: "dpi" }
              ]}
              customStyle={styles}
              className={styles.select}
            />
          </div>
          <div className={styles.row50}>
            Tipo de entradas
            <TextInput className={styles.input} />
          </div>
          <div className={styles.row50}>
            Tipo de Precio
            <TextInput className={styles.input} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Printing;
