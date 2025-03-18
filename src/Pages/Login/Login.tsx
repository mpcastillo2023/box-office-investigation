import {
  Button,
  Checkbox,
  EmailInput,
  Modal,
  PasswordInput,
  RadioButtonGroup
} from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import ClorianLogo from "@images/clorian-logo-login.png";
import { useNavigate } from "react-router-dom";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";
import React from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const ticketBooth = () => {
    navigate("/ticket-Booth");
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <div className={styles.loginLogo}>
            <img src={ClorianLogo} alt="Clorian Logo" />
          </div>
          <div>
            <FormattedMessage id="login.username" defaultMessage="Usuario" />
            <EmailInput />
          </div>
          <div>
            <FormattedMessage id="login.password" defaultMessage="Contraseña" />
            <PasswordInput />
          </div>
          <div style={{ width: "87%" }}>
            <Button
              size="full"
              variant="primary"
              onClick={() => setIsModalOpen(true)}
            >
              <FormattedMessage
                id="login.loginButton"
                defaultMessage="Iniciar Sesión"
              />
            </Button>
          </div>
          <Modal
            modalTitle={
              <FormattedMessage
                id="login.completeForm"
                defaultMessage="Complete el Formulario"
              />
            }
            variant="success"
            isConfirmModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            cancelButtonText={
              <FormattedMessage id="login.cancel" defaultMessage="Cancelar" />
            }
            confirmButtonText={
              <FormattedMessage id="login.confirm" defaultMessage="Confirmar" />
            }
            onConfirmHandler={ticketBooth}
            customStyle={styles}
          >
            <div className={styles.modalContent}>
              <RadioButtonGroup
                name="test"
                options={[
                  {
                    optionText: "Visita libre Castillo de Bourdeilles",
                    optionValue: "Visita libre Castillo de Bourdeilles"
                  },
                  {
                    optionText: "Talleres individuales Bourdeilles",
                    optionValue: "Talleres individuales Bourdeilles"
                  },
                  {
                    optionText: "Escape game",
                    optionValue: "Escape game"
                  },
                  {
                    optionText: "Audioguide Bourdeilles",
                    optionValue: "Audioguide Bourdeilles"
                  },
                  {
                    optionText: "Visita guiada bourdeilles",
                    optionValue: "Visita guiada bourdeilles"
                  },
                  {
                    optionText: "Billet jumelé MAAP - BOURDEILLES",
                    optionValue: "Billet jumelé MAAP - BOURDEILLES"
                  }
                ]}
              />
            </div>
          </Modal>
        </div>
        <div className={styles.loginFooter}>
          <Checkbox
            textBeside={
              <FormattedMessage
                id="login.offlineMode"
                defaultMessage="Modo Offline"
              />
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

export default Login;
