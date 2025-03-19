import React from "react";
import styles from "../Styles/styles.module.scss";
export default function RadioButton({ radioButtonOption, isChecked, setSelectedOption, onChange, disabled, ariaLabel, name }) {
    const stringifiedValue = typeof radioButtonOption.optionValue === "boolean"
        ? `${radioButtonOption.optionValue.toString()}`
        : radioButtonOption.optionValue;
    return (React.createElement("label", { className: styles.radioButton },
        React.createElement("span", null, radioButtonOption.optionText),
        React.createElement("input", { type: "radio", disabled: radioButtonOption.disabled || disabled, "aria-label": ariaLabel || stringifiedValue, value: stringifiedValue, id: stringifiedValue, checked: isChecked, "aria-disabled": disabled, name: name, onChange: () => {
                if (onChange) {
                    onChange(radioButtonOption.optionValue);
                }
                else {
                    setSelectedOption(radioButtonOption.optionValue);
                }
            } })));
}
