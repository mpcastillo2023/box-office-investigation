import { Button, DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const Visualization = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className={styles.visualizationContainer}>
        <div className={styles.visualizationTitle}>
          <FormattedMessage
            id="visualization.title"
            defaultMessage="Visualización"
          />
        </div>
        <div className={styles.visualizationBody}>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="visualization.showAvailableEvents"
                  defaultMessage="Mostrar solo eventos disponibles"
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
                  id="visualization.selectMainProduct"
                  defaultMessage="Seleccionar producto principal al iniciar"
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
                  id="visualization.showEventEndTime"
                  defaultMessage="Mostrar hora de finalización del evento"
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
                  id="visualization.offerNextSession"
                  defaultMessage="Ofrecer siguiente sesión disponible"
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
                  id="visualization.showMaxAvailability"
                  defaultMessage="Mostrar disponibilidad máxima (ej:15/100)"
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
                  id="visualization.groupProductsByCategory"
                  defaultMessage="Agrupar productos por categoría"
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
                  id="visualization.markEventJump"
                  defaultMessage="Marcar salto de evento en búsqueda de reservas"
                />
              }
            />
          </div>
          <div>
            <Button className={styles.button} size="medium" variant="primary">
              <FormattedMessage
                id="visualization.displayMessages"
                defaultMessage="MENSAJES DEL DISPLAY"
              />
            </Button>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.purchaseForm"
                defaultMessage="Formulario de compra*"
              />
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "Nunca",
                    optionValue: "nunca"
                  }
                ]}
                value={"nunca"}
              />
            </div>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.everyXPurchases"
                defaultMessage="Cada X compras*"
              />
              <TextInput className={styles.input} placeholder="0" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.productsPerPage"
                defaultMessage="Productos/pag*"
              />
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.sessionsPerPage"
                defaultMessage="Sesiones/pag*"
              />
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.promotionsPerPage"
                defaultMessage="Promociones/pag*"
              />
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.applicationZoom"
                defaultMessage="Zoom de aplicación"
              />
              <TextInput className={styles.input} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.defaultDataLanguage"
                defaultMessage="Idioma de datos por defecto*"
              />
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "CA-Català",
                    optionValue: "catalan"
                  },
                  {
                    optionText: "ES-Español",
                    optionValue: "spanish"
                  }
                ]}
                value={"catalan"}
              />
            </div>
            <div>
              <FormattedMessage
                id="visualization.currentApplicationLanguage"
                defaultMessage="Idioma aplicación actual"
              />
              <DropdownSelect
                className={styles.select}
                customStyle={styles}
                optionList={[
                  {
                    optionText: "CA-Català",
                    optionValue: "catalan"
                  },
                  {
                    optionText: "ES-Español",
                    optionValue: "spanish"
                  }
                ]}
                value={"spanish"}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.ticketLanguages"
                defaultMessage="Idiomas de tickets"
              />
              <TextInput className={styles.input} />
            </div>
            <div className={styles.column}>
              <FormattedMessage
                id="visualization.applicationLanguages"
                defaultMessage="Idiomas de aplicación"
              />
              <TextInput
                className={styles.input}
                placeholder={formatMessage({
                  id: "visualization.defaultLanguagePlaceholder"
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visualization;
