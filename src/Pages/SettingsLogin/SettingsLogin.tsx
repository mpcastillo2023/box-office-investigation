import { Button, EmailInput, Modal, PasswordInput } from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { useState } from "react";
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
            Acceder al configurador de taquilla
          </div>
          <div className={styles.settingsLoginBody}>
            <div>
              Contraseña 1
              <PasswordInput />
            </div>
            <div>
              Contraseña 2
              <PasswordInput />
            </div>
            <div style={{ width: "87%" }}>
              <Button
                size="full"
                variant="primary"
                onClick={() => setIsModalOpen(true)}
              >
                Iniciar Sesión
              </Button>
            </div>
          </div>

          <Modal
            modalTitle="Autorizacion: ADMINISTRADOR"
            variant="success"
            isConfirmModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            cancelButtonText="Cancelar"
            confirmButtonText="Confirmar"
            onConfirmHandler={settings}
            customStyle={styles}
            children={
              <div className={styles.modalInputContent}>
                <div>
                  Usuario*
                  <EmailInput />
                </div>
                <div>
                  Contraseña*
                  <PasswordInput />
                </div>
              </div>
            }
          />
        </div>
        <div style={{ marginTop: "auto" }}>
          <LoginFooter />
        </div>
      </div>
    </>
  );
};

export default SettingsLogin;
