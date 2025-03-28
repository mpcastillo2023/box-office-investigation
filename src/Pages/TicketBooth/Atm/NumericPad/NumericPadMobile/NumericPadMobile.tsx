import { Accordion, UseIsDesktop } from "components-gallery";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Tickets } from "../../../../../Types/Tickets";
import UserIcon from "@icons/user.svg";
import TrashIcon from "@icons/trash.svg";
import styles from "./Styles/Styles.module.scss";

type Props = {
  quantityOfTickets: number;
  totalPrice: number;
  selectTickets: Tickets[];
  setSelectedTickets: (newTickets: Tickets[]) => void;
  paid: string;
  outstanding: string;
  setIsFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  handleClick: (value: string | number) => void;
  displayPad: boolean;
};

const NumericPadMobile = ({
  quantityOfTickets,
  totalPrice,
  selectTickets,
  paid,
  outstanding,
  setSelectedTickets,
  setIsFormModalOpen,
  handleDelete,
  handleClick,
  displayPad
}: Props) => {
  const { isDesktop } = UseIsDesktop();
  return (
    <>
      <Accordion
        variant="simple"
        expanded={isDesktop}
        shouldDisplayIcon={false}
        title={
          <div className={styles.totalHeader}>
            <div>
              <FormattedMessage id="numeralPad.total" defaultMessage="TOTAL" />
            </div>
            <div className={styles.totalInfo}>
              <div className={styles.numberOfTicketContainer}>
                <span>{quantityOfTickets}</span>
                <UserIcon />
              </div>
              <div className={styles.deleteBtn}>
                {/*  eslint-disable-next-line react/jsx-no-literals */}
                {totalPrice.toFixed(2)}€
                <button onClick={() => setSelectedTickets([])}>
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        }
        customStyleClasses={styles}
      >
        <div className={styles.bookingInProgress}>
          <div className={styles.items}>
            {selectTickets.map((ticket, index: number) => (
              <div className={styles.item} key={index}>
                <span className={styles.itemName}>{ticket.name}</span>
                <span className={styles.itemQuantity}>{ticket.quantity}</span>
                <span className={styles.itemPrice}>
                  {/*  eslint-disable-next-line react/jsx-no-literals */}
                  {ticket.totalPrice}€
                </span>
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
          {displayPad ? (
            <>
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
            </>
          ) : null}
        </div>
      </Accordion>
    </>
  );
};

export default NumericPadMobile;
