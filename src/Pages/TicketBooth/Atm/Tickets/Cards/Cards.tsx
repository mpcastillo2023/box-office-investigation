import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";

interface CardProps {
  name: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ name, price }) => {
  const [quantity, setQuantity] = useState<number>(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <div className={`${styles.card} ${quantity > 0 ? styles.selected : ""}`}>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price.toFixed(2)} €</span>
      </div>
      <div className={styles.counter}>
        <button onClick={decreaseQuantity} className={styles.button}>
          −
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={increaseQuantity} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
