import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
const Printing = () => {
  return (
    <>
      <div className={styles.printingContainer}>
        <div className={styles.printingTitle}>Impresion</div>
        <div className={styles.printingBody}>
          <div className={styles.row}>
            <div className={styles.columnSwitch}>
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Imprimir entradas"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Permitir escoger imprimir o no la entrada"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Imprimir copia del recibo para el comercio"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="mprimir copia del recibo para el cliente"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Imprimir recibo (Factura Simplificada)"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Permitir imprimir múltiples reservas"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Cerrar detalle tras imprimir entradas"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Cerrar detalle tras imprimir recibo"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Resaltar reservas imprimidas"
              />
              <Switch
                customStyles={styles}
                size="extraSmall"
                textBeside="Imprimir entradas como documento único"
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
            Calidad de impresion (dpi)
            <DropdownSelect
              optionList={[
                { optionText: "DPI por defecto", optionValue: "dpi" },
              ]}
              customStyle={styles}
              className={styles.select}
            />
          </div>
          <div className={styles.row50}>
            Tipo de entradas <TextInput className={styles.input} />
          </div>
          <div className={styles.row50}>
            Tipo de Precio <TextInput className={styles.input} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Printing;
