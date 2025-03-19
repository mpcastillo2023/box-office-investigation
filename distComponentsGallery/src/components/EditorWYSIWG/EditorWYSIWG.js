import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Styles/styles.scss";
import styles from "./Styles/styles.module.scss";
import { Modal } from "..";
import editorFormats from "./Utils/editorFormats";
import UseEditorWYSIWG from "./Hooks/UseEditorWYSIWG";
import LinkEditorModal from "./Modal/LinkEditorModal";
/**
 * EditorWYSIWG is a rich-text editor component built on top of ReactQuill.
 * It provides a What You See Is What You Get (WYSIWYG) interface for editing HTML content.
 * The component includes standard text formatting options along with custom modal features for editing code and links.
 * It allows integration with custom onChange handlers, and can be enabled or disabled according to need.
 *
 * @param {Props} props - Props for the EditorWYSIWG component.
 * @returns {JSX.Element | null}
 */
const EditorWYSIWG = (props) => {
    const { disabled } = props;
    const { modules, editorValue, handleChange, setIsCodeModalOpen, isCodeModalOpen, setEditorValue, rawValue, rawOnChangeHandler, editorRef, setIsLinkModalOpen, isLinkModalOpen, isInView } = UseEditorWYSIWG(props);
    if (!modules)
        return null;
    let customCssClassses = "";
    if (props.customFormatsHandler)
        customCssClassses += " noEdit";
    return (React.createElement("div", { className: `editor ${customCssClassses} ${isInView?.isNeartoTop ? "dropdown-down" : "dropdown-up"} ${disabled ? "disabled" : null}`, style: {
            opacity: disabled ? "0.7" : 1
        } },
        React.createElement(ReactQuill, { onChange: handleChange, value: props.value ? props.value : editorValue, modules: modules, formats: editorFormats, bounds: ".editor", readOnly: disabled, ref: (el) => {
                editorRef.current = el;
            } }),
        React.createElement(Modal, { setIsModalOpen: setIsCodeModalOpen, isModalOpen: isCodeModalOpen, isConfirmModal: !disabled, onConfirmHandler: () => {
                if (props.onChange) {
                    props.onChange(rawValue);
                }
                else {
                    setEditorValue(rawValue);
                }
                setIsCodeModalOpen(false);
            }, onCancelHandler: () => {
                setIsCodeModalOpen(false);
            } },
            React.createElement("textarea", { "aria-label": "raw-editor", onChange: rawOnChangeHandler, value: rawValue, className: styles.modalTextArea, disabled: disabled })),
        React.createElement(LinkEditorModal, { editorRef: editorRef, isModalOpen: isLinkModalOpen, setIsModalOpen: setIsLinkModalOpen })));
};
export default EditorWYSIWG;
