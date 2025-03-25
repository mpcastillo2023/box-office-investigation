import { DropdownSelect, Modal } from "components-gallery";
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";

type Props = {
  isFormModalOpen: boolean;
  setIsFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalForm = ({ isFormModalOpen, setIsFormModalOpen }: Props) => {
  const nationalities = [
    {
      optionValue: "1",
      optionText: "Mexicana"
    },
    {
      optionValue: "2",
      optionText: "Estadounidense"
    },
    {
      optionValue: "3",
      optionText: "Española"
    },
    {
      optionValue: "4",
      optionText: "Argentina"
    },
    {
      optionValue: "5",
      optionText: "Colombiana"
    },
    {
      optionValue: "6",
      optionText: "Canadiense"
    },
    {
      optionValue: "7",
      optionText: "Alemana"
    },
    {
      optionValue: "8",
      optionText: "Francesa"
    },
    {
      optionValue: "9",
      optionText: "Italiana"
    },
    {
      optionValue: "10",
      optionText: "Brasileña"
    }
  ];
  return (
    <>
      <Modal
        modalTitle={
          <FormattedMessage
            id="numeralPad.completeForm"
            defaultMessage="Complete el Formulario"
          />
        }
        variant="success"
        isConfirmModal
        setIsModalOpen={setIsFormModalOpen}
        isModalOpen={isFormModalOpen}
        cancelButtonText={
          <FormattedMessage id="numeralPad.cancel" defaultMessage="Cancelar" />
        }
        confirmButtonText={
          <FormattedMessage
            id="numeralPad.confirm"
            defaultMessage="Confirmar"
          />
        }
        customStyle={styles}
      >
        <div className={styles.confirmModalContainer}>
          <div className={styles.confirmModalTitle}>
            <FormattedMessage id="forms.title" defaultMessage="Nacionalidad" />
          </div>
          <div className={styles.selectContainer}>
            <DropdownSelect
              className={styles.select}
              customStyle={styles}
              optionList={nationalities}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalForm;
