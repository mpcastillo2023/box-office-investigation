import React from "react";
import { Column, InputTableDataItem } from "./Types/Types";
import { customStyleClasses } from "@cg-components/BasicTable/Types/Types";
type Props = {
    customStyle?: customStyleClasses;
    /** An array of objects that contains the data to be displayed in the table's body. Each object in this array represents a row in the table, with key-value pairs corresponding to the columns defined in the columns prop. */
    data: InputTableDataItem[];
    /** An array of Column objects that defines the structure of the table. Each Column object includes details about individual columns, such as the title, key, and other potential properties related to rendering or behavior. */
    columns: Column[];
    /** On change callback **/
    onChange?: (newData: InputTableDataItem[]) => void;
    /** A boolean property that disables the table **/
    disabled?: boolean;
    /** A boolean property that display the texts and number inputs with a background to differentiate them **/
    withCellBackground?: boolean;
    /** A callback that checks if the item is valid or not **/
    isValidCellCallback?: (field: string, cellValue: string | number | boolean) => boolean | Promise<boolean>;
    numberFormatCallBack?: (value: number | string, rowIndex: number, colIndex: number) => string;
} & (WithoutActionColumnProps | WithActionColumnProps) & (WithSearchProps | WithoutSearchProps) & (WithRemoveAllButtonProps | WithoutRemoveAllButtonProps) & (WithHoverProps | WithoutHoverProps);
type WithSearchProps = {
    withSearch: true;
    searchPlaceholder?: string;
};
type WithRemoveAllButtonProps = {
    withRemoveAllButton: true;
    removeAllButtonText: string;
};
type WithoutRemoveAllButtonProps = {
    withRemoveAllButton?: false;
};
type WithoutSearchProps = {
    withSearch?: false;
};
type WithoutActionColumnProps = {
    /** Should display action column **/
    withActionColumn?: false;
};
type WithActionColumnProps = {
    /** Should display action column **/
    withActionColumn: true;
    /**  Action column text **/
    actionColumnText: string;
    /** A callback that returns a boolean, if the boolean is false the item cannot be saved **/
    isValidSaveCallback?: (newItem: InputTableDataItem) => boolean | Promise<boolean>;
};
type WithHoverProps = {
    /** Should handle hover **/
    withHover: true;
    /**  On mouseenter callback **/
    onMouseEnterCallback: (rowIndex: number, colIndex: number) => void;
    /**  On mouseleave callback **/
    onMouseLeaveCallback: (rowIndex: number, colIndex: number) => void;
};
type WithoutHoverProps = {
    /** Should handle hover **/
    withHover?: false;
};
/**
 * The InputTable component is a general-purpose table that displays inputs based on provided columns and displayData.
 * Ot allows you to see and edit multiple rows at the same time.
 * It can be used with actions that allow you to remove, edit a specific row and save it. You can also use it without actions and all cells will be simply displayed as inputs.
 *
 * @param {Props} props - Props for the InputTable component.
 * @returns {JSX.Element}
 */
export default function InputTable(props: Props): React.JSX.Element;
export {};
