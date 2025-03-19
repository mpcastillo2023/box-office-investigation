import React from "react";
import styles from "./Styles/styles.module.scss";
import TableHeader from "./TableHeader/TableHeader";
import UseInputTable from "./Hooks/UseInputTable";
import { SearchInput } from "@cg-components/SearchInput";
import { Button } from "..";
import Trash from "@cg-icons/Trash.svg";
import UseIsDesktop from "@cg-hooks/UseIsDesktop";
import DesktopTableBody from "./TableBody/Desktop/DesktopTableBody";
import MobileTableBody from "./TableBody/Mobile/MobileTableBody";
/**
 * The InputTable component is a general-purpose table that displays inputs based on provided columns and displayData.
 * Ot allows you to see and edit multiple rows at the same time.
 * It can be used with actions that allow you to remove, edit a specific row and save it. You can also use it without actions and all cells will be simply displayed as inputs.
 *
 * @param {Props} props - Props for the InputTable component.
 * @returns {JSX.Element}
 */
export default function InputTable(props) {
    const { disabled = false, customStyle } = props;
    const inputTableActions = UseInputTable(props);
    const { isDesktop } = UseIsDesktop();
    return (React.createElement("div", { className: styles.serverTable },
        props.withSearch ? (React.createElement(SearchInput, { className: styles.searchInput, iconPosition: "start", placeholder: props.searchPlaceholder, ariaLabel: "table-search", onChange: inputTableActions.onSearchChangeHandler })) : null,
        React.createElement("div", { className: styles.tableContentContainer },
            React.createElement("table", { className: styles.tableContent },
                isDesktop ? (React.createElement(TableHeader, { ...props, customStyle: customStyle })) : null,
                isDesktop ? (React.createElement(DesktopTableBody, { ...props, ...inputTableActions, displayData: inputTableActions.rows, disabled: disabled, customStyle: customStyle })) : (React.createElement(MobileTableBody, { ...props, ...inputTableActions, displayData: inputTableActions.rows, disabled: disabled })))),
        props.withRemoveAllButton ? (React.createElement(Button, { variant: "secondary", onClick: inputTableActions.onRemoveAllHandler, className: styles.removeAllButton },
            React.createElement(Trash, null),
            " ",
            props.removeAllButtonText)) : null));
}
