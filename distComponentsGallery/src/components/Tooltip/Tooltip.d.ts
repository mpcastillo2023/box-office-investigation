import React, { ReactNode } from "react";
type Props = {
    /**
     * Position of the tooltip relative to its parent element.
     * Can be "top" | "right" | "bottom" | "left".
     * @param {"top" | "right" | "bottom" | "left"}
     */
    position: "top" | "right" | "bottom" | "left";
    /**
     * Content of the tooltip, can be a string or a ReactNode.
     * @param {string | ReactNode}
     */
    tooltipText: string | ReactNode;
    /**
     * Element that will trigger the tooltip on hover.
     * @param {ReactNode}
     */
    tooltipToggle?: ReactNode;
    /**
     * Custom styling classes for the tooltip.
     * @param {string}
     */
    className?: string;
    /**
     * Should render the separator of the tooltip
     * @param {boolean}
     */
    withSeparator?: boolean;
};
/**
 * Tooltip component provides a tool tip that appears on hover over its children.
 * It supports various positions, and additional offset can be defined for the tooltip.
 * Custom styling classes can be applied as well.
 *
 * @param {TooltipProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props - Props for the Tooltip component.
 * @returns {JSX.Element}
 */
declare const Tooltip: (props: Props) => React.JSX.Element;
export default Tooltip;
