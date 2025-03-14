import { DropdownSelect, TextInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";

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
        <div className={styles.basicSettingsTitle}>
          <FormattedMessage
            id="basicSettings.title"
            defaultMessage="Configuración Básica"
          />
        </div>
        <div className={styles.basicSettingsBody}>
          <div>
            <FormattedMessage
              id="basicSettings.client"
              defaultMessage="Cliente"
            />
            <TextInput className={styles.input} />
          </div>
          <div>
            <FormattedMessage
              id="basicSettings.ticketOffice"
              defaultMessage="Taquilla"
            />
            <DropdownSelect
              optionList={optionList}
              customStyle={styles}
              className={styles.select}
              value="TPV1-PROVENCA"
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <FormattedMessage
              id="basicSettings.mainSalesChannel"
              defaultMessage="Canal de venta Principal: Taquilla individual"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSettings;
