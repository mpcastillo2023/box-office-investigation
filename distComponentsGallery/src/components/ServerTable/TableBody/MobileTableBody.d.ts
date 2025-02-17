import React from "react";
import { Column, Translations } from "../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    isFetching: boolean;
    translations: Translations;
    mobileAccordionColumnKey: string | number | symbol;
    tBodyRef: (node: Element | null) => void;
};
export default function MobileTableBody({ columns, displayData, translations, mobileAccordionColumnKey, tBodyRef }: Props): React.JSX.Element;
export {};
