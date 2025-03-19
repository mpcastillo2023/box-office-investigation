import React from "react";
import { Button } from "../../";
import styles from "../Styles/styles.module.scss";
export default function ModalFooter({ onConfirmHandler, setIsModalOpen, onCancelHandler, cancelButtonText, confirmButtonText, isConfirmValid, variant }) {
    return (React.createElement("div", { className: `${styles.modalFooter}` },
        React.createElement(Button, { onClick: () => {
                if (onCancelHandler)
                    onCancelHandler();
                setIsModalOpen(false);
            }, variant: "empty", size: "medium", rounded: variant === "primary", className: styles.cancelButton }, cancelButtonText),
        React.createElement(Button, { variant: "primary", size: "medium", onClick: async () => {
                if (onConfirmHandler)
                    await onConfirmHandler();
                setIsModalOpen(false);
            }, disabled: !isConfirmValid, rounded: variant === "primary", className: styles.confirmButton }, confirmButtonText)));
}
