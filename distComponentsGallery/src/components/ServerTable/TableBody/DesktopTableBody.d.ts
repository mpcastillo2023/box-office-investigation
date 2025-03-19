import React from "react";
import { Column, Translations } from "../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    isFetching: boolean;
    translations: Translations;
    tBodyRef: (node: Element | null) => void;
    onClickCellHandler?: (data: object) => void;
};
export default function DesktopTableBody({ columns, displayData, translations, tBodyRef, onClickCellHandler }: Props): React.JSX.Element;
export {};
