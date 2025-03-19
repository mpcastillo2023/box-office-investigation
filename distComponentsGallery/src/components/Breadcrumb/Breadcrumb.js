import React from "react";
import styles from "./Styles/styles.module.scss";
import ChevronRight from "@cg-icons/ChevronRight.svg";
import UseBreadcrumb from "./Hooks/UseBreadcrumb";
/**
 * The Breadcrumb component is used to render a navigational breadcrumb trail based on the URL path.
 * It allows customization of dividers and text translations for each part of the breadcrumb trail.
 *
 * @param {Props} props - Props for the Breadcrumb component.
 * @returns {JSX.Element | null}
 */
export default function Breadcrumb({ numberOfRemovedPaths = 0, dividers = React.createElement(ChevronRight, null), textTranslation, id }) {
    const { renderBreadCrumb, urlParts } = UseBreadcrumb(numberOfRemovedPaths, dividers, textTranslation, id);
    if (urlParts.length === 1)
        return null;
    return React.createElement("div", { className: styles.breadcrumbContainer }, renderBreadCrumb());
}
