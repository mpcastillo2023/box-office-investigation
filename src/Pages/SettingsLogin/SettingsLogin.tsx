import { Button, EmailInput, Modal, PasswordInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";

const SettingsLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const settings = () => {
    navigate("/settings");
  };

  return (
    <>
      <div className={styles.settingsLoginContainer}>
        <div className={styles.settingsLoginForm}>
          <div className={styles.settingsLoginTitle}>
            <FormattedMessage
              id="settingsLogin.accessConfig"
              defaultMessage="Acceder al configurador de taquilla"
            />
          </div>
          <div className={styles.settingsLoginBody}>
            <div>
              <FormattedMessage
                id="settingsLogin.password1"
                defaultMessage="Contraseña 1"
              />
              <PasswordInput />
            </div>
            <div>
              <FormattedMessage
                id="settingsLogin.password2"
                defaultMessage="Contraseña 2"
              />
              <PasswordInput />
            </div>
            <div style={{ width: "87%" }}>
              <Button
                size="full"
                variant="primary"
                onClick={() => setIsModalOpen(true)}
              >
                <FormattedMessage
                  id="settingsLogin.loginButton"
                  defaultMessage="Iniciar Sesión"
                />
              </Button>
            </div>
          </div>

          <Modal
            modalTitle={
              <FormattedMessage
                id="settingsLogin.authorizationAdmin"
                defaultMessage="Autorización: ADMINISTRADOR"
              />
            }
            variant="success"
            isConfirmModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            cancelButtonText={
              <FormattedMessage
                id="settingsLogin.cancel"
                defaultMessage="Cancelar"
              />
            }
            confirmButtonText={
              <FormattedMessage
                id="settingsLogin.confirm"
                defaultMessage="Confirmar"
              />
            }
            onConfirmHandler={settings}
            customStyle={styles}
          >
            <div className={styles.modalInputContent}>
              <div>
                <FormattedMessage
                  id="settingsLogin.username"
                  defaultMessage="Usuario*"
                />
                <EmailInput />
              </div>
              <div>
                <FormattedMessage
                  id="settingsLogin.password"
                  defaultMessage="Contraseña*"
                />
                <PasswordInput />
              </div>
            </div>
          </Modal>
        </div>
        <div style={{ marginTop: "auto" }}>
          <LoginFooter />
        </div>
      </div>
    </>
  );
};

export default SettingsLogin;
