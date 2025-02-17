import { Modal } from "components-gallery";
import ArchiveWithArrowIcon from "@icons/archive-box-arrow.svg";
import styles from "./Styles/styles.module.scss";
import { useState } from "react";

type Props = {
  isCashDropModalOpen: boolean;
  setIsCashDropModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CashDropModal = ({
  isCashDropModalOpen,
  setIsCashDropModalOpen,
}: Props) => {
  const [amount, setAmount] = useState("0,00 EUR");

  const handleNumberClick = (num: string) => {
    setAmount((prev) => {
      let cleanValue = prev.replace(" EUR", "").replace(",", ".");
      if (cleanValue === "0.00") cleanValue = "";

      if (num === "." && cleanValue.includes(".")) return prev;
      const newValue = cleanValue + num;
      return `${newValue} EUR`;
    });
  };
  const handleDelete = () => {
    setAmount((prev) => {
      let cleanValue = prev.replace(" EUR", "").replace(",", ".");
      if (cleanValue.length <= 1) return "0,00 EUR";
      const newValue = cleanValue.slice(0, -1);
      return `${newValue} EUR`;
    });
  };
  return (
    <>
      <Modal
        customStyle={styles}
        variant="success"
        setIsModalOpen={setIsCashDropModalOpen}
        isModalOpen={isCashDropModalOpen}
        withCloseButton
        isConfirmModal
        modalTitle={
          <>
            <ArchiveWithArrowIcon /> Retirar efectivo
          </>
        }
      >
        <div className={styles.container}>
          <div className={styles.display}>
            <span className={styles.label}>IMPORTE</span>
            <input className={styles.input} value={amount} readOnly />
          </div>

          <div className={styles.display}>
            <span className={styles.label}>CONFIRMAR</span>
            <input className={styles.input} value="0,00 EUR" readOnly />
          </div>

          <div className={styles.keypad}>
            {["7", "8", "9", "4", "5", "6", "1", "2", "3", "DEL", "0", "."].map(
              (key) => (
                <button
                  key={key}
                  className={key === "DEL" ? styles.delButton : styles.button}
                  onClick={() =>
                    key === "DEL" ? handleDelete() : handleNumberClick(key)
                  }
                >
                  {key}
                </button>
              )
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CashDropModal;
