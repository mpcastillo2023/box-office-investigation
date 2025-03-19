import React from "react";
import styles from "./Styles/styles.module.scss";
import UseTooltip from "./Hooks/UseTooltip";
/**
 * Tooltip component provides a tool tip that appears on hover over its children.
 * It supports various positions, and additional offset can be defined for the tooltip.
 * Custom styling classes can be applied as well.
 *
 * @param {TooltipProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props - Props for the Tooltip component.
 * @returns {JSX.Element}
 */
const Tooltip = (props) => {
    const { withSeparator = true, tooltipText } = props;
    const { handleHover, handleLeave, setHidden, parentRef, tooltipClasses, childRef, positionElement } = UseTooltip(props);
    return (React.createElement("div", { onMouseEnter: handleHover, onMouseLeave: handleLeave, onClick: () => setHidden(false), style: { position: "relative" }, ref: parentRef },
        props.tooltipToggle,
        React.createElement("div", { className: `${tooltipClasses}`, style: { position: "fixed", zIndex: 1000, ...positionElement }, ref: childRef, role: "tooltip" },
            withSeparator ? React.createElement("div", { className: styles.tooltipSeparator }) : null,
            React.createElement("div", { className: `${styles.tooltipText} ` }, tooltipText))));
};
export default Tooltip;
