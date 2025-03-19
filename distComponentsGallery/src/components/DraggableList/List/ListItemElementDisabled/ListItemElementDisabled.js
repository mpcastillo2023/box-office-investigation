import React from "react";
import styles from "../Styles/styles.module.scss";
import UseListItem from "../Hooks/UseListItem";
export default function ListItemElementDisabled({ listItemIndex, children }) {
    const { customStyle } = UseListItem({
        listItemIndex
    });
    return (React.createElement("li", { role: "listitem", key: listItemIndex, className: `${styles.listItem} ${customStyle?.listItem || ""} `, style: { cursor: "no-drop" } },
        React.createElement("div", { className: `${styles.listItemContent} ${customStyle?.listItemContent || ""}` },
            React.createElement("div", { className: styles.listItemTextDisabled }, children))));
}
