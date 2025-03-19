import {
  Button,
  Checkbox,
  DropdownSelect,
  EmailInput,
  Modal,
  PasswordInput,
  RadioButtonGroup
} from "components-gallery";
import styles from "./Styles/styles.module.scss";
import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import ClorianLogo from "@images/clorian-logo-login.png";
import { useNavigate } from "react-router-dom";
import LoginFooter from "../../Components/LoginFooter/LoginFooter";
import React from "react";
import { AvailableLocalesContext } from "../../Providers/AvailableLocaleProvider";
import { LocaleContext } from "../../Providers/LocaleProvider";
import Language from "../../../assets/icons/language.svg";
import getLocaleOptionText from "./getLocaleOptionText";
import getActiveLocalOptionText from "./getActiveLocaleOptionText";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const ticketBooth = () => {
    navigate("/ticket-Booth");
  };
  const { locales } = useContext(AvailableLocalesContext);
  const { setLocale, locale } = useContext(LocaleContext);
  const optionList = locales.map((localeOption) => {
    return {
      optionValue: localeOption,
      optionText:
        locale === localeOption
          ? getActiveLocalOptionText(localeOption)
          : getLocaleOptionText(localeOption),
      disabled: locale === localeOption
    };
  });
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginBanner}>
            <h2 className={styles.loginTitle}>Login</h2>
            <div className={styles.dropdownContainer}>
              <DropdownSelect
                autowidth={true}
                customStyle={styles}
                activeIcon={<Language />}
                icon={<Language />}
                iconOnLeft={true}
                optionList={optionList}
                value={locale}
                onChange={(option) => {
                  const { optionValue } = option;
                  if (typeof optionValue === "string") {
                    setLocale(optionValue);
                  }
                }}
              />
            </div>
          </div>
          <div className={styles.loginForm}>
            <div className={styles.loginLogo}>
              <img src={ClorianLogo} alt="Clorian Logo" />
            </div>
            <div>
              <FormattedMessage id="login.username" defaultMessage="Usuario" />
              <EmailInput />
            </div>
            <div>
              <FormattedMessage
                id="login.password"
                defaultMessage="Contraseña"
              />
              <PasswordInput />
            </div>
            <div className={styles.loginButton}>
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
