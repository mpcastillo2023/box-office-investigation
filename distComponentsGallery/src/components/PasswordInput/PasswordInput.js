import React, { useEffect, useState } from "react";
import Eye from "@cg-icons/Eye.svg";
import EyeOff from "@cg-icons/EyeOff.svg";
import styles from "./Styles/styles.module.scss";
import { Button } from "..";
import { IconLock } from "./IconLock/IconLock";
import UsePasswordInput from "./Hooks/UsePasswordInput";
const PasswordInput = ({ label, subLabel, className, placeholder, errorText, isThereError, icon, togglePassword = true, direction, customStyles, ...props }) => {
    const { disabled, value, onChange } = props;
    const { handleToggle, inputType, onChangePassword, valuePassword } = UsePasswordInput({ props: { onChange } });
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
    return (React.createElement("div", { className: `${styles.passwordContainer} ${disabledStyles} ${className ? className : ""} ${rowStyles} ${customStyles?.customPasswordContainer || ""}` },
        React.createElement("div", { className: `${styles.labelContainer} ${disabledStyles} ${columnStyles} ${customStyles?.customLabelContainer || ""}` },
            label ? (React.createElement("label", { htmlFor: props.id, className: subLabel ? styles.titleWithSubTitle : styles.title }, label)) : null,
            subLabel ? React.createElement("span", { className: styles.subTitle }, subLabel) : null,
            errorText ? (direction === "row" ? (React.createElement("span", { className: styles.inputError }, errorText)) : null) : null),
        React.createElement("div", { className: `${styles.inputPassword} ${disabledStyles} ${errorClass} ${rowStyles} ${customStyles?.customInputPassword || ""}` },
            React.createElement("input", { ...props, disabled: disabled, id: props.id, placeholder: placeholder, type: inputType, "data-testid": "password-input", value: value || valuePassword, onChange: onChangePassword, readOnly: isReadOnly, onFocus: () => {
                    setIsReadOnly(false);
                } }),
            togglePassword ? (valuePassword !== "" || value !== "" ? (React.createElement(Button, { variant: "empty", onClick: handleToggle, onFocus: (e) => e.preventDefault(), tabIndex: -1, disabled: disabled, type: "button", className: styles.showPassword }, inputType === "password" ? React.createElement(Eye, null) : React.createElement(EyeOff, null))) : (React.createElement(IconLock, { icon: icon }))) : (React.createElement(IconLock, { icon: icon }))),
        direction !== "row" ? (errorText ? (React.createElement("span", { className: styles.inputError }, errorText)) : null) : null));
};
export default PasswordInput;
