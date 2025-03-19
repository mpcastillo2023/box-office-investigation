import React, { useEffect, useState } from "react";
import Envelope from "@cg-icons/Envelope.svg";
import styles from "./Styles/styles.module.scss";
import UseEmailInput from "./Hooks/UseEmailInput";
const EmailInput = ({ label, subLabel, className, placeholder, errorText, isThereError, type = "email", icon, direction, ...props }) => {
    const { disabled, value } = props;
    const { emailValue, onChangeEmail } = UseEmailInput(props);
    const errorClass = isThereError ? styles["error"] : "";
    const rowStyles = direction === "row" ? styles.directionRow : "";
    const columnStyles = direction === "row" ? styles.directionColumn : "";
    const disabledStyles = disabled ? styles.disabled : "";
    const [isReadOnly, setIsReadOnly] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsReadOnly(false);
        }, 200);
    }, []);
    return (React.createElement("div", { className: `${styles.emailContainer} ${disabledStyles} ${className ? className : ""} ${rowStyles}` },
        React.createElement("div", { className: `${styles.labelContainer} ${disabledStyles} ${columnStyles}` },
            label ? (React.createElement("label", { htmlFor: props.id, className: subLabel ? styles.titleWithSubTitle : styles.title }, label)) : null,
            subLabel ? React.createElement("span", { className: styles.subTitle }, subLabel) : null,
            errorText ? (direction === "row" ? (React.createElement("span", { className: styles.inputError }, errorText)) : null) : null),
        React.createElement("div", { className: `${styles.inputEmail} ${disabledStyles} ${errorClass} ${rowStyles}` },
            React.createElement("input", { ...props, disabled: disabled, id: props.id, placeholder: placeholder, type: type, "data-testid": "email-input", value: value || emailValue, onChange: onChangeEmail, readOnly: isReadOnly, onFocus: () => {
                    setIsReadOnly(false);
                } }),
            React.createElement("span", null, icon ? icon : React.createElement(Envelope, null))),
        direction !== "row" ? (errorText ? (React.createElement("span", { className: styles.inputError }, errorText)) : null) : null));
};
export default EmailInput;
