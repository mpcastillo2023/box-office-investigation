import { UseIsDesktop } from "components-gallery";
import { useEffect, useState } from "react";
import { Tickets } from "src/Types/Tickets";

type Props = {
  selectTickets: Tickets[];
};

export default function useNumericPad({ selectTickets }: Props) {
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

  return {
    quantityOfTickets,
    totalPrice,
    paid,
    outstanding,
    setIsFormModalOpen,
    handleDelete,
    handleClick,
    setIsConfirmModalOpen,
    isFormModalOpen,
    isConfirmModalOpen,
    openConfirmModal,
    isDesktop
  };
}
