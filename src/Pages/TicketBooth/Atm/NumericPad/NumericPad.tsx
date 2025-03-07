import { useEffect, useState } from "react";
import styles from "./Styles/styles.module.scss";
import UserIcon from "@icons/user.svg";
import TrashIcon from "@icons/trash.svg";
import {
  Accordion,
  DropdownSelect,
  Modal,
  Spinner,
  TextInput,
  UseIsDesktop,
} from "components-gallery";

type Props = {
  setSelectedTickets: React.Dispatch<React.SetStateAction<[] | any>>;
  selectTickets: [] | any;
};
const NumeralPad: React.FC<Props> = ({ setSelectedTickets, selectTickets }) => {
  const [paid, setPaid] = useState("0");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = selectTickets.reduce(
      (acc: number, ticket: { totalPrice: number }) => acc + ticket.totalPrice,
      0
    );

    setTotal(newTotal.toFixed(2));
  }, [selectTickets]);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  useEffect(() => {
    if (isConfirmModalOpen) {
      const timer = setTimeout(() => {
        setIsConfirmModalOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isConfirmModalOpen]);

  const handleClick = (value: string | number) => {
    setPaid((prev) => (prev === "0" ? String(value) : prev + value));
  };

  const handleDelete = () => {
    setPaid((prev) => prev.slice(0, -1) || "0");
  };

  const outstanding =
    total - parseFloat(paid) >= 0
      ? (total - parseFloat(paid)).toFixed(2)
      : "0,00";
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
                  <span>
                    {selectTickets.reduce(
                      (acc: number, ticket: { quantity: number }) =>
                        acc + ticket.quantity,
                      0
                    )}
                  </span>
                  <UserIcon />
                </div>
                <div className={styles.deleteBtn}>
                  {selectTickets.reduce(
                    (acc: number, ticket: { totalPrice: number }) =>
                      acc + ticket.totalPrice,
                    0
                  )}
                  €
                  <TrashIcon />
                </div>
              </div>
            </div>
            <div className={styles.bookingInProgress}>
              <div className={styles.items}>
                {selectTickets.map((ticket: any, index: number) => (
                  <div className={styles.item} key={index}>
                    <span className={styles.itemName}>{ticket.name}</span>
                    <span className={styles.itemQuantity}>
                      {ticket.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      {ticket.totalPrice}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.pago}>
            <div className={styles.totales}>
              <div className={styles.totalesInfo}>
                <span>TOTAL</span>
                <span style={{ fontWeight: "bold" }}>{total || "0,00"}</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>PAGADO</span>
                <span style={{ fontWeight: "bold" }}>
                  {parseFloat(paid).toFixed(2) || "0,00"}
                </span>
              </div>
              <div className={styles.totalesInfo}>
                <span>FALTAN</span>
                <span style={{ fontWeight: "bold" }}>{outstanding}</span>
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
          <div className={styles.bookingInProgress}>
            <div className={styles.items}>
              {selectTickets.map((ticket: any, index: number) => (
                <div className={styles.item} key={index}>
                  <span className={styles.itemName}>{ticket.name}</span>
                  <span className={styles.itemQuantity}>{ticket.quantity}</span>
                  <span className={styles.itemPrice}>{ticket.totalPrice}€</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.pago}>
            <div className={styles.totales}>
              <div className={styles.totalesInfo}>
                <span>TOTAL</span>
                <span style={{ fontWeight: "bold" }}>40.00</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>paid</span>
                <span style={{ fontWeight: "bold" }}>{paid || "0.00"}</span>
              </div>
              <div className={styles.totalesInfo}>
                <span>FALTAN</span>
                <span style={{ fontWeight: "bold" }}>
                  {(40 - parseFloat(paid || "0")).toFixed(2)}
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
        </Accordion>
      )}

      <Modal
        withCloseButton={false}
        setIsModalOpen={setIsConfirmModalOpen}
        isModalOpen={isConfirmModalOpen}
        variant="success"
        customStyle={styles}
      >
        <div className={styles.confirmModalContainer}>
          <div className={styles.confirmModalTitle}>
            <div>Completando la venta. Por favor espere....</div>
            <div>reserva, pago, impresion...</div>
          </div>
          <Spinner customClasses={styles.ldsSpinner} />
        </div>
      </Modal>

      <Modal
        modalTitle="Complete el Formulario"
        variant="success"
        isConfirmModal
        setIsModalOpen={setIsFormModalOpen}
        isModalOpen={isFormModalOpen}
        cancelButtonText="Cancelar"
        confirmButtonText="Confirmar"
        onConfirmHandler={openConfirmModal}
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
