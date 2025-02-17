import React from "react";
type Props = {
    /**
     * Children nodes within the portal, to be rendered outside the parent component's DOM hierarchy.
     * @param {React.ReactNode}
     */
    children?: React.ReactNode;
    /**
     * Optional class names for the created HTML element.
     * @param {string}
     */
    className?: string;
    /**
     * HTML tag name for the created element. Defaults to "div".
     * @param {string}
     */
    element?: string;
    /**
     * Optional role attribute for the created HTML element.
     * @param {string}
     */
    role?: string;
    /**
     * If true, the created element will be appended to the target selector. If false, it will be prepended. Defaults to true.
     * @param {boolean}
     */
    append?: boolean;
    /**
     * The CSS selector of the target element to which the created element will be appended or prepended. Defaults to "body".
     * @param {string}
     */
    target?: string;
};
/**
 * Portal component provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * It can create an HTML element and append or prepend it to the target selector with optional class names and roles.
 *
 * @param {Props} props - Props for the Portal component.
 * @returns {React.ReactPortal}
 */
export declare const Portal: ({ children, className, element, role, append, target }: Props) => React.ReactPortal;
export {};
