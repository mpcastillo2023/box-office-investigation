import styles from "./Styles/styles.module.scss";
import XMarkIcon from "@icons/x-mark.svg";

const VerificationModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.headerTitle}>
            <div>Complete el Formulario</div>
            <div>
              <button className={styles.closeButtonHeader} onClick={onClose}>
                <XMarkIcon />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.titleForm}>Nacionalidad</div>
          <div className={styles.form}>
            <select className={styles.select}>
              <option value="">Seleccione una nacionalidad</option>
              <option value="mex">Mexicana</option>
              <option value="usa">Estadounidense</option>
              <option value="esp">Española</option>
              <option value="arg">Argentina</option>
              <option value="bra">Brasileña</option>
              <option value="fra">Francesa</option>
              <option value="ale">Alemana</option>
            </select>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.closeButton} onClick={onClose}>
            Cerrar
          </button>
          <button className={styles.acceptButton}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
