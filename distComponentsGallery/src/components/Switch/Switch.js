/* eslint-disable react/jsx-no-literals */
import React, { useEffect, useState } from "react";
import styles from "./Styles/styles.module.scss";
/**
 * Switch component provides a toggle button with customizable styles and behaviors.
 * It allows for displaying labels, sub-labels, and different icons for the checked and unchecked states.
 *
 * @param {Props} props - Props for the Switch component.
 * @returns {JSX.Element}
 */
export default function Switch({ value = false, handlerIconChecked, handlerIconUnchecked, onChange, customStyles, size = "medium", disabled = false, ariaLabel, textBeside }) {
    const [checked, setChecked] = useState(value);
    const activeIcon = checked ? handlerIconChecked : handlerIconUnchecked;
    const checkedSyles = checked ? styles.checked : styles.unchecked;
    const customCheckedStyles = checked
        ? customStyles?.checked
        : customStyles?.unchecked;
    const clickHandler = () => {
        if (!disabled) {
            if (onChange) {
                onChange(!checked);
            }
            else {
                setChecked((prevState) => {
                    return !prevState;
                });
            }
        }
    };
    useEffect(() => {
        setChecked(value);
    }, [value]);
    return (React.createElement("div", { className: `${styles.switchContainer} ${customStyles?.switchContainer || ""} ${styles[size]} ${disabled ? styles.disabled : ""}` },
        React.createElement("div", { className: `${styles.switchWrapper} ${customStyles?.switchWrapper}` },
            React.createElement("button", { className: `${styles.switchComponent} ${checkedSyles} ${customStyles?.switchComponent || ""} ${customCheckedStyles}`, onClick: clickHandler, role: "switch", "aria-checked": checked, "aria-label": ariaLabel, "aria-disabled": disabled, disabled: disabled },
                React.createElement("div", { className: `${styles.switchHandle} ${customStyles?.switchHandle || ""}` }, activeIcon)),
            textBeside !== null && (React.createElement("span", { className: `${customStyles?.textBeside || ""}${styles.textBeside}` }, textBeside)))));
}
