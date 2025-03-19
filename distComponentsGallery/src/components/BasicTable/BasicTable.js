import React from "react";
import styles from "./Styles/styles.module.scss";
import TableHeader from "./TableHeader/TableHeader";
import UseIsDesktop from "@cg-hooks/UseIsDesktop";
import DesktopTableBody from "./TableBody/Desktop/DesktopTableBody";
import MobileTableBody from "./TableBody/Mobile/MobileTableBody";
/**
 * The BasicTable component is a general-purpose table that can display data based on provided columns and displayData.
 * It consists of a table header (`TableHeader`) and a table body (`TableBody`), structured according to the given columns and data.
 *
 * @param {Props} props - Props for the BasicTable component.
 * @returns {JSX.Element}
 */
export default function BasicTable(props) {
    const { columns, displayData, variant = "primary", customStyle } = props;
    const { isDesktop } = UseIsDesktop();
    return (React.createElement("div", { className: styles.serverTable },
        React.createElement("table", { className: styles.tableContent },
            isDesktop ? (React.createElement(TableHeader, { columns: columns, variant: variant, customStyle: customStyle })) : null,
            isDesktop ? (React.createElement(DesktopTableBody, { ...props, customStyle: customStyle, displayData: displayData })) : null),
        isDesktop ? null : (React.createElement("div", { className: styles.tableContent },
            React.createElement(MobileTableBody, { columns: columns, displayData: displayData })))));
}
