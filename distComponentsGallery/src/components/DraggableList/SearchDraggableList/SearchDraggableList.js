import React, { useContext } from "react";
import { SearchInput } from "../../SearchInput";
import { DraggedContext } from "../Provider/DraggedProvider";
export default function SearchDraggableList() {
    const { listItems, setHighlightedIndex } = useContext(DraggedContext);
    const searchChangeHandler = (value) => {
        const searchInput = value;
        if (searchInput) {
            const foundItemsIndex = [];
            listItems.forEach((listItem, index) => {
                if (listItem.searchBy?.toLowerCase()?.includes(searchInput) ||
                    listItem.searchBy?.includes(searchInput)) {
                    foundItemsIndex.push(index);
                }
            });
            if (foundItemsIndex.length === 1) {
                setHighlightedIndex(foundItemsIndex[0]);
            }
            else {
                setHighlightedIndex(null);
            }
        }
    };
    return React.createElement(SearchInput, { onChange: searchChangeHandler });
}
