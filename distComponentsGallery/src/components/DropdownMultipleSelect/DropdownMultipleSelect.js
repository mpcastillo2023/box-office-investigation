import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import MultipleOptionList from "./OptionList/OptionList";
import ChevronUp from "@cg-icons/ChevronUp.svg";
import ChevronDown from "@cg-icons/ChevronDown.svg";
import UseDropdownMultipleSelect from "./Hooks/UseDropdownMultipleSelect";
import styles from "./Styles/styles.module.scss";
export default function DropdownMultipleSelect(props) {
    const { optionList, label, icon = React.createElement(ChevronDown, null), activeIcon = React.createElement(ChevronUp, null), onChange, value, customStyle, ariaLabel } = props;
    const { selectedOptions, onClickOptionHandler, selectedOptionsValue, onClickAllOptionsHandler } = UseDropdownMultipleSelect({
        value,
        optionList,
        onChange
    });
    return (React.createElement("div", { className: `${styles.multipleSelectItem} ${customStyle?.multipleSelectItem}` },
        React.createElement(Dropdown, { icon: icon, activeIcon: activeIcon, ariaLabel: ariaLabel, dropdownElement: label && React.createElement("label", null, label), dropdownContent: React.createElement(MultipleOptionList, { ...props, selectedOptionsValue: selectedOptionsValue, selectedOptions: selectedOptions, onClickOptionHandler: onClickOptionHandler, onClickAllOptionsHandler: onClickAllOptionsHandler, ariaLabel: ariaLabel }), autowidth: true, customStyle: customStyle ? customStyle : styles, customPosition: { top: 0, bottom: 0 } })));
}
