import React, { useState, createContext, useEffect } from "react";
import DragIcon from "@cg-icons/DragIcon.svg";
export const DraggedContext = createContext({});
const DraggedContextProvider = ({ list, moveToTopButton, moveToBottomButton, dragIcon = React.createElement(DragIcon, null), customStyle, onChangeSortingOrder, children }) => {
    const [listItems, setListItems] = useState(list);
    const [movingToIndex, setMovingToIndex] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState(null);
    const [initialMousePosition, setInitialMousePosition] = useState(null);
    const [initialDraggingItemPosition, setInitialDraggingItemPosition] = useState(null);
    const [draggedListItemRef, setDraggedListItemRef] = useState();
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const setInitialStateForListItem = () => {
        setMovingToIndex(null);
        setDraggingIndex(null);
        setMousePosition(null);
        setInitialMousePosition(null);
        setInitialDraggingItemPosition(null);
        setDraggedListItemRef(undefined);
    };
    useEffect(() => {
        if (listItems) {
            onChangeSortingOrder(listItems);
        }
    }, [listItems]);
    const setSortingOrder = (itemIndex, moveToIndex) => {
        const itemToMove = listItems[itemIndex];
        setListItems((prevListItems) => {
            const newListItems = [...prevListItems];
            newListItems.splice(itemIndex, 1);
            newListItems.splice(moveToIndex, 0, itemToMove);
            return newListItems;
        });
        setHighlightedIndex(null);
    };
    const setNewSortingOrder = () => {
        if (draggingIndex !== null && movingToIndex !== null) {
            setSortingOrder(draggingIndex, movingToIndex);
        }
    };
    const moveItemToBottom = (itemToMoveIndex) => {
        setSortingOrder(itemToMoveIndex, listItems.length - 1);
    };
    const moveItemToTop = (itemToMoveIndex) => {
        setSortingOrder(itemToMoveIndex, 0);
    };
    return (React.createElement(DraggedContext.Provider, { value: {
            setDraggedListItemRef,
            setMovingToIndex,
            movingToIndex,
            setInitialMousePosition,
            mousePosition,
            setInitialDraggingItemPosition,
            draggingIndex,
            setDraggingIndex,
            listItems,
            draggedListItemRef,
            initialDraggingItemPosition,
            setMousePosition,
            initialMousePosition,
            setNewSortingOrder,
            setInitialStateForListItem,
            moveItemToTop,
            moveItemToBottom,
            setListItems,
            highlightedIndex,
            moveToTopButton,
            moveToBottomButton,
            dragIcon,
            customStyle,
            onChangeSortingOrder,
            setHighlightedIndex
        } }, children));
};
export default DraggedContextProvider;
