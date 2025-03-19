import DropdownSelect from "@cg-components/DropdownSelect/DropdownSelect";
import React from "react";
import styles from "../../Styles/styles.module.scss";
export default function RowsPerPage({ setQueryParams, rowsPerPage, translations, initialPageIsZero }) {
    const pageSizeOptions = [5, 10, 15, 20];
    const optionList = pageSizeOptions.map((option) => {
        return {
            optionValue: option,
            optionText: option.toString()
        };
    });
    const firstPage = initialPageIsZero ? 0 : 1;
    return (React.createElement("div", { className: styles.rowsPerPageContainer },
        React.createElement("p", null, translations.rowsPerPageText),
        React.createElement(DropdownSelect, { optionList: optionList, variant: "empty", customStyle: styles, onChange: (value) => {
                const newValue = value.optionValue;
                setQueryParams((prevState) => {
                    return {
                        ...prevState,
                        size: newValue,
                        page: firstPage
                    };
                });
            }, value: rowsPerPage.toString() })));
}
