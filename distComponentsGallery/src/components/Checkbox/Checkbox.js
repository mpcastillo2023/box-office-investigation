import React from "react";
import Check from "@cg-icons/Check.svg";
import styles from "./Styles/styles.module.scss";
import UseCheckbox from "./Hooks/UseCheckbox";
/**
 * The Checkbox component renders a customizable checkbox input along with an optional label and sublabel.
 * It allows for different visual styles, sizes, and positions for the label, and provides support for a controlled
 * or uncontrolled checkbox state. The component also includes support for disabled state and accessibility attributes.
 *
 * @param {Props} props - Props for the Checkbox component.
 * @returns {JSX.Element}
 */
export default function Checkbox(props) {
    const { checked, variantStyles, checkedStyles, sizeStyles, disabledStyles, clickHandler, ariaLabel } = UseCheckbox(props);
    return (React.createElement("div", { className: `${props.textBeside ? styles.checkboxWrapper : ""} ${props.className} ${disabledStyles}
      ${props.customStyles?.customCheckboxWrapper || ""}
      `, onClick: clickHandler },
        React.createElement("div", { className: `${styles.checkboxContainer} ${props.customStyles?.customCheckboxContainer || ""}` },
            React.createElement("button", { role: "checkbox", "aria-label": ariaLabel, "aria-disabled": props.disabled, "aria-checked": checked, className: `${checkedStyles} ${styles.checkbox} ${props.customStyles?.customSize || sizeStyles} ${variantStyles} ${disabledStyles}`, disabled: props.disabled, onClick: (e) => e.preventDefault() }, checked ? React.createElement(Check, null) : null),
            props.textBeside ? (React.createElement("span", { className: disabledStyles, style: { flex: 1 } }, props.textBeside)) : null)));
}
