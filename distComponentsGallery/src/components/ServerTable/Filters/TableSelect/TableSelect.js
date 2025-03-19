import DropdownSelect from "@cg-components/DropdownSelect/DropdownSelect";
import React from "react";
import styles from "../../Styles/styles.module.scss";
export default function TableSelect({ selectFilter, queryParams, setQueryParams }) {
    const emptyOption = {
        optionText: selectFilter.emptyOptionText,
        optionValue: ""
    };
    const filterValue = queryParams[selectFilter.queryParam] !== ""
        ? queryParams[selectFilter.queryParam]
        : selectFilter.value;
    return (React.createElement(DropdownSelect, { optionList: [emptyOption, ...selectFilter.optionList], value: filterValue, placeholder: selectFilter.placeholder, customStyle: styles, onChange: (data) => {
            if (data.optionValue !== "") {
                setQueryParams((prevState) => {
                    return {
                        ...prevState,
                        [selectFilter.queryParam]: data.optionValue
                    };
                });
            }
            else {
                const newQueryParams = { ...queryParams };
                delete newQueryParams[selectFilter.queryParam];
                setQueryParams(newQueryParams);
            }
        } }));
}
