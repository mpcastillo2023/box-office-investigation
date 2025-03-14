import React, { useEffect, useState } from "react";
import styles from "./Styles/styles.module.scss";

interface CardProps {
  name: string;
  price: number;
  productId: number;
  setSelectedTickets: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        price: number;
        quantity: number;
        totalPrice: number;
        productId: number;
      }[]
    >
  >;
  selectedTickets: {
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    productId: number;
  }[];
}

const Card: React.FC<CardProps> = ({
  name,
  price,
  setSelectedTickets,
  selectedTickets,
  productId
}) => {
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setSelectedTickets((prevTickets) => {
      const ticketExists = prevTickets.find(
        (ticket) => ticket.productId === productId
      );

      if (quantity === 0) {
        return prevTickets.filter((ticket) => ticket.productId !== productId);
      }

      const totalPrice = (price * quantity).toFixed(2);

      if (ticketExists) {
        return prevTickets.map((ticket) =>
          ticket.productId === productId
            ? { ...ticket, quantity, totalPrice: parseFloat(totalPrice) }
            : ticket
        );
      } else {
        return [
          ...prevTickets,
          {
            productId,
            name,
            price,
            quantity,
            totalPrice: parseFloat(totalPrice)
          }
        ];
      }
    });
  }, [quantity]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <div className={`${styles.card} ${quantity > 0 ? styles.selected : ""}`}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {/* eslint-disable-next-line react/jsx-no-literals*/}
        <span className={styles.price}>{price.toFixed(2)} €</span>
      </div>
      <div className={styles.counter}>
        {/* eslint-disable-next-line react/jsx-no-literals*/}
        <button onClick={decreaseQuantity} className={styles.button}>
          −
        </button>
        <span className={styles.quantity}>
          {selectedTickets.find(
            (ticket: { productId: number }) => ticket.productId === productId
          )?.quantity || 0}
        </span>
        {/* eslint-disable-next-line react/jsx-no-literals*/}
        <button onClick={increaseQuantity} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
