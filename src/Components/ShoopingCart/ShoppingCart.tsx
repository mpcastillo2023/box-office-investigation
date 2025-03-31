import React from "react";
import UserIcon from "@icons/user.svg";
import { FormattedMessage } from "react-intl";
import styles from "./Styles/styles.module.scss";
import { Tickets } from "../../Types/Tickets";
import useNumericPad from "../../Pages/TicketBooth/Atm/NumericPad/hooks/UseNumericPad";
import { Modal, Spinner } from "components-gallery";

type Props = {
  selectTickets: Tickets[];
  setIsConfirmModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isConfirmModalOpen: boolean;
};

const ShoppingCart = ({
  selectTickets,
  setIsConfirmModalOpen,
  isConfirmModalOpen
}: Props) => {
  const { quantityOfTickets, totalPrice, paid, outstanding } = useNumericPad({
    selectTickets
  });
  return (
    <>
      <div className={styles.container}>
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
          </div>
        </div>
      </div>
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
    </>
  );
};

export default ShoppingCart;
