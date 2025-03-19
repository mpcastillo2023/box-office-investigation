import React from "react";
import Checkbox from "@cg-components/Checkbox/Checkbox";
import styles from "../../Styles/styles.module.scss";
export default function OptionItem({ onClickOptionHandler, option, isActive }) {
    return (React.createElement("li", { key: `${option.optionText}-${option.optionValue}-option`, onClick: () => onClickOptionHandler(option.optionValue), className: styles.listItem, role: "option", "aria-label": `${option.optionText}-option` },
        React.createElement(Checkbox, { value: isActive, onChange: () => {
                onClickOptionHandler(option.optionValue);
            }, customStyles: styles, ariaLabel: `${option.optionText}-checkbox` }),
        React.createElement("span", null, option.optionText)));
}
