import React from "react";
import { CustomStyleClasses, TransferlistItemColumns } from "./Types/Types";
type Props = {
    /**
     * Callback function that returns the columns after a transfer operation.
     * @param {(columns: TransferlistItemColumns) => void}
     */
    onChange: (columns: TransferlistItemColumns) => void;
    /**
     * Title for the left column.
     * @param {string}
     */
    leftColumnTitle?: string;
    /**
     * Title for the right column.
     * @param {string}
     */
    rightColumnTitle?: string;
    /**
     * If true, disables the entire component.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * If true, only the right column will be displayed.
     * @param {boolean}
     */
    showOnlyRightColumn?: boolean;
    /**
     * Default columns to display.
     * @param {TransferlistItemColumns}
     */
    defaultColumns?: TransferlistItemColumns;
    /**
     * Default columns to display.
     * @param {TransferlistItemColumns}
     */
    value?: TransferlistItemColumns;
    /**
     * If true, shows checkboxes for selective item movement.
     * @param {boolean}
     */
    hasCheckbox?: boolean;
    /**
     * Placeholder text for the search input.
     * @param {string}
     */
    searchPlaceholder?: string;
    /**
     * Text for the "Add all" button.
     * @param {string}
     */
    addAllButtonText?: string;
    /**
     * Text for the "Remove all" button.
     * @param {string}
     */
    removeAllButtonText?: string;
    /**
     * An array of disabled columns. Can include "leftColumn" or "rightColumn".
     * @param {("leftColumn" | "rightColumn")[]}
     */
    disabledColumns?: ("leftColumn" | "rightColumn")[];
    /**
     * An object with classnames that overwrites basic classnames.
     * @param {CustomStyleClasses}
     */
    customStyle?: CustomStyleClasses;
};
/**
 * Transferlist component allows users to move items between two lists, known as leftColumn and rightColumn.
 * You can enable checkboxes for selective movement of items or buttons for moving all items at once.
 * You can also provide optional titles for the columns, control the disabled state, and more.
 *
 * @param {Props} props - Props for the Transferlist component.
 * @returns {JSX.Element}
 */
declare const Transferlist: ({ onChange, leftColumnTitle, rightColumnTitle, disabled, showOnlyRightColumn, defaultColumns, hasCheckbox, searchPlaceholder, addAllButtonText, removeAllButtonText, disabledColumns, value, customStyle }: Props) => React.JSX.Element;
export default Transferlist;
