import { Modal, Spinner, TextInput, DropdownSelect } from "components-gallery";
import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";

type Props = {
  isConfirmModalOpen: boolean;
  setIsConfirmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFormModalOpen: boolean;
  setIsFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openConfirmModal: () => void;
};

const ConfirmModal = ({
  isConfirmModalOpen,
  setIsConfirmModalOpen,
  isFormModalOpen,
  setIsFormModalOpen,
  openConfirmModal
}: Props) => {
  return (
    <>
      <Modal
        withCloseButton={false}
        setIsModalOpen={setIsConfirmModalOpen}
        isModalOpen={isConfirmModalOpen}
        variant="success"
        customStyle={styles}
      >
        <div className={styles.confirmModalContainer}>
          <div className={styles.confirmModalTitle}>
            <div>
              <FormattedMessage
                id="numeralPad.processing"
                defaultMessage="Completando la venta. Por favor espere...."
              />
            </div>
            <div>
              <FormattedMessage
                id="numeralPad.transactionSteps"
                defaultMessage="Reserva, pago, impresión..."
              />
            </div>
          </div>
          <Spinner customClasses={styles.ldsSpinner} />
        </div>
      </Modal>

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
        onConfirmHandler={openConfirmModal}
        customStyle={styles}
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>
            <FormattedMessage
              id="numeralPad.purchaseDetails"
              defaultMessage="Detalles de la Compra"
            />
          </div>
          <div className={styles.inputsContainer}>
            <div>
              <FormattedMessage
                id="numeralPad.firstName"
                defaultMessage="Nombre*"
              />
              <TextInput />
            </div>
            <div>
              <FormattedMessage
                id="numeralPad.lastName"
                defaultMessage="Apellido*"
              />
              <TextInput />
            </div>
            <div>
              <FormattedMessage
                id="numeralPad.nationality"
                defaultMessage="Nacionalidad*"
              />
              <DropdownSelect
                customStyle={styles}
                optionList={[
                  { optionText: "Español", optionValue: "Español" },
                  {
                    optionText: "Estadounidense",
                    optionValue: "Estadounidense"
                  },
                  { optionText: "Mexicano", optionValue: "Mexicano" },
                  { optionText: "Japonés", optionValue: "Japonés" },
                  { optionText: "Alemán", optionValue: "Alemán" }
                ]}
              />
            </div>
            <div>
              <FormattedMessage
                id="numeralPad.phone"
                defaultMessage="Teléfono*"
              />
              <TextInput />
            </div>
            <div>
              <FormattedMessage id="numeralPad.email" defaultMessage="Email*" />
              <TextInput />
            </div>
            <div>
              <FormattedMessage
                id="numeralPad.notes"
                defaultMessage="Observaciones*"
              />
              <TextInput />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmModal;
