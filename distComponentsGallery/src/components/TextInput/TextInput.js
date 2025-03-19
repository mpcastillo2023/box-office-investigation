import React, { useEffect, useRef } from "react";
import styles from "./Styles/styles.module.scss";
/**
 * TextInput component provides a text input field with optional label and sublabel.
 * It supports a basic variant and error handling with customizable error text.
 * Additionally, it accepts a callback for handling a reference to the underlying input element.
 *
 * @param {Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">} props - Props for the TextInput component.
 * @returns {JSX.Element}
 */
const TextInput = function TextInput({ variant = "basic", isThereError = false, className, refCallback, ...props }) {
    const elementRef = useRef();
    useEffect(() => {
        if (refCallback && elementRef.current) {
            refCallback(elementRef.current);
        }
    }, [refCallback]);
    const variantClass = variant ? styles[variant] : "";
    const errorClass = isThereError ? styles["inputError"] : "";
    const disabledClass = props.disabled ? styles.disabledInput : "";
    return (React.createElement("div", { className: `${variantClass} ${errorClass} ${className || ""} ${disabledClass} ` },
        React.createElement("input", { ...props, role: "textbox", type: "text", ref: elementRef })));
};
export default TextInput;
