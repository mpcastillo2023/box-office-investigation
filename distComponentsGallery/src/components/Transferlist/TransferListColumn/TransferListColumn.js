import React from "react";
import styles from "../Styles/styles.module.scss";
import { SearchInput } from "@cg-components/SearchInput";
import TransferListItems from "./TranferListItems/TransferListItems";
export default function TransferListColumn({ items, columnKey, handleToggle, checkedItems, moveItem, searchHandler, disabled, hasCheckbox, searchPlaceholder, displayItems, customStyle }) {
    console.log(customStyle);
    return (React.createElement("div", { className: `${styles.columnContainer} ${customStyle?.columnContainer || ""}` },
        React.createElement(SearchInput, { className: styles.searchInput, onChange: searchHandler, disabled: disabled, iconPosition: "start", debounce: false, placeholder: searchPlaceholder }),
        React.createElement("ul", { className: `${styles.columnItems} ${customStyle?.columnItems || ""}`, "aria-label": columnKey },
            React.createElement(TransferListItems, { items: items, displayItems: displayItems, handleToggle: handleToggle, checkedItems: checkedItems, moveItem: moveItem, hasCheckbox: hasCheckbox, columnKey: columnKey, disabled: disabled }))));
}
