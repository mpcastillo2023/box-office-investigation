import Spinner from "@cg-components/Spinner/Spinner";
import React from "react";
import styles from "../Styles/styles.module.scss";
import QuickResultItem from "./ResultItem/QuickResultItem";
export default function QuickSearchResults(props) {
    const { data, isLoading, noResultsText, customStyles } = props;
    const renderResults = () => {
        return data?.map((item, index) => (React.createElement(QuickResultItem, { key: `${index}`, ...props, item: item, index: index })));
    };
    if (data?.length === 0 && !isLoading) {
        return (React.createElement("div", { className: `${styles.quickSearchResultsWrapper} ${customStyles?.customQuickSearchResultsWrapper || ""}` },
            React.createElement("p", { className: styles.result }, noResultsText)));
    }
    return (React.createElement(React.Fragment, null, isLoading ? (React.createElement(Spinner, null)) : data === undefined ? (React.createElement("div", { className: `${styles.quickSearchResultsWrapper} ${customStyles?.customQuickSearchResultsWrapper || ""}` },
        React.createElement("p", { className: styles.result }, noResultsText))) : (React.createElement("ul", { className: `${styles.quickSearchResultsWrapper} ${customStyles?.customQuickSearchResultsWrapper || ""}` }, renderResults()))));
}
