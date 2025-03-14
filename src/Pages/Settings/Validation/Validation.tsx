import { DropdownSelect, Switch, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";

const Validation = () => {
  return (
    <>
      <div className={styles.validationContainer}>
        <div className={styles.validationTitle}>
          <FormattedMessage id="validation.title" defaultMessage="Validación" />
        </div>
        <div className={styles.validationBody}>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="validation.sendToTurnstiles"
                  defaultMessage="Enviar a tornos"
                />
              }
            />
          </div>
          <div>
            <FormattedMessage
              id="validation.validationMethod"
              defaultMessage="Método de validación"
            />
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
            <FormattedMessage
              id="validation.verifierPOS"
              defaultMessage="Verifier POS"
            />
            <TextInput className={styles.input} placeholder="Ej: 235" />
          </div>
          <div>
            <FormattedMessage
              id="validation.verifierID"
              defaultMessage="Verifier ID"
            />
            <TextInput className={styles.input} placeholder="Ej: 87" />
          </div>
          <div>
            <Switch
              customStyles={styles}
              size="extraSmall"
              textBeside={
                <FormattedMessage
                  id="validation.validatePrints"
                  defaultMessage="Validar Impresiones"
                />
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Validation;
