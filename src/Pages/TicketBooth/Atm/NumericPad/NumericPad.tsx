import { Tickets } from "../../../../Types/Tickets";
import React from "react";
import NumericPadDesktop from "./NumericlPadDesktop/NumericPadDesktop";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import NumericPadMobile from "./NumericPadMobile/NumericPadMobile";
import { UseIsDesktop } from "components-gallery";
import useNumericPad from "./hooks/UseNumericPad";

type Props = {
  setSelectedTickets: (newTickets: Tickets[]) => void;
  selectTickets: Tickets[];
  displayPad?: boolean;
  fullWidth?: boolean;
};

const NumeralPad: React.FC<Props> = ({
  setSelectedTickets,
  selectTickets,
  displayPad = true,
  fullWidth = false
}) => {
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
          displayPad={displayPad}
          fullWidth={fullWidth}
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
          displayPad={displayPad}
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
