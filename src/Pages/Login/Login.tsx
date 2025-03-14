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
import ClorianLogo from "@images/clorian-logo-login.png";
import { useNavigate } from "react-router-dom";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const ticketBooth = () => {
    navigate("/ticketBooth");
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <div className={styles.loginLogo}>
            <img src={ClorianLogo} alt="Clorian Logo" />
          </div>
          <div>
            Usuario
            <EmailInput />
          </div>
          <div>
            Contraseña
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
          <Modal
            modalTitle="Complete el Formulario"
            variant="success"
            isConfirmModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            cancelButtonText="Cancelar"
            confirmButtonText="Confirmar"
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
          <Checkbox textBeside="Modo Offline" />
        </div>
        <div style={{ marginTop: "auto" }}>
          <LoginFooter />
        </div>
      </div>
    </>
  );
};

export default Login;
