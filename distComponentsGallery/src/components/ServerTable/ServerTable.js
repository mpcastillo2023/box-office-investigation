import React from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./Styles/styles.module.scss";
import Filters from "./Filters/Filters";
import TableHeader from "./TableHeader/TableHeader";
import TableFooter from "./TableFooter/TableFooter";
import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
import DesktopTableBody from "./TableBody/DesktopTableBody";
import MobileTableBody from "./TableBody/MobileTableBody";
import UseIsDesktop from "@cg-hooks/UseIsDesktop";
const defaultTranslations = {
    rowsPerPageText: "Rows per page",
    notFound: "Sorry, no matching records found",
    searchPlaceholder: "Search",
    downloadCsvText: "Export",
    showingResult: "Showing {startIndex} to {endIndex} of {totalItems} results"
};
/**
 * ServerTable component provides a data table that supports server-side pagination, filtering, and sorting.
 * It can handle fetching states, display customizable columns, support search functionality, and apply custom filters.
 * Additional translation support allows customization of certain text within the component.
 *
 * @template T
 * @param {Props} props - Props for the ServerTable component.
 * @returns {JSX.Element}
 */
const tagBorderPadding = 60;
export default function ServerTable({ totalPages, setQueryParams, isFetching, displayData, columns, page, rowsPerPage, hasSearch = false, filters, queryParams, translations = defaultTranslations, tagText, initialPageIsZero = false, totalItems, downloadCallBack, mobileAccordionColumnKey = "name" }) {
    const tHead = UseGetElementDimension();
    const tHeadRef = tHead.elementRef;
    const tHeadHeight = tHead.rect?.height || 0;
    const tBody = UseGetElementDimension();
    const tBodyRef = tBody.elementRef;
    const tBodyHeight = tBody.rect?.height || 0;
    const tableTag = UseGetElementDimension();
    const tableTagRef = tableTag.elementRef;
    const tableTagHeight = tableTag.rect?.height || 0;
    const isTagBiggerThanBody = tableTagHeight + tagBorderPadding > tBodyHeight;
    const { isDesktop } = UseIsDesktop();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.serverTable },
            React.createElement(Filters, { filters: filters, setQueryParams: setQueryParams, hasSearch: hasSearch, translations: translations, queryParams: queryParams }),
            React.createElement("div", { style: { position: "relative" } },
                React.createElement("div", { className: `${styles.tableContentContainer} ${isTagBiggerThanBody}`, style: {
                        minHeight: isTagBiggerThanBody
                            ? `${tHeadHeight + tableTagHeight + tagBorderPadding}px`
                            : ""
                    } },
                    isDesktop ? (React.createElement("table", { className: ` ${styles.tableContent} ` },
                        React.createElement(TableHeader, { columns: columns, queryParams: queryParams, setQueryParams: setQueryParams, tHeadRef: tHeadRef }),
                        !isFetching ? (React.createElement(DesktopTableBody, { tBodyRef: tBodyRef, isFetching: isFetching, columns: columns, displayData: displayData, translations: translations })) : null)) : (React.createElement(MobileTableBody, { tBodyRef: tBodyRef, isFetching: isFetching, columns: columns, displayData: displayData, translations: translations, mobileAccordionColumnKey: mobileAccordionColumnKey })),
                    isFetching ? React.createElement(Spinner, null) : null),
                tagText ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: styles.tableTag, ref: tableTagRef, style: {
                            top: tHeadHeight
                        } }, tagText),
                    React.createElement("div", { className: styles.tableTagBorder, style: {
                            minHeight: `calc(100% - ${tHeadHeight}px)`
                        } }))) : null)),
        React.createElement("div", { className: styles.footerContainer },
            React.createElement(TableFooter, { setQueryParams: setQueryParams, rowsPerPage: rowsPerPage, totalPages: totalPages, translations: translations, currentPage: page, totalItems: totalItems, initialPageIsZero: initialPageIsZero, downloadCallBack: downloadCallBack }))));
}
