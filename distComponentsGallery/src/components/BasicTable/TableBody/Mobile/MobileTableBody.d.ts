import React from "react";
import { Column } from "../../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    onClickCellHandler?: (data: object) => void;
};
export default function MobileTableBody({ columns, displayData, onClickCellHandler }: Props): React.JSX.Element[] | undefined;
export {};
