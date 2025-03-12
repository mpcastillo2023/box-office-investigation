import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
const Management = () => {
  return (
    <>
      <div className={styles.managementContainer}>
        <div className={styles.managementTitle}>Administracion</div>
        <div className={styles.managementBody}>
          <div>
            API Key <TextInput className={styles.input} />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Permitir modo Offline"
            />
          </div>
          <div>
            Rango: Numero de ids a solicitar
            <TextInput className={styles.input} />
          </div>
          <div>
            Rango: Margen de seguridad (#ids)
            <TextInput className={styles.input} />
          </div>
          <div>
            <TextInput className={styles.input} placeholder="Check Health" />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Factura simplificada (obsoleto)"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar facturacion (nuevo 2017)"
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder="Importe minimo para pedir factura"
            />
          </div>
          <div>
            Tipo de modal para facturar*
            <DropdownSelect
              optionList={[
                {
                  optionText: "No aplica",
                  optionValue: "noAplica",
                },
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
              textBeside="Imprimir informe de cierre"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar codigos promocionales"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar seleccion de distribuidor"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar seleccion de escuelas/agencias"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar cambio de contraseña"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Habilitar seleccion impresoras y plantillas"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Imprimir historico de usuarios"
            />
          </div>
          <div>
            <TextInput
              className={styles.input}
              placeholder="Tiempo expiracion (minutos)"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Management;
