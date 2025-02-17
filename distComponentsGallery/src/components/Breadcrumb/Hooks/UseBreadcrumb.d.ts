import React from "react";
export default function UseBreadcrumb(numberOfRemovedPaths: number, dividers: string | number | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | null | undefined, textTranslation: object | undefined, id: string | undefined): {
    renderBreadCrumb: () => React.JSX.Element[];
    urlParts: string[];
};
