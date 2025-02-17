import { useState } from "react";
import styles from "./Styles/styles.module.scss";
import UserIcon from "@icons/user.svg";
import TrashIcon from "@icons/trash.svg";
import {
  Accordion,
  DropdownSelect,
  Modal,
  TextInput,
  UseIsDesktop,
} from "components-gallery";

const NumeralPad: React.FC = () => {
  const [pagado, setPagado] = useState<string>("");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleClick = (value: string | number) => {
    setPagado((prev) => (prev === "0" ? String(value) : prev + value));
  };

  const handleDelete = () => {
    setPagado((prev) => prev.slice(0, -1) || "0");
  };
  const { isDesktop } = UseIsDesktop();
  return (
    <>
      {isDesktop ? (
        <div className={styles.numeralPadContainer}>
          <div className={styles.resumen}>
            <div className={styles.totalHeader}>
              <div>TOTAL</div>
              <div className={styles.totalInfo}>
                <div className={styles.numberOfTicketContainer}>
                  <span>2</span>
                  <UserIcon />
                </div>
                <div className={styles.deleteBtn}>
                  40,00€
                  <TrashIcon />
                </div>
              </div>
            </div>
            <div className={styles.reservaEnCurso}>
              <div className={styles.item}>
                <div>Producto 2 aforos dependientes (misma fecha)</div>
                <div className={styles.itemInfo}>
                  <span>2</span>
                  <span>40,00€</span>
                </div>
              </div>
              <div className={styles.item}>
                <span>General</span>
                <div className={styles.itemInfo}>
                  <span>2</span>
                  <span>40,00€</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.pago}>
            20px
            <div className={styles.totales}>
              <div className={styles.totalesInfo}>
                <span>TOTAL</span>
                <span style={{ fontWeight: "bold" }}>40.00</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>PAGADO</span>
                <span style={{ fontWeight: "bold" }}>{pagado || "0.00"}</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>FALTAN</span>
                <span style={{ fontWeight: "bold" }}>
                  {(40 - parseFloat(pagado || "0")).toFixed(2)}
                </span>
              </div>
            </div>
            <div className={styles.teclado}>
              {[7, 8, 9, 4, 5, 6, 1, 2, 3, "DEL", 0, "."].map((key) => (
                <button
                  key={String(key)}
                  className={key === "DEL" ? styles.del : ""}
                  onClick={() =>
                    key === "DEL" ? handleDelete() : handleClick(key)
                  }
                >
                  {key}
                </button>
              ))}
            </div>
            <div className={styles.paymentOptions}>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                VOUCHER
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                TARJETA
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                EFECTIVO
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Accordion
          variant="simple"
          expanded={isDesktop}
          shouldDisplayIcon={false}
          title={
            <div className={styles.resumen}>
              <div className={styles.totalHeader}>
                <span>TOTAL</span>
                <div className={styles.totalInfo}>
                  <div className={styles.numberOfTicketContainer}>
                    <span>2</span>
                    <UserIcon />
                  </div>

                  <div className={styles.deleteBtn}>
                    40,00€
                    <TrashIcon />
                  </div>
                </div>
              </div>
            </div>
          }
          customStyleClasses={styles}
        >
          <div className={styles.reservaEnCurso}>
            <div className={styles.item}>
              <div>Producto 2 aforos dependientes (misma fecha)</div>
              <div className={styles.itemInfo}>
                <span>2</span>
                <span>40,00€</span>
              </div>
            </div>
            <div className={styles.item}>
              <span>General</span>
              <div className={styles.itemInfo}>
                <span>2</span>
                <span>40,00€</span>
              </div>
            </div>
          </div>
          <div className={styles.pago}>
            <div className={styles.totales}>
              <div className={styles.totalesInfo}>
                <span>TOTAL</span>
                <span style={{ fontWeight: "bold" }}>40.00</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>PAGADO</span>
                <span style={{ fontWeight: "bold" }}>{pagado || "0.00"}</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>FALTAN</span>
                <span style={{ fontWeight: "bold" }}>
                  {(40 - parseFloat(pagado || "0")).toFixed(2)}
                </span>
              </div>
            </div>

            <div className={styles.teclado}>
              {[7, 8, 9, 4, 5, 6, 1, 2, 3, "DEL", 0, "."].map((key) => (
                <button
                  key={String(key)}
                  className={key === "DEL" ? styles.del : ""}
                  onClick={() =>
                    key === "DEL" ? handleDelete() : handleClick(key)
                  }
                >
                  {key}
                </button>
              ))}
            </div>

            <div className={styles.paymentOptions}>
              <button className={styles.paymentButton}>VOUCHER</button>
              <button className={styles.paymentButton}>TARJETA</button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                EFECTIVO
              </button>
            </div>
          </div>
        </Accordion>
      )}

      <Modal
        setIsModalOpen={setIsFormModalOpen}
        isModalOpen={isFormModalOpen}
        customStyle={styles}
      >
        a
      </Modal>

      <Modal
        modalTitle="Complete el Formulario"
        variant="success"
        isConfirmModal
        setIsModalOpen={setIsFormModalOpen}
        isModalOpen={isFormModalOpen}
        cancelButtonText="Cancelar"
        confirmButtonText="Confirmar"
        onConfirmHandler={() => {}}
        customStyle={styles}
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>Detalles de la Compra</div>
          <div className={styles.inputsContainer}>
            <div>
              Nombre*
              <TextInput />
            </div>
            <div>
              Apellido*
              <TextInput />
            </div>
            <div>
              Nacionalidad*
              <DropdownSelect
                customStyle={styles}
                optionList={[
                  { optionText: "Español", optionValue: "Español" },
                  {
                    optionText: "Estadounidense",
                    optionValue: "Estadounidense",
                  },
                  { optionText: "Mexicano", optionValue: "Mexicano" },
                  { optionText: "Japonés", optionValue: "Japonés" },
                  { optionText: "Alemán", optionValue: "Alemán" },
                ]}
              />
            </div>
            <div>
              Telefono*
              <TextInput />
            </div>
            <div>
              Email*
              <TextInput />
            </div>
            <div>
              Observaciones*
              <TextInput />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NumeralPad;
