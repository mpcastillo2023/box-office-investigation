import { DropdownSelect, Modal, TextInput } from "@cg-components/index";
import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";
export default function LinkEditorModal({ editorRef, setIsModalOpen, isModalOpen }) {
    const [title, setTitle] = useState("");
    const [href, setHref] = useState("");
    const [text, setText] = useState("");
    const [isBlank, setIsBlank] = useState(false);
    const quill = editorRef.current !== null ? editorRef.current.getEditor() : null;
    if (!quill)
        return null;
    return (React.createElement(Modal, { setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen, isConfirmModal: true, 
        // eslint-disable-next-line react/jsx-no-literals
        modalTitle: React.createElement("h1", { className: styles.modalTitle }, "Insert Link"), onConfirmHandler: () => {
            const index = (quill.getSelection() || {}).index || quill.getLength() - 1;
            quill.insertText(index, text, "link", {
                href,
                isBlank,
                title
            });
            setIsModalOpen(false);
        }, onCancelHandler: () => {
            setIsModalOpen(false);
        } },
        React.createElement("div", { className: styles.modalContainer },
            React.createElement(TextInput, { onChange: (e) => {
                    const text = e.target.value;
                    setText(text);
                }, value: text, placeholder: "Enter the text" }),
            React.createElement(TextInput, { onChange: (e) => {
                    const text = e.target.value;
                    setTitle(text);
                }, value: title, placeholder: "Enter the title" }),
            React.createElement(TextInput, { onChange: (e) => {
                    const text = e.target.value;
                    setHref(text);
                }, value: href, placeholder: "Enter the url" }),
            React.createElement(DropdownSelect, { onChange: (option) => {
                    const value = option.optionValue;
                    if (value === true || value === false) {
                        setIsBlank(value);
                    }
                }, value: isBlank, variant: "empty", size: "full", optionList: [
                    { optionText: "New window", optionValue: true },
                    { optionText: "Same window", optionValue: false }
                ] }))));
}
