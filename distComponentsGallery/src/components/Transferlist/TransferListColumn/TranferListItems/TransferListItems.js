import { Checkbox } from "@cg-components/index";
import React from "react";
import PlusCircle from "@cg-icons/PlusCircle.svg";
import XCircle from "@cg-icons/XCircle.svg";
import styles from "../../Styles/styles.module.scss";
export default function TransferListItems({ items, hasCheckbox, moveItem, handleToggle, columnKey, checkedItems, disabled, displayItems }) {
    const itemIcon = columnKey === "leftColumn" ? (React.createElement(PlusCircle, null)) : (React.createElement(XCircle, null));
    const onClickItemHandler = (item, columnKey, index) => {
        if (!disabled) {
            if (hasCheckbox) {
                handleToggle(item, columnKey);
            }
            else {
                if (columnKey === "leftColumn") {
                    moveItem({ from: columnKey, to: "rightColumn", index });
                }
                else {
                    moveItem({ from: columnKey, to: "leftColumn", index });
                }
            }
        }
    };
    return (React.createElement(React.Fragment, null, displayItems.map((item) => {
        const labelId = `transfer-list-item-${item.id}-label`;
        const realIndex = items.findIndex((realItem) => realItem.id === item.id);
        const checkedItem = checkedItems.find((checkedItem) => checkedItem.id === item.id);
        const checked = typeof checkedItem !== "undefined";
        return (React.createElement("li", { key: item.id, onClick: () => {
                if (!item.disabled) {
                    onClickItemHandler(item, columnKey, realIndex);
                }
            } },
            React.createElement("p", { className: styles.listItemText }, item.text),
            hasCheckbox ? (React.createElement(Checkbox, { value: checked, onChange: () => {
                    if (!item.disabled) {
                        onClickItemHandler(item, columnKey, realIndex);
                    }
                }, ariaLabel: labelId })) : item.disabled ? null : (itemIcon)));
    })));
}
