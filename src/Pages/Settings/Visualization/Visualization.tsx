import { Button, DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";

const Visualization = () => {
  return (
    <>
      <div className={styles.visualizationContainer}>
        <div className={styles.visualizationTitle}>Visualizacion</div>
        <div className={styles.visualizationBody}>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Mostrar solo eventos disponibles"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Seleccionar producto principal al iniciar"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Mostrar hora de finalizacion del evento"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Ofrecer siguiente sesion disponible"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Mostrar disponibilidad maxima (ej:15/100)"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Agruypar productos por categoria"
            />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside="Marcar salto de evento en busqueda de reservas"
            />
          </div>
          <div>
            <Button className={styles.button} size="medium" variant="primary">
              MENSAJES DEL DISPLAY
            </Button>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Formulario de compra*
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "Nunca",
                    optionValue: "nunca",
                  },
                ]}
                value={"nunca"}
              />
            </div>
            <div className={styles.column}>
              Cada X compras*
              <TextInput className={styles.input} placeholder="0" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Productos/pag*
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Sessiones/pag*
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Promociones/pag*
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Zoom de aplicacion
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Idioma de datos por defecto*
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "CA-Català",
                    optionValue: "catalan",
                  },
                  {
                    optionText: "ES-Español",
                    optionValue: "spanish",
                  },
                ]}
                value={"catalan"}
              />
            </div>
            <div>
              Idioma aplicacion actual
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "CA-Català",
                    optionValue: "catalan",
                  },
                  {
                    optionText: "ES-Español",
                    optionValue: "spanish",
                  },
                ]}
                value={"spanish"}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              Idiomas de tickets
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              Idiomas de apliacion
              <TextInput
                className={styles.input}
                placeholder="Idioma por defecto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualization;
