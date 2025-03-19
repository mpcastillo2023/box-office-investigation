import React from "react";
import ModalFooter from "./ModalFooter/ModalFooter";
import { Portal } from "../Portal/Portal";
import Close from "@cg-icons/Close.svg";
import Button from "@cg-components/Button/Button";
import styles from "./Styles/styles.module.scss";
/**
 * Modal component displays a dialog box that overlays the main content.
 * It supports customizable title, footer, and body content.
 * Additional customization options are available for confirmation modals, custom styles, and various button texts.
 *
 * @param {Props} props - Props for the Modal component.
 * @returns {JSX.Element | null}
 */
export default function Modal({ children, setIsModalOpen, isModalOpen, modalTitle, customStyle, isConfirmModal = false, isConfirmValid = true, onConfirmHandler, onCancelHandler, cancelButtonText = "Cancel", confirmButtonText = "Save", variant = "primary", withCloseButton = true }) {
    if (!isModalOpen)
        return null;
    const variantClass = styles[variant];
    const shouldRenderModalHeader = variant !== "simple" && (modalTitle || withCloseButton);
    const shouldRenderModalFooter = isConfirmModal && variant !== "simple";
    return (React.createElement(React.Fragment, null,
        React.createElement(Portal, null,
            React.createElement("div", { className: styles.modalBackdrop, "data-testid": "blackdrop", onClick: () => {
                    setIsModalOpen(false);
                    if (isConfirmModal) {
                        if (onCancelHandler)
                            onCancelHandler();
                    }
                } })),
        React.createElement(Portal, { className: `${styles.modal} ${variantClass} ${customStyle?.modal || ""}`, role: "dialog" },
            shouldRenderModalHeader ? (React.createElement("div", { className: `${styles.modalHeader} ${customStyle?.modalHeader}`, "data-testid": "modal-header" },
                modalTitle,
                withCloseButton ? (React.createElement(Button, { onClick: () => {
                        setIsModalOpen(false);
                    }, className: styles.closeButton, size: "smallIcon" },
                    React.createElement(Close, null))) : null)) : null,
            React.createElement("div", { className: ` ${styles.modalBody} ${customStyle?.modalBody || ""}`, "data-testid": "modal-body" },
                React.createElement("div", { className: ` ${styles.modalContent} ${customStyle?.modalContent || ""}` }, children),
                shouldRenderModalFooter ? (React.createElement(ModalFooter, { setIsModalOpen: setIsModalOpen, onConfirmHandler: onConfirmHandler, onCancelHandler: onCancelHandler, cancelButtonText: cancelButtonText, confirmButtonText: confirmButtonText, isConfirmValid: isConfirmValid, variant: variant })) : null))));
}
