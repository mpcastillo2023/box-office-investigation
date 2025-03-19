import { useEffect, useRef, useState } from "react";
import styles from "../Styles/styles.module.scss";
export default function UseTooltip({ className = "", position = "right" }) {
    const [hidden, setHidden] = useState(false);
    const parentRef = useRef(null);
    const childRef = useRef(null);
    const [positionElement, setPositionElement] = useState({});
    const calculateTooltipPosition = (tooltipParent, tooltip) => {
        const middlePositionX = tooltipParent.left + tooltipParent.width / 2 - tooltip.width / 2;
        const middlePositionY = tooltipParent.top + tooltipParent.height / 2 - tooltip.height / 2;
        if (position === "top") {
            return {
                top: tooltipParent.y - tooltip.height,
                left: middlePositionX
            };
        }
        else if (position === "right") {
            return {
                top: middlePositionY,
                left: tooltipParent.right
            };
        }
        else if (position === "bottom") {
            return {
                top: tooltipParent.y + tooltipParent.height,
                left: middlePositionX
            };
        }
        else {
            return {
                top: middlePositionY,
                left: tooltipParent.left - tooltip.width
            };
        }
    };
    useEffect(() => {
        const tooltipParent = parentRef.current?.getBoundingClientRect();
        const tooltip = childRef.current?.getBoundingClientRect();
        if (tooltipParent && tooltip) {
            setPositionElement(calculateTooltipPosition(tooltipParent, tooltip));
        }
    }, [hidden]);
    const handleHover = (e) => {
        if (e.type === "mouseenter")
            setHidden(true);
    };
    const handleLeave = (e) => {
        if (e.type === "mouseleave")
            setHidden(false);
    };
    const positionCssClasses = {
        top: styles.tooltipBoxTop,
        right: styles.tooltipBoxRight,
        left: styles.tooltipBoxLeft,
        bottom: styles.tooltipBoxBottom
    };
    const displayClass = hidden ? styles.show : styles.hide;
    const tooltipClasses = ` ${className} ${positionCssClasses[position]}  ${styles.tooltipBox} ${displayClass}`;
    return {
        handleHover,
        handleLeave,
        setHidden,
        parentRef,
        tooltipClasses,
        childRef,
        positionElement
    };
}
