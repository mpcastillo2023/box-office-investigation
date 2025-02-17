import React from "react";
type Props = {
    dividers?: React.ReactNode;
    breadcrumbUrl: string;
    text: string;
    shouldRenderDivider: boolean;
    isActive: boolean;
};
export default function BreadcrumbPart({ dividers, text, breadcrumbUrl, shouldRenderDivider, isActive }: Props): React.JSX.Element;
export {};
