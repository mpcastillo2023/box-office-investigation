import { Tickets } from "../../../../Types/Tickets";
import React from "react";
import NumericPadDesktop from "./NumericlPadDesktop/NumericPadDesktop";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import NumericPadMobile from "./NumericPadMobile/NumericPadMobile";
import { UseIsDesktop } from "components-gallery";
import useNumericPad from "./hooks/UseNumericPad";

type Props = {
  setSelectedTickets: React.Dispatch<React.SetStateAction<[] | Tickets[]>>;
  selectTickets: Tickets[];
};

const NumeralPad: React.FC<Props> = ({ setSelectedTickets, selectTickets }) => {
  const { isDesktop } = UseIsDesktop();
  const {
    quantityOfTickets,
    totalPrice,
    paid,
    outstanding,
    setIsFormModalOpen,
    isFormModalOpen,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    openConfirmModal,
    handleDelete,
    handleClick
  } = useNumericPad({ selectTickets });

  return (
    <>
      {isDesktop ? (
        <NumericPadDesktop
          quantityOfTickets={quantityOfTickets}
          totalPrice={totalPrice}
          selectTickets={selectTickets}
          setSelectedTickets={setSelectedTickets}
          paid={paid}
          outstanding={outstanding}
          setIsFormModalOpen={setIsFormModalOpen}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      ) : (
        <NumericPadMobile
          quantityOfTickets={quantityOfTickets}
          totalPrice={totalPrice}
          selectTickets={selectTickets}
          setSelectedTickets={setSelectedTickets}
          paid={paid}
          outstanding={outstanding}
          setIsFormModalOpen={setIsFormModalOpen}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      )}

      <ConfirmModal
        isConfirmModalOpen={isConfirmModalOpen}
        setIsConfirmModalOpen={setIsConfirmModalOpen}
        isFormModalOpen={isFormModalOpen}
        setIsFormModalOpen={setIsFormModalOpen}
        openConfirmModal={openConfirmModal}
      />
    </>
  );
};

export default NumeralPad;
