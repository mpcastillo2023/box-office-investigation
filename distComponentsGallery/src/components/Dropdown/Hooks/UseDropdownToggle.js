import { useState, useEffect } from "react";
import { UseGetElementDimension } from "@cg-hooks";
export default function UseDropdownToggle({ icon, activeIcon, disabled, onDropdownToggle }) {
    const toggleElement = UseGetElementDimension();
    const toggleElementRect = toggleElement.rect;
    const toggleElementRef = toggleElement.elementRef;
    const [isOpen, setIsOpen] = useState(false);
    const currentIcon = isOpen && activeIcon ? activeIcon : icon;
    const [isOverflow, setIsOverflow] = useState(false);
    const toggleDropdownHandler = () => {
        if (!isOpen) {
            document.dispatchEvent(new CustomEvent("closeDropdowns"));
        }
        if (!disabled) {
            setIsOpen((prevState) => {
                return !prevState;
            });
        }
    };
    useEffect(() => {
        if (onDropdownToggle) {
            onDropdownToggle(isOpen);
        }
    }, [isOpen]);
    return {
        toggleElementRect,
        toggleElementRef,
        currentIcon,
        toggleDropdownHandler,
        isOpen,
        setIsOpen,
        isOverflow,
        setIsOverflow
    };
}
