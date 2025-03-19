import Button from "../../Button/Button";
import React from "react";
import DownloadIcon from "@cg-icons/Download.svg";
import styles from "../Styles/styles.module.scss";
import Pagination from "./Pagination/Pagination";
import PageSize from "./RowsPerPage/RowsPerPage";
export default function TableFooter({ setQueryParams, rowsPerPage, currentPage, totalPages, totalItems, translations, initialPageIsZero, downloadCallBack }) {
    return (React.createElement("div", { className: styles.tableFooterContainer },
        downloadCallBack ? (React.createElement(Button, { variant: "empty", className: styles.downloadCsv, onClick: downloadCallBack },
            React.createElement(DownloadIcon, null),
            " ",
            translations.downloadCsvText)) : null,
        React.createElement("div", { className: styles.paginationUtils },
            React.createElement(PageSize, { setQueryParams: setQueryParams, rowsPerPage: rowsPerPage, translations: translations, initialPageIsZero: initialPageIsZero }),
            React.createElement(Pagination, { setQueryParams: setQueryParams, translations: translations, totalPages: totalPages, rowsPerPage: rowsPerPage, totalItems: totalItems, currentPage: currentPage, initialPageIsZero: initialPageIsZero }))));
}
