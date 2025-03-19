import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  name: string;
  price: number;
  productId: number;
  setSelectedTickets: Dispatch<
    SetStateAction<
      {
        name: string;
        price: number;
        quantity: number;
        totalPrice: number;
        productId: number;
      }[]
    >
  >;
};
export default function UseTickets({
  name,
  price,
  productId,
  setSelectedTickets
}: Props) {
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

  return { quantity, increaseQuantity, decreaseQuantity };
}
