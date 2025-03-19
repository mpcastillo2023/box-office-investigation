import React from "react";
import { Column, customStyleClasses } from "../../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    customStyle?: customStyleClasses;
    onMouseEnterCallback?: (rowIndex: number, colIndex: number) => void;
    onMouseLeaveCallback?: (rowIndex: number, colIndex: number) => void;
    onClickCellHandler?: (data: object) => void;
};
export default function DesktopTableBody({ columns, displayData, customStyle, onMouseEnterCallback, onMouseLeaveCallback, onClickCellHandler }: Props): React.JSX.Element;
export {};
