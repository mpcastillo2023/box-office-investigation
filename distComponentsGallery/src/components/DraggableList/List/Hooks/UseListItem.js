import { useContext, useEffect, useRef, useState } from "react";
import { DraggedContext } from "../../Provider/DraggedProvider";
import { isItemNextToDragging } from "../Utils/isItemNextToDragging";
import { whereShouldItemMove } from "../Utils/whereShouldItemMove";
export default function UseListItem({ listItemIndex }) {
    const { setInitialDraggingItemPosition, setDraggingIndex, draggingIndex, setDraggedListItemRef, highlightedIndex, setMovingToIndex, movingToIndex, mousePosition, setInitialMousePosition, customStyle, dragIcon, moveToTopButton, moveToBottomButton, moveItemToTop, moveItemToBottom } = useContext(DraggedContext);
    const [itemPositionPreview, setItemPositionPreview] = useState(null);
    const listRef = useRef();
    const isBeingDragged = draggingIndex === listItemIndex;
    useEffect(() => {
        calculateIndexOfItem();
    }, [mousePosition]);
    useEffect(() => {
        calculateItemsPosition();
    }, [movingToIndex]);
    useEffect(() => {
        if (listRef.current && listItemIndex === highlightedIndex) {
            listRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        }
    }, [highlightedIndex]);
    const calculateIndexOfItem = () => {
        if (mousePosition === null && itemPositionPreview !== null) {
            setItemPositionPreview(null);
        }
        else if (mousePosition !== null && listRef.current) {
            const isItemNextToDraggingElement = isItemNextToDragging(movingToIndex, listItemIndex);
            const shouldItemMove = movingToIndex !== null &&
                !isBeingDragged &&
                isItemNextToDraggingElement;
            if (shouldItemMove) {
                const { shouldMoveUp, shouldMoveDown, elementAlreadyMoved } = whereShouldItemMove(listRef.current, mousePosition, listItemIndex, movingToIndex, itemPositionPreview);
                if (listItemIndex > movingToIndex) {
                    if (shouldMoveUp) {
                        setMovingToIndex(listItemIndex);
                    }
                }
                else if (listItemIndex < movingToIndex) {
                    if (shouldMoveDown) {
                        setMovingToIndex(listItemIndex);
                    }
                }
                else if (elementAlreadyMoved && itemPositionPreview !== null) {
                    const elementMovedDown = itemPositionPreview.clientY > 0;
                    if (elementMovedDown) {
                        if (shouldMoveUp) {
                            setItemPositionPreview(null);
                            setMovingToIndex(listItemIndex + 1);
                        }
                    }
                    else if (!elementMovedDown) {
                        if (shouldMoveDown) {
                            setItemPositionPreview(null);
                            setMovingToIndex(listItemIndex - 1);
                        }
                    }
                }
            }
        }
    };
    const calculateItemsPosition = () => {
        if (movingToIndex !== null &&
            draggingIndex !== null &&
            !isBeingDragged &&
            listRef.current) {
            const draggingElementIsMovingDown = movingToIndex < draggingIndex;
            if (draggingElementIsMovingDown) {
                const listItemShouldMove = movingToIndex <= listItemIndex && listItemIndex < draggingIndex;
                if (listItemShouldMove) {
                    setItemPositionPreview({
                        clientX: 0,
                        clientY: listRef.current.clientHeight
                    });
                }
            }
            else if (!draggingElementIsMovingDown) {
                const listItemShouldMove = movingToIndex >= listItemIndex && listItemIndex > draggingIndex;
                if (listItemShouldMove) {
                    setItemPositionPreview({
                        clientX: 0,
                        clientY: -Math.abs(listRef.current.clientHeight)
                    });
                }
            }
        }
    };
    const mouseDownHandler = (e) => {
        const clientRect = listRef?.current?.getBoundingClientRect();
        if (clientRect) {
            setInitialDraggingItemPosition({
                clientX: clientRect.x,
                clientY: clientRect.y
            });
            setInitialMousePosition({
                clientX: e.clientX,
                clientY: e.clientY
            });
            setDraggingIndex(listItemIndex);
            setDraggedListItemRef(listRef);
            setMovingToIndex(listItemIndex);
        }
    };
    return {
        mouseDownHandler,
        isBeingDragged,
        itemPositionPreview,
        listRef,
        customStyle,
        dragIcon,
        moveToTopButton,
        moveToBottomButton,
        moveItemToTop,
        moveItemToBottom,
        highlightedIndex
    };
}
