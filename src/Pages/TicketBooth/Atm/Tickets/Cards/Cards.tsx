import React from "react";
import styles from "./Styles/styles.module.scss";
import UseCards from "./hooks/UseCards";

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
  const { quantity, increaseQuantity, decreaseQuantity } = UseCards({
    name,
    price,
    productId,
    setSelectedTickets
  });

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
