import UseUrlPathArray from "@cg-hooks/UseUrlPathArray";
import objectHasProperty from "@cg-utils/objectHasProperty";
import React from "react";
import BreadcrumbPart from "../BreadcrumbPart/BreadcrumbPart";
export default function UseBreadcrumb(numberOfRemovedPaths, dividers, textTranslation, id) {
    const { urlParts, removedParts } = UseUrlPathArray(numberOfRemovedPaths);
    const renderBreadCrumb = () => {
        let breadcrumbUrl = "";
        const removedUrls = removedParts.length > 0 ? `/${removedParts.join("/")}` : "";
        const indexOfId = id ? urlParts.indexOf(id) : null;
        return urlParts.map((url, index) => {
            breadcrumbUrl += index === 0 ? `${url}` : `/${url}`;
            const translationKey = index === indexOfId
                ? id
                : breadcrumbUrl.split(`/${id}/`).join("/");
            const text = textTranslation && objectHasProperty(textTranslation, translationKey)
                ? textTranslation[translationKey]
                : url;
            const isActive = index === urlParts.length - 1;
            return (React.createElement(BreadcrumbPart, { breadcrumbUrl: `${removedUrls}/${breadcrumbUrl}`, text: text, shouldRenderDivider: index > 0, dividers: dividers, key: `${removedUrls}/${breadcrumbUrl}`, isActive: isActive }));
        });
    };
    return { renderBreadCrumb, urlParts };
}
