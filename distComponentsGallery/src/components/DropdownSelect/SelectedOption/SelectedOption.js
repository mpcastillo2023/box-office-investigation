import React from "react";
import styles from "../Styles/styles.module.scss";
export default function SelectedOption({ placeholder, selectedOptionText, customStyle }) {
    return (React.createElement(React.Fragment, null, placeholder ? (React.createElement("span", { className: `${customStyle?.placeholder || ""} ${styles.placeholder}` }, placeholder)) : (React.createElement("span", { className: customStyle?.selectedOption || !selectedOptionText
            ? styles.addPadding
            : "" }, selectedOptionText))));
}
