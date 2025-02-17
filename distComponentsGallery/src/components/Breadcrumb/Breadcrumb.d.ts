import React from "react";
type Props = {
    /** A React element or a string to be used as a divider between the breadcrumb parts. This prop allows customization of the visual separation between each breadcrumb link.*/
    dividers?: React.ReactNode;
    /** Specifies the number of URL path segments to be removed from the start of the breadcrumb trail. This could be useful if certain parts of the URL are not meant to be displayed as part of the breadcrumbs. Defaults to 0 if not provided. */
    numberOfRemovedPaths?: number;
    /** An optional object that provides translation or customization of the text displayed in each breadcrumb part. The keys in this object represent the URL paths, and the corresponding values provide the translated or customized text.*/
    textTranslation?: Record<string, string>;
    /** An optional string to indicate if there is any id in the breadcrumb.*/
    id?: string;
};
/**
 * The Breadcrumb component is used to render a navigational breadcrumb trail based on the URL path.
 * It allows customization of dividers and text translations for each part of the breadcrumb trail.
 *
 * @param {Props} props - Props for the Breadcrumb component.
 * @returns {JSX.Element | null}
 */
export default function Breadcrumb({ numberOfRemovedPaths, dividers, textTranslation, id }: Props): React.JSX.Element | null;
export {};
