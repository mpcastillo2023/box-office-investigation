import React from "react";
import OptionItem from "./OptionItem/OptionItem";
import styles from "../Styles/styles.module.scss";
import AllOptionsItem from "./AllOptionsItem/AllOptionsItem";
export default function MultipleOptionList({ optionList, onClickOptionHandler, selectedOptions, selectedOptionsValue, onClickAllOptionsHandler, ariaLabel, ...props }) {
    const renderOptionList = () => {
        return optionList?.map((option) => {
            const isActive = selectedOptionsValue.includes(option.optionValue);
            return (React.createElement(OptionItem, { key: `${option.optionText}-${option.optionValue}-option`, option: option, onClickOptionHandler: onClickOptionHandler, isActive: isActive }));
        });
    };
    return (React.createElement("ul", { className: styles.optionList, role: "listbox", "aria-label": ariaLabel },
        renderOptionList(),
        props.withSelectAllOptions ? (React.createElement(AllOptionsItem, { optionList: optionList, selectedOptions: selectedOptions, onClickAllOptionsHandler: onClickAllOptionsHandler, selectAllOptionsText: props.selectAllOptionsText })) : null));
}
