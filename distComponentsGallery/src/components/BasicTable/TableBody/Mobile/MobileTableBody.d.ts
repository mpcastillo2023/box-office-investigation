import React from "react";
import { Column } from "../../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
};
export default function MobileTableBody({ columns, displayData }: Props): React.JSX.Element[] | undefined;
export {};
