/* eslint-disable react/jsx-no-literals */
import React from "react";
import PaginationItem from "./PaginationItem/PaginationItem";
import styles from "../../Styles/styles.module.scss";
import ArrowLeft from "@cg-icons/ArrowLeft.svg";
import DoubleArrowLeft from "@cg-icons/DoubleArrowLeft.svg";
import ArrowRight from "@cg-icons/ArrowRight.svg";
import DoubleArrowRight from "@cg-icons/DoubleArrowRight.svg";
import { Button } from "@cg-components/Button";
import { replacedViewResultText } from "./Utils/replaceViewResultText";
export default function Pagination({ setQueryParams, currentPage, totalPages, rowsPerPage, totalItems, initialPageIsZero, translations }) {
    const separator = "...";
    const initialPage = initialPageIsZero ? 0 : 1;
    const initialPageParsed = initialPageIsZero ? initialPage + 1 : initialPage;
    const currentPageParsed = initialPageIsZero ? currentPage + 1 : currentPage;
    const pagesLeft = Math.ceil(totalPages - currentPageParsed);
    const totalPagesParsed = initialPageIsZero ? totalPages - 1 : totalPages;
    const startIndex = (currentPageParsed - 1) * rowsPerPage + 1;
    const endIndex = Math.min(startIndex + rowsPerPage - 1, totalItems);
    const replacedViewResult = replacedViewResultText(translations.showingResult, startIndex, endIndex, totalItems);
    return (React.createElement("div", { className: styles.paginationContainer },
        React.createElement("div", { className: styles.pageInfo },
            React.createElement("span", null, replacedViewResult)),
        React.createElement("div", { className: styles.paginationSection },
            React.createElement("div", { className: styles.pageIcons },
                React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: initialPage, text: React.createElement(DoubleArrowLeft, null), disabled: currentPageParsed <= 1, ariaLabel: "first page" })),
            React.createElement("div", { className: styles.pageIcons },
                React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: currentPage - 1, text: React.createElement(ArrowLeft, null), disabled: currentPageParsed <= 1, ariaLabel: "previous page" }))),
        React.createElement("div", { className: styles.paginationSection },
            currentPageParsed > 2 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: initialPage, text: initialPageParsed })),
            currentPageParsed > 3 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: initialPage + 1, text: initialPageParsed + 1 })),
            currentPageParsed > 2 && (React.createElement("div", { className: styles.separator }, separator)),
            currentPageParsed > 1 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: currentPage - 1, text: currentPageParsed - 1 })),
            React.createElement(Button, { className: `${styles.paginationItem} ${styles.isActive}` }, currentPageParsed),
            pagesLeft > 0 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: currentPage + 1, text: currentPageParsed + 1 })),
            pagesLeft > 1 && React.createElement("div", { className: styles.separator }, separator),
            pagesLeft > 2 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: totalPagesParsed - 1, text: totalPages - 1 })),
            pagesLeft > 1 && (React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: totalPagesParsed, text: totalPages }))),
        React.createElement("div", { className: styles.paginationSection },
            React.createElement("div", { className: styles.pageIcons },
                React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: currentPage + 1, text: React.createElement(ArrowRight, null), disabled: currentPage >= totalPagesParsed, ariaLabel: "next page" })),
            React.createElement("div", { className: styles.pageIcons },
                React.createElement(PaginationItem, { setQueryParams: setQueryParams, page: totalPagesParsed, text: React.createElement(DoubleArrowRight, null), disabled: currentPage >= totalPagesParsed, ariaLabel: "last page" })))));
}
