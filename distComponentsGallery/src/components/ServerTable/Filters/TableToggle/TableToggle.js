import Switch from "@cg-components/Switch/Switch";
import React from "react";
import styles from "../../Styles/styles.module.scss";
export default function TableToggle({ toggleFilter, queryParams, setQueryParams }) {
    const paramValue = queryParams[toggleFilter.queryParam];
    const toggleHasSpecificValue = typeof toggleFilter.activeToggleParamValue !== "undefined" &&
        typeof toggleFilter.inactiveToggleParamValue !== "undefined";
    const isSpecificValueActive = toggleHasSpecificValue
        ? paramValue === toggleFilter.activeToggleParamValue
        : false;
    const isBoolValueActive = typeof paramValue !== "boolean" ? false : paramValue;
    const isActive = toggleHasSpecificValue
        ? isSpecificValueActive
        : isBoolValueActive;
    return (React.createElement(React.Fragment, null,
        React.createElement(Switch, { value: toggleFilter.invertBool ? !isActive : isActive, textBeside: React.createElement("span", { className: styles.switchLabel }, toggleFilter.toggleText), size: "medium", onChange: () => {
                setQueryParams((prevState) => {
                    const toggleValue = prevState[toggleFilter.queryParam];
                    if (toggleHasSpecificValue) {
                        return {
                            ...prevState,
                            [toggleFilter.queryParam]: isSpecificValueActive
                                ? toggleFilter.inactiveToggleParamValue || ""
                                : toggleFilter.activeToggleParamValue || ""
                        };
                    }
                    else {
                        if (typeof toggleValue === "boolean" ||
                            typeof toggleValue === "undefined") {
                            return {
                                ...prevState,
                                [toggleFilter.queryParam]: !toggleValue
                            };
                        }
                        else {
                            return prevState;
                        }
                    }
                });
            } })));
}
