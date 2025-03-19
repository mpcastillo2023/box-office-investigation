import React from "react";
import styles from "./Styles/styles.module.scss";
import { Button } from "@cg-components/Button";
import UseNumberInput from "./Hooks/UseNumberInput";
import ChevronUp from "@cg-icons/ControlArrowUp.svg";
import ChevronDown from "@cg-icons/ControlArrowDown.svg";
const blockInvalidChar = (e) => {
    return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
};
/**
 * NumberInput component is a controlled input component that allows users to increase or decrease numeric values using buttons.
 * It supports different variants, and additional properties such as title, subtitle, and error handling.
 *
 * @param {Props} props - Props for the NumberInput component.
 * @returns {JSX.Element}
 */
const NumberInput = function NumberInput({ textBeside, variant = "basic", isThereError = false, className, refCallback, onChange, customStyles, maxValue, ...props }) {
    const { handleDecrease, handleIncrease, onChangeHandler, elementRef, value } = UseNumberInput({
        value: props.value,
        refCallback,
        onChange,
        maxValue
    });
    const variantClass = variant ? styles[variant] : "";
    const errorClass = isThereError ? styles["inputError"] : "";
    const disabledClass = props.disabled ? styles.disabledInput : "";
    return (React.createElement("div", { className: `${variantClass} ${errorClass} ${className || ""} ${disabledClass} ${customStyles?.customNumberInputContainer}`, style: props.style },
        React.createElement("div", { className: `${styles.inputContainer} ${customStyles?.customInputContainer}` },
            textBeside ? (React.createElement("span", { className: styles.numberInputLabel }, textBeside)) : null,
            React.createElement("input", { ...props, placeholder: props.placeholder || "", role: "textbox", type: "number", onKeyDown: (e) => blockInvalidChar(e), value: value, onChange: onChangeHandler, ref: elementRef }),
            React.createElement("div", { className: styles.buttonsColumn },
                React.createElement(Button, { disabled: props.disabled, onMouseDown: handleIncrease, "aria-label": props["aria-label"]
                        ? `${props["aria-label"]}-increase-button`
                        : "" },
                    React.createElement(ChevronUp, null)),
                React.createElement(Button, { disabled: props.disabled, onMouseDown: handleDecrease, "aria-label": props["aria-label"]
                        ? `${props["aria-label"]}-decrease-button`
                        : "" },
                    React.createElement(ChevronDown, null))))));
};
export default NumberInput;
