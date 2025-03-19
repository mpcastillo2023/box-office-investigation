import UseGetElementDimension from "@cg-hooks/UseGetElementDimension";
import { useEffect, useState } from "react";
export default function UseDropdown({ isOpen, setIsOpen, customPosition, toggleElementRect, contentShouldCenter }) {
    const [position, setPosition] = useState({});
    const [maxHeight, setMaxHeight] = useState(null);
    const [isOverFlowAtBottom, setIsOverFlowAtBottom] = useState(false);
    const dropdownDimension = UseGetElementDimension();
    const [tooltipHandlePosition, setTooltipHandlePosition] = useState("");
    const calculateYPosition = (rectOfDropdown, rectOfToggleElement) => {
        let Yposition = {};
        const movedY = customPosition
            ? rectOfToggleElement.y + rectOfToggleElement.height + customPosition.top
            : rectOfToggleElement.y + rectOfToggleElement.height + 10;
        let YtooltipHandlePosition = "";
        const dropdownContentIsOverflowingAtBottom = rectOfDropdown.height + movedY > window.innerHeight;
        const dropdownContentIsOverflowingAtTop = rectOfDropdown.height > rectOfToggleElement.y;
        const isOverflownAtTopAndBottom = dropdownContentIsOverflowingAtBottom && dropdownContentIsOverflowingAtTop;
        if (dropdownContentIsOverflowingAtBottom) {
            setIsOverFlowAtBottom(true);
        }
        if (dropdownContentIsOverflowingAtBottom && !isOverflownAtTopAndBottom) {
            // Overflow at bottom render at top
            Yposition = {
                top: rectOfToggleElement.y - rectOfDropdown.height
            };
            YtooltipHandlePosition = "tooltip-top";
            setMaxHeight(null);
            setIsOverFlowAtBottom(true);
        }
        else if (!isOverflownAtTopAndBottom) {
            // No overflow render at bottom
            Yposition = {
                top: movedY
            };
            YtooltipHandlePosition = "tooltip-bottom";
            setMaxHeight(null);
            setIsOverFlowAtBottom(false);
        }
        else if (isOverflownAtTopAndBottom) {
            // Overflow at both top and bottom recalculate
            const overflowAtBottom = rectOfDropdown.height + movedY - window.innerHeight;
            const overflowAtTop = rectOfDropdown.height - rectOfToggleElement.y;
            if (overflowAtBottom > overflowAtTop) {
                Yposition = {
                    top: 10
                };
                YtooltipHandlePosition = "tooltip-top";
                setMaxHeight(rectOfToggleElement.y - 30);
            }
            else {
                Yposition = {
                    top: movedY
                };
                setMaxHeight(window.innerHeight * 0.8 - rectOfToggleElement.y);
                setIsOverFlowAtBottom(false);
                YtooltipHandlePosition = "tooltip-bottom";
            }
        }
        return {
            Yposition,
            YtooltipHandlePosition
        };
    };
    const calculateXPosition = (rectOfDropdown, rectOfToggleElement) => {
        let Xposition = {};
        const dropdownContentIsOverflowingAtRight = rectOfDropdown.width + rectOfToggleElement.x > window.innerWidth;
        let XtooltipHandlePosition = "";
        if (dropdownContentIsOverflowingAtRight) {
            Xposition = {
                left: rectOfToggleElement.x -
                    rectOfDropdown.width +
                    rectOfToggleElement.width
            };
            XtooltipHandlePosition += "-left";
        }
        else {
            if (contentShouldCenter) {
                let centerPosition = rectOfToggleElement.x +
                    rectOfToggleElement.width / 2 -
                    rectOfDropdown.width / 2;
                if (maxHeight)
                    centerPosition -= 2;
                Xposition = {
                    left: centerPosition
                };
                XtooltipHandlePosition += "-center";
            }
            else {
                Xposition = {
                    left: rectOfToggleElement.x
                };
                XtooltipHandlePosition += "-right";
            }
        }
        return {
            Xposition,
            XtooltipHandlePosition
        };
    };
    useEffect(() => {
        const calculateContentPosition = () => {
            if (toggleElementRect && isOpen && dropdownDimension.rect) {
                const rectOfDropdown = dropdownDimension.rect;
                const { Yposition, YtooltipHandlePosition } = calculateYPosition(rectOfDropdown, toggleElementRect);
                const { Xposition, XtooltipHandlePosition } = calculateXPosition(rectOfDropdown, toggleElementRect);
                const tooltipHandlePosition = YtooltipHandlePosition + XtooltipHandlePosition;
                setTooltipHandlePosition(tooltipHandlePosition);
                setPosition(() => {
                    return {
                        ...Xposition,
                        ...Yposition
                    };
                });
            }
        };
        calculateContentPosition();
        setIsOverFlowAtBottom(false);
    }, [isOpen, dropdownDimension.rect?.height]);
    useEffect(() => {
        document.addEventListener("closeDropdowns", () => setIsOpen(false));
        return () => {
            document.removeEventListener("closeDropdowns", () => setIsOpen(false));
        };
    }, []);
    return {
        dropdownContentRef: dropdownDimension.elementRef,
        position,
        maxHeight,
        tooltipHandlePosition,
        isOverflowToBottom: isOverFlowAtBottom
    };
}
