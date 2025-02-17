import React from "react";
import { columnInfo, customStyleClasses } from "./Types/Types";
type Props = {
    /**
     * An object defining the default columns information, where each key represents a unique column and its corresponding info.
     * @param {columnInfo[]}
     */
    defaultValue?: columnInfo[];
    /**
     * Optional custom styles for the component, defined according to the `customStyleClasses` type.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * A boolean to define whether the dragging functionality is disabled. Defaults to false.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * A boolean to define whether it should render buttons to remove or add all items. Defaults to false.
     * @param {boolean}
     */
    withButtons?: boolean;
} & (WithValueProps | null);
type WithValueProps = {
    /**
     * An object defining the columns information, where each key represents a unique column and its corresponding info.
     * @param {columnInfo[]}
     */
    value?: columnInfo[];
    /**
     * A callback function that receives the updated columns whenever a change occurs.
     * @param {(columns: columnInfo[]) => void}
     */
    onChange: (columns: columnInfo[]) => void;
};
/**
 * DraggableMultipleLists component allows the user to reorder multiple lists in a draggable fashion.
 * It accepts column configuration and provides state management for the draggable behavior.
 * This component works in two modes: With and Without State, determined by the presence of the `setColumns` prop.
 *
 * @param {Props} props - Props for the DraggableMultipleLists component.
 * @returns {JSX.Element}
 */
export default function DraggableMultipleLists({ customStyle, disabled, defaultValue, ...props }: Props): React.JSX.Element;
export {};
