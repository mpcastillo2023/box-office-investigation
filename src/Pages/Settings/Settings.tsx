import { Button } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import SimpleArrowLeftIcon from "@icons/simple-arrow-left.svg";
import { Link } from "react-router-dom";
import BasicSettings from "./BasicSettings/BasicSettings";
import Validation from "./Validation/Validation";
import Visualization from "./Visualization/Visualization";
import SaveIcon from "@icons/save.svg";
import Management from "./Management/Management";
import Printing from "./Printing/Printing";
import Payment from "./Payment/Payment";

const Settings = () => {
  return (
    <>
      <div>
        <div className={styles.settingsTitle}>
          <div>
            <Link to="/">
              <SimpleArrowLeftIcon />
            </Link>
          </div>
          <div>Configurador de taquilla</div>
          <div className={styles.saveButtonContainer}>
            <Button
              size="full"
              variant="primary"
              type="submit"
              className={styles.saveButton}
            >
              <SaveIcon />
              Guardar
            </Button>
          </div>
        </div>
        <div className={styles.settingsContainer}>
          <div
            style={{
              width: "33%",
              display: "flex",
              gap: "7px",
              flexDirection: "column",
            }}
          >
            <BasicSettings />
            <Validation />
          </div>
          <div style={{ width: "33%" }}>
            <Visualization />
          </div>
          <div style={{ width: "33%" }}>
            <Management />
          </div>
          <div style={{ width: "49.7%" }}>
            <Printing />
          </div>
          <div style={{ width: "49.7%" }}>
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
