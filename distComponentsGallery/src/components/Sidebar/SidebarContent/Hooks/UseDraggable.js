import { useEffect, useState } from "react";
import { sidebarWidthItem } from "../../../../const/localStorageItems";
export default function UseDraggable({ setCollapsed, collapsed, minWidth }) {
    const storedWidth = parseFloat(localStorage.getItem(sidebarWidthItem) || "");
    const initialWidth = !isNaN(storedWidth) ? storedWidth : null;
    const [width, setWidth] = useState(initialWidth);
    const [isDragging, setIsDragging] = useState(true);
    useEffect(() => {
        if (minWidth > 0) {
            if (collapsed) {
                setWidth(minWidth);
            }
            else {
                setWidth(null);
            }
        }
        else {
            if (collapsed) {
                setWidth(0);
            }
        }
    }, [collapsed]);
    const onDragHandler = (e, paddingLeft) => {
        if (isDragging && e.buttons === 1) {
            if (e.clientX !== 0) {
                if (e.clientX < 40) {
                    setCollapsed(true);
                    setIsDragging(false);
                }
                else {
                    if (e.clientX > 200) {
                        setWidth(e.clientX - paddingLeft);
                    }
                }
            }
        }
        else {
            setIsDragging(false);
            localStorage.setItem(sidebarWidthItem, JSON.stringify(width));
        }
    };
    const onDragStartHandler = () => {
        setIsDragging(true);
    };
    const onDragEndHandler = () => {
        setIsDragging(false);
        localStorage.setItem(sidebarWidthItem, JSON.stringify(width));
    };
    return {
        width,
        isDragging,
        onDragHandler,
        onDragEndHandler,
        onDragStartHandler
    };
}
