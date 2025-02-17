import React from "react";
import { customStyleClasses, ListItem } from "./Types/types";
type Props<T> = {
    /**
     * An array of `ListItem` objects representing the items in the list.
     */
    list: (ListItem & T)[];
    /**
     * A React node for a custom button to move selected items to the top of the list.
     * @optional
     */
    moveToTopButton?: React.ReactNode;
    /**
     * A React node for a custom button to move selected items to the bottom of the list.
     * @optional
     */
    moveToBottomButton?: React.ReactNode;
    /**
     * A React node for a custom icon to indicate an item's draggable status.
     * @optional
     */
    dragIcon?: React.ReactNode;
    /**
     * Flag to determine if a search bar should be displayed for filtering the list items.
     * @default true
     */
    displaySearch?: boolean;
    /**
     * An object containing custom CSS classes for styling the component.
     * @optional
     */
    customStyle?: customStyleClasses;
    /**
     * Callback function invoked when the sorting order of the list changes.
     * @param list - The updated list of `ListItem` objects.
     */
    onChangeSortingOrder: (list: (ListItem & T)[]) => void;
    /**
     * Flag to determine if a specific key within the `ListItem` objects should be displayed in the list.
     * @default true
     */
    shouldDisplayKey?: boolean;
    /**
     * The max height of the list, in case you want to limit it.
     * @optional
     */
    listMaxHeight?: React.CSSProperties["maxHeight"];
};
/**
 * DraggableList component renders a list of draggable items that can be reordered.
 * It provides optional customization features like custom buttons for moving items, a drag icon,
 * a search bar for filtering items, and more. The component leverages `DraggedContextProvider`
 * to manage the drag-related behaviors and context.
 *
 * @param {Props} props - Props for the DraggableList component.
 * @returns {JSX.Element}
 */
export default function DraggableList<T>({ list, moveToTopButton, moveToBottomButton, dragIcon, customStyle, onChangeSortingOrder, displaySearch, shouldDisplayKey, listMaxHeight }: Props<T>): React.JSX.Element;
export {};
