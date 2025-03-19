import React from "react";
import DraggedContextProvider from "./Provider/DraggedProvider";
import List from "./List/List";
import SearchDraggableList from "./SearchDraggableList/SearchDraggableList";
/**
 * DraggableList component renders a list of draggable items that can be reordered.
 * It provides optional customization features like custom buttons for moving items, a drag icon,
 * a search bar for filtering items, and more. The component leverages `DraggedContextProvider`
 * to manage the drag-related behaviors and context.
 *
 * @param {Props} props - Props for the DraggableList component.
 * @returns {JSX.Element}
 */
export default function DraggableList({ list, moveToTopButton, moveToBottomButton, dragIcon, customStyle, onChangeSortingOrder, displaySearch = true, shouldDisplayKey = true, listMaxHeight }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(DraggedContextProvider, { list: list, moveToBottomButton: moveToBottomButton, moveToTopButton: moveToTopButton, dragIcon: dragIcon, customStyle: customStyle, onChangeSortingOrder: onChangeSortingOrder },
            React.createElement(React.Fragment, null,
                displaySearch ? (React.createElement("div", { className: customStyle?.searchInputContainer },
                    React.createElement(SearchDraggableList, null))) : null,
                React.createElement(List, { shouldDisplayKey: shouldDisplayKey, listMaxHeight: listMaxHeight })))));
}
