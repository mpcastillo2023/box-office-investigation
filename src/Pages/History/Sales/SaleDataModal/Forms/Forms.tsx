import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";
import { FormattedMessage } from "react-intl";
import PencilIcon from "@cg-icons/Pencil.svg";
import ModalForm from "./ModalForm/ModalForm";

const Forms = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  return (
    <>
      <div className={styles.formsContainer}>
        <div className={styles.paymentsTitle}>
          <div>
            <FormattedMessage id="forms.title" defaultMessage="Nacionalidad" />
          </div>
          <div className={styles.type}>
            <FormattedMessage id="forms.type" defaultMessage="(compra)" />
          </div>
          <div className={styles.edit}>
            <button onClick={() => setIsFormModalOpen(true)}>
              <PencilIcon />
              <FormattedMessage id="forms.edit" defaultMessage="EDITAR" />
            </button>
          </div>
        </div>
        <div className={styles.formsInfo}>
          <div>
            <FormattedMessage
              id="forms.nationality"
              defaultMessage="Nacionalidad:"
            />
          </div>
          <div>
            <FormattedMessage
              id="forms.postal"
              defaultMessage="Codigo Postal:"
            />
          </div>
        </div>
      </div>
      <ModalForm
        isFormModalOpen={isFormModalOpen}
        setIsFormModalOpen={setIsFormModalOpen}
      />
    </>
  );
};

export default Forms;
