import { Button } from "../components";
import Modal from "../components/Modal/Modal";
import { useState } from "react";
import * as React from "react";
import WarningIcon from "@cg-icons/AlertWarning.svg";
import CheckCircleIcon from "@cg-icons/CheckCircle.svg";
import styles from "./styles/ModalStoriesStyles.module.scss";
const meta = {
    title: "Modal",
    component: Modal,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            const [isModalOpen, setIsModalOpen] = useState(false);
            return (React.createElement(React.Fragment, null,
                React.createElement(Button, { onClick: () => {
                        setIsModalOpen(true);
                    }, variant: "primary" }, "Click me"),
                React.createElement(Story, { args: {
                        ...props.args,
                        setIsModalOpen,
                        isModalOpen
                    } })));
        }
    ],
    args: {
        children: (React.createElement("div", { style: {
                margin: "2rem"
            } }, "Modal content")),
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setIsModalOpen: () => { },
        isModalOpen: true
    },
    argTypes: {
        setIsModalOpen: {
            table: {
                disable: true
            }
        },
        isModalOpen: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const DefaultModal = {
    args: {
        variant: "primary",
        modalTitle: "Lorem ipsum dolor sit amet.",
        children: (React.createElement("p", { style: { padding: "10px" } }, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))
    }
};
export const DefaultModalWithFooter = {
    args: {
        variant: "primary",
        isConfirmModal: true,
        modalTitle: "Order",
        children: (React.createElement("p", { style: {
                fontSize: "12px"
            } }, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))
    }
};
export const WarningModal = {
    args: {
        children: (React.createElement("p", { style: {
                fontSize: "12px",
                padding: 0,
                margin: 0
            } }, "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.")),
        variant: "warning",
        modalTitle: (React.createElement("div", { className: styles.headerExample },
            React.createElement("div", { className: styles.alertIcon },
                React.createElement(WarningIcon, null)),
            "Est\u00E1s a punto de salir de la creaci\u00F3n/edici\u00F3n.")),
        isConfirmModal: true,
        confirmButtonText: "Exit",
        cancelButtonText: "Cancel"
    }
};
export const SuccessModal = {
    args: {
        children: (React.createElement("p", { style: {
                fontSize: "12px",
                padding: 0,
                margin: 0
            } }, "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.")),
        variant: "success",
        modalTitle: (React.createElement("div", { className: styles.headerExample },
            React.createElement("div", { className: styles.confirmIcon },
                React.createElement(CheckCircleIcon, null)),
            "Confirmas tu compra?")),
        isConfirmModal: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel"
    }
};
