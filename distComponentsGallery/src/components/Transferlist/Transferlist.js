import React from "react";
import UseCheckItems from "./Hooks/UseCheckItems";
import UseColumns from "./Hooks/UseColumns";
import UseSearch from "./Hooks/UseSearch";
import styles from "./Styles/styles.module.scss";
import { Button } from "..";
import TransferListColumn from "./TransferListColumn/TransferListColumn";
import KeyboardArrowRightIcon from "@cg-icons/KeyboardArrowRight.svg";
import KeyboardArrowLeftIcon from "@cg-icons/KeyboardArrowLeft.svg";
import TwoWayArrows from "@cg-icons/TwoWayArrows.svg";
/**
 * Transferlist component allows users to move items between two lists, known as leftColumn and rightColumn.
 * You can enable checkboxes for selective movement of items or buttons for moving all items at once.
 * You can also provide optional titles for the columns, control the disabled state, and more.
 *
 * @param {Props} props - Props for the Transferlist component.
 * @returns {JSX.Element}
 */
const Transferlist = ({ onChange, leftColumnTitle, rightColumnTitle, disabled = false, showOnlyRightColumn = false, defaultColumns, hasCheckbox = false, searchPlaceholder = "Search", addAllButtonText = "Add all", removeAllButtonText = "Remove all", disabledColumns = [], value, customStyle }) => {
    const { checkedItems, setCheckedItems, handleToggle } = UseCheckItems({
        disabled
    });
    const { moveCheckedItems, moveAllItemsFromTo, moveItem, columns } = UseColumns({
        checkedItems,
        setCheckedItems,
        onChange,
        defaultValue: defaultColumns,
        value,
        disabled
    });
    const { leftDisplay, rightDisplay, setLeftSearch, setRightSearch } = UseSearch({ columns });
    return (React.createElement("div", { className: `${styles.transferlistColumnsContainer} ${customStyle?.transferlistColumnsContainer || ""}` },
        showOnlyRightColumn ? null : (React.createElement("div", { className: `${styles.transferListColumn} ${customStyle?.transferListColumn || ""}` },
            React.createElement("h5", null, leftColumnTitle),
            React.createElement(TransferListColumn, { customStyle: customStyle, handleToggle: handleToggle, moveItem: moveItem, checkedItems: checkedItems["leftColumn"], columnKey: "leftColumn", items: columns["leftColumn"], displayItems: leftDisplay, disabled: disabled || disabledColumns.includes("leftColumn"), searchHandler: (value) => {
                    setLeftSearch(value);
                }, hasCheckbox: hasCheckbox, searchPlaceholder: searchPlaceholder }),
            !disabled ? (React.createElement("div", { className: styles.transferlistFooter },
                React.createElement(Button, { variant: "empty", className: styles.removeAddButton, onClick: () => moveAllItemsFromTo({
                        from: "leftColumn",
                        to: "rightColumn"
                    }), disabled: hasCheckbox
                        ? checkedItems["leftColumn"].length === 0 || disabled
                        : disabled || disabledColumns.includes("leftColumn"), "aria-label": "Add all items", color: "secondary" }, addAllButtonText))) : null)),
        !showOnlyRightColumn && hasCheckbox ? (React.createElement("div", { className: styles.buttonsColumn },
            React.createElement(Button, { variant: "secondary", onClick: () => moveCheckedItems({
                    from: "leftColumn",
                    to: "rightColumn"
                }), disabled: checkedItems["leftColumn"].length === 0 || disabled, "aria-label": "Move selected items to right column" },
                React.createElement(KeyboardArrowRightIcon, null)),
            React.createElement(Button, { variant: "secondary", onClick: () => moveCheckedItems({
                    from: "rightColumn",
                    to: "leftColumn"
                }), disabled: checkedItems["rightColumn"].length === 0 ||
                    disabled ||
                    disabledColumns.includes("rightColumn"), "aria-label": "Move selected items to left column" },
                React.createElement(KeyboardArrowLeftIcon, null)))) : null,
        !showOnlyRightColumn && !hasCheckbox ? (React.createElement("div", { className: styles.buttonsColumn },
            React.createElement(TwoWayArrows, null))) : null,
        React.createElement("div", { className: `${styles.transferListColumn} ${customStyle?.transferListColumn || ""}` },
            React.createElement("h5", null, rightColumnTitle),
            React.createElement(TransferListColumn, { customStyle: customStyle, handleToggle: handleToggle, checkedItems: checkedItems["rightColumn"], columnKey: "rightColumn", items: columns["rightColumn"], displayItems: rightDisplay, moveItem: moveItem, disabled: disabled || disabledColumns.includes("rightColumn"), searchHandler: (value) => {
                    setRightSearch(value);
                }, hasCheckbox: hasCheckbox, searchPlaceholder: searchPlaceholder }),
            !disabled ? (React.createElement("div", { className: styles.transferlistFooter },
                React.createElement(Button, { className: styles.removeAddButton, variant: "empty", onClick: () => moveAllItemsFromTo({
                        from: "rightColumn",
                        to: "leftColumn"
                    }), disabled: hasCheckbox
                        ? checkedItems["rightColumn"].length === 0 || disabled
                        : disabled || disabledColumns.includes("rightColumn"), "aria-label": "Remove all items" }, removeAllButtonText))) : null)));
};
export default Transferlist;
