import React from "react";
import styles from "../../../Styles/styles.module.scss";
import { Button } from "@cg-components/Button";
export default function PaginationItem({ page, setQueryParams, text = page, disabled = false, ariaLabel = "" }) {
    const disabledClass = disabled ? styles.isDisabled : "";
    return (React.createElement(Button, { className: `${styles.paginationItem} ${disabledClass}`, onClick: () => {
            if (!disabled) {
                setQueryParams((prevState) => {
                    return {
                        ...prevState,
                        page: page
                    };
                });
            }
        }, "aria-label": ariaLabel }, text));
}
