import React from "react";
import { Column, customStyleClasses } from "./Types/Types";
type Props = {
    /** An array of objects that contains the data to be displayed in the table's body. Each object in this array represents a row in the table, with key-value pairs corresponding to the columns defined in the columns prop. */
    displayData?: object[];
    /** An array of Column objects that defines the structure of the table. Each Column object includes details about individual columns, such as the title, key, and other potential properties related to rendering or behavior. */
    columns: Column[];
    customStyle?: customStyleClasses;
    /**
     * The visual style variant of the table.
     * @param {"primary" | "secondary"}
     * @optional
     */
    variant?: "primary" | "secondary";
    onClickCellHandler?: (data: object) => void;
} & (WithHoverProps | WithoutHoverProps);
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
 * The BasicTable component is a general-purpose table that can display data based on provided columns and displayData.
 * It consists of a table header (`TableHeader`) and a table body (`TableBody`), structured according to the given columns and data.
 *
 * @param {Props} props - Props for the BasicTable component.
 * @returns {JSX.Element}
 */
export default function BasicTable(props: Props): React.JSX.Element;
export {};
