import React from "react";
type Props = {
    onConfirmHandler?: () => Promise<void> | void;
    setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
    onCancelHandler?: () => Promise<void> | void;
    cancelButtonText?: string | React.ReactNode;
    confirmButtonText?: string | React.ReactNode;
    isConfirmValid: boolean;
    variant?: "primary" | "warning" | "success";
};
export default function ModalFooter({ onConfirmHandler, setIsModalOpen, onCancelHandler, cancelButtonText, confirmButtonText, isConfirmValid, variant }: Props): React.JSX.Element;
export {};
