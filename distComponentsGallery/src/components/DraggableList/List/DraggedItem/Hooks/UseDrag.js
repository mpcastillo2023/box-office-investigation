import { useContext, useEffect, useRef, useState } from "react";
import { DraggedContext } from "../../../Provider/DraggedProvider";
export default function UseDrag({ listRef }) {
    const { setMousePosition, initialMousePosition, setNewSortingOrder, setInitialStateForListItem, initialDraggingItemPosition, draggedListItemRef, customStyle, dragIcon, movingToIndex } = useContext(DraggedContext);
    const [draggingItemPosition, setDraggingItemPosition] = useState(null);
    const [scrollDirection, setScrollDirection] = useState("none");
    const intervalIdRef = useRef(null);
    useEffect(() => {
        if (listRef.current) {
            const listElement = listRef.current;
            if (scrollDirection === "none") {
                if (intervalIdRef.current) {
                    clearInterval(intervalIdRef.current);
                }
            }
            else {
                const intervalId = setInterval(() => {
                    const currentScrollPosition = listElement.scrollTop;
                    if (scrollDirection === "up") {
                        listElement.scrollTo(0, currentScrollPosition - 5);
                    }
                    else if (scrollDirection === "down") {
                        listElement.scrollTo(0, currentScrollPosition + 5);
                    }
                }, 20);
                intervalIdRef.current = intervalId;
            }
        }
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [scrollDirection]);
    const mouseMoveHandler = (e) => {
        if (initialMousePosition !== null) {
            const clientY = e.clientY - initialMousePosition.clientY;
            const clientX = e.clientX - initialMousePosition.clientX;
            setDraggingItemPosition({
                clientX,
                clientY
            });
            setMousePosition({
                clientX: e.clientX,
                clientY: e.clientY
            });
            if (listRef.current) {
                const listRect = listRef.current.getBoundingClientRect();
                const topOfList = listRect.top;
                const bottomOfList = listRect.bottom;
                if (e.clientY <= topOfList) {
                    setScrollDirection("up");
                }
                else if (e.clientY >= bottomOfList) {
                    setScrollDirection("down");
                }
                else {
                    setScrollDirection("none");
                }
            }
        }
    };
    const mouseUpHandler = () => {
        setDraggingItemPosition(null);
        setInitialStateForListItem();
        setNewSortingOrder();
        setScrollDirection("none");
    };
    return {
        mouseUpHandler,
        mouseMoveHandler,
        draggingItemPosition,
        initialDraggingItemPosition,
        draggedListItemRef,
        customStyle,
        dragIcon,
        movingToIndex
    };
}
