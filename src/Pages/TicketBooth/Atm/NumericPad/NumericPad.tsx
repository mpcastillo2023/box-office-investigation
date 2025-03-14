/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  UseIsDesktop
} from "components-gallery";
import { FormattedMessage } from "react-intl";
import { Tickets } from "../../../../Types/Tickets";
import React from "react";

type Props = {
  setSelectedTickets: React.Dispatch<React.SetStateAction<[] | Tickets[]>>;
  selectTickets: Tickets[];
};

const NumeralPad: React.FC<Props> = ({ setSelectedTickets, selectTickets }) => {
  const [paid, setPaid] = useState("0");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const newTotal = selectTickets.reduce(
      (acc: number, ticket: { totalPrice: number }) => acc + ticket.totalPrice,
      0
    );

    setTotalPrice(newTotal);
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
    totalPrice - parseFloat(paid) >= 0
      ? (totalPrice - parseFloat(paid)).toFixed(2)
      : "0,00";
  const { isDesktop } = UseIsDesktop();
  const quantityOfTickets = selectTickets.reduce(
    (acc: number, ticket: { quantity: number }) => acc + ticket.quantity,
    0
  );
  return (
    <>
      {isDesktop ? (
        <div className={styles.numeralPadContainer}>
          <div className={styles.resume}>
            <div className={styles.totalHeader}>
              <div>
                <FormattedMessage
                  id="numeralPad.total"
                  defaultMessage="TOTAL"
                />
              </div>
              <div className={styles.totalInfo}>
                <div className={styles.numberOfTicketContainer}>
                  <span>{quantityOfTickets}</span>
                  <UserIcon />
                </div>
                <div className={styles.deleteBtn}>
                  {/*  eslint-disable-next-line react/jsx-no-literals */}
                  {totalPrice.toFixed(2)}€
                  <div onClick={() => setSelectedTickets([])}>
                    <TrashIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bookingInProgress}>
              <div className={styles.items}>
                {selectTickets.map((ticket, index: number) => (
                  <div className={styles.item} key={index}>
                    <span className={styles.itemName}>{ticket.name}</span>
                    <span className={styles.itemQuantity}>
                      {ticket.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      {/*  eslint-disable-next-line react/jsx-no-literals */}
                      {ticket.totalPrice}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.payment}>
            <div className={styles.totals}>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.total"
                    defaultMessage="TOTAL"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>
                  {/*  eslint-disable-next-line react/jsx-no-literals */}
                  {totalPrice.toFixed(2)}
                </span>
              </div>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.paid"
                    defaultMessage="PAGADO"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>
                  {parseFloat(paid).toFixed(2) || "0,00"}
                </span>
              </div>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.outstanding"
                    defaultMessage="FALTAN"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>{outstanding}</span>
              </div>
            </div>

            {/* Keyboard */}
            <div className={styles.keyboard}>
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
                <FormattedMessage
                  id="numeralPad.voucher"
                  defaultMessage="VOUCHER"
                />
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                <FormattedMessage
                  id="numeralPad.card"
                  defaultMessage="TARJETA"
                />
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                <FormattedMessage
                  id="numeralPad.cash"
                  defaultMessage="EFECTIVO"
                />
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
            <div className={styles.resume}>
              <div className={styles.totalHeader}>
                <span>
                  <FormattedMessage
                    id="numeralPad.total"
                    defaultMessage="TOTAL"
                  />
                </span>
                <div className={styles.totalInfo}>
                  <div className={styles.numberOfTicketContainer}>
                    <span>{quantityOfTickets}</span>
                    <UserIcon />
                  </div>

                  <div className={styles.deleteBtn}>
                    {/*  eslint-disable-next-line react/jsx-no-literals */}
                    {totalPrice.toFixed(2)}€
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
              {selectTickets.map((ticket: Tickets, index: number) => (
                <div className={styles.item} key={index}>
                  <span className={styles.itemName}>{ticket.name}</span>
                  <span className={styles.itemQuantity}>{ticket.quantity}</span>
                  {/*  eslint-disable-next-line react/jsx-no-literals */}
                  <span className={styles.itemPrice}>{ticket.totalPrice}€</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.payment}>
            <div className={styles.totals}>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.total"
                    defaultMessage="TOTAL"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>
                  {totalPrice || "0,00"}
                </span>
              </div>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.paid"
                    defaultMessage="PAGADO"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>{paid || "0.00"}</span>
              </div>
              <div className={styles.totalsInfo}>
                <span>
                  <FormattedMessage
                    id="numeralPad.outstanding"
                    defaultMessage="FALTAN"
                  />
                </span>
                <span style={{ fontWeight: "bold" }}>{outstanding}</span>
              </div>
            </div>

            {/* Keyboard */}
            <div className={styles.keyboard}>
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
                <FormattedMessage
                  id="numeralPad.voucher"
                  defaultMessage="VOUCHER"
                />
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                <FormattedMessage
                  id="numeralPad.card"
                  defaultMessage="TARJETA"
                />
              </button>
              <button
                onClick={() => setIsFormModalOpen(true)}
                className={styles.paymentButton}
              >
                <FormattedMessage
                  id="numeralPad.cash"
                  defaultMessage="EFECTIVO"
                />
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

export default NumeralPad;
