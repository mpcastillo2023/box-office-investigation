import React from "react";
import { customStyleClasses } from "./Types";
type Props = {
    /**
     * Children elements to be rendered inside the modal body.
     * @param {React.ReactNode}
     */
    children: React.ReactNode;
    /**
     * Function to set the modal's open state.
     * @param {React.Dispatch<React.SetStateAction<boolean>>}
     */
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Boolean indicating whether the modal is currently open.
     * @param {boolean}
     */
    isModalOpen: boolean;
    /**
     * Optional title to be displayed at the top of the modal.
     * @param {React.ReactNode}
     */
    modalTitle?: React.ReactNode;
    /**
     * Optional custom styles to override or extend default styles.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * Boolean indicating whether the modal should be treated as a confirmation modal.
     * Defaults to false.
     * @param {boolean}
     */
    isConfirmModal?: boolean;
    /**
     * Boolean indicating whether the confirmation modal can save changes.
     * Defaults to true.
     * @param {boolean}
     */
    isConfirmValid?: boolean;
    /**
     * Optional handler to be called when the confirm button is clicked.
     * @param {() => Promise<void> | void}
     */
    onConfirmHandler?: () => Promise<void> | void;
    /**
     * Optional handler to be called when the cancel button is clicked.
     * @param {() => Promise<void> | void}
     */
    onCancelHandler?: () => Promise<void> | void;
    /**
     * Optional text for the cancel button. Defaults to "Cancel".
     * @param {string | React.ReactNode}
     */
    cancelButtonText?: string | React.ReactNode;
    /**
     * Optional text for the confirm button. Defaults to "Save".
     * @param {string | React.ReactNode}
     */
    confirmButtonText?: string | React.ReactNode;
    /**
     * Optional variant for styling the modal. Accepts "primary" or an empty string.
     * @param {"primary" | "warning" | "success"}
     */
    variant?: "primary" | "warning" | "success" | "simple";
    /**
     * Whether the modal can be closed by a button
     * @type {boolean}
     */
    withCloseButton?: boolean;
};
/**
 * Modal component displays a dialog box that overlays the main content.
 * It supports customizable title, footer, and body content.
 * Additional customization options are available for confirmation modals, custom styles, and various button texts.
 *
 * @param {Props} props - Props for the Modal component.
 * @returns {JSX.Element | null}
 */
export default function Modal({ children, setIsModalOpen, isModalOpen, modalTitle, customStyle, isConfirmModal, isConfirmValid, onConfirmHandler, onCancelHandler, cancelButtonText, confirmButtonText, variant, withCloseButton }: Props): React.JSX.Element | null;
export {};
