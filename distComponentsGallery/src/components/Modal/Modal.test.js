/* eslint-disable react/jsx-no-literals */
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import React, { useState } from "react";
import { Button } from "@cg-components/Button";
import { expect, test, vi } from "vitest";
test("Modal should collapse and not collapse", async () => {
    const onSaveHandlerSpy = vi.fn();
    const onCancelHandlerSpy = vi.fn();
    const ExampleModal = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { onClick: () => setIsModalOpen(true), variant: "primary" }, "Click me"),
            React.createElement(Modal, { setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen, isConfirmModal: true, onConfirmHandler: onSaveHandlerSpy, onCancelHandler: onCancelHandlerSpy },
                React.createElement("h1", null, "Some content"))));
    };
    render(React.createElement(ExampleModal, null));
    const user = userEvent.setup();
    const modalContent = screen.queryByRole("heading", {
        level: 1,
        name: "Some content"
    });
    expect(modalContent).not.toBeInTheDocument();
    const openModalButton = screen.getByRole("button", { name: "Click me" });
    await user.click(openModalButton);
    screen.getByRole("heading", {
        level: 1,
        name: "Some content"
    });
    await user.click(screen.getByTestId("blackdrop"));
    const modalContentHidden = screen.queryByRole("heading", {
        level: 1,
        name: "Some content"
    });
    expect(modalContentHidden).not.toBeInTheDocument();
});
test("Modal should trigger save and cancel functions", async () => {
    const onSaveHandlerSpy = vi.fn();
    const onCancelHandlerSpy = vi.fn();
    const ExampleModal = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { onClick: () => setIsModalOpen(true), variant: "primary" }, "Click me"),
            React.createElement(Modal, { setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen, isConfirmModal: true, onConfirmHandler: onSaveHandlerSpy, onCancelHandler: onCancelHandlerSpy },
                React.createElement("h1", null, "Some content"))));
    };
    render(React.createElement(ExampleModal, null));
    const user = userEvent.setup();
    const modalContent = screen.queryByRole("heading", {
        level: 1,
        name: "Some content"
    });
    expect(modalContent).not.toBeInTheDocument();
    const openModalButton = screen.getByRole("button", { name: "Click me" });
    await user.click(openModalButton);
    screen.getByRole("heading", {
        level: 1,
        name: "Some content"
    });
    const saveButton = screen.getByRole("button", {
        name: "Save"
    });
    await user.click(saveButton);
    await user.click(openModalButton);
    const cancelButton = screen.getByRole("button", {
        name: "Cancel"
    });
    await user.click(cancelButton);
    expect(onSaveHandlerSpy).toHaveBeenCalledTimes(1);
    expect(onCancelHandlerSpy).toHaveBeenCalledTimes(1);
    await user.click(openModalButton);
    await user.click(screen.getByTestId("blackdrop"));
    expect(onCancelHandlerSpy).toHaveBeenCalledTimes(2);
});
