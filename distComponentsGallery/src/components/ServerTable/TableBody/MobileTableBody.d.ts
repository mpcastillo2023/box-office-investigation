import React from "react";
import { Column, Translations } from "../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    isFetching: boolean;
    translations: Translations;
    mobileAccordionColumnKey: string | number | symbol;
    tBodyRef: (node: Element | null) => void;
    onClickCellHandler?: (data: object) => void;
};
export default function MobileTableBody({ columns, displayData, translations, mobileAccordionColumnKey, tBodyRef, onClickCellHandler }: Props): React.JSX.Element;
export {};
