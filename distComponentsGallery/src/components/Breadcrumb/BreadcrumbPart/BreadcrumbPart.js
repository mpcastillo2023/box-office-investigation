import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/styles.module.scss";
export default function BreadcrumbPart({ dividers, text, breadcrumbUrl, shouldRenderDivider, isActive }) {
    const isActiveLink = isActive ? styles.active : "";
    return (React.createElement(React.Fragment, null,
        shouldRenderDivider ? (React.createElement("div", { className: styles.breadcrumbDivider }, dividers)) : null,
        React.createElement(Link, { className: `${styles.breadcrumbLink} ${isActiveLink}`, to: `${breadcrumbUrl}` }, text)));
}
