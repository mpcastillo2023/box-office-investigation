import React from "react";
import Checkbox from "@cg-components/Checkbox/Checkbox";
import styles from "../../Styles/styles.module.scss";
export default function AllOptionsItem({ onClickAllOptionsHandler, optionList, selectedOptions, selectAllOptionsText }) {
    const isActive = optionList.length === selectedOptions.length;
    return (React.createElement("li", { key: `all-options-option`, onClick: onClickAllOptionsHandler, className: `${styles.listItem} ${styles.selectAllOption}` },
        React.createElement(Checkbox, { value: isActive, onChange: onClickAllOptionsHandler, customStyles: styles, ariaLabel: `all-option` }),
        React.createElement("span", null, selectAllOptionsText)));
}
