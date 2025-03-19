import React from "react";
import { Column, CustomCssClasses, Translations } from "../Types/Types";
type Props = {
    columns: Column[];
    displayData?: object[];
    isFetching: boolean;
    translations: Translations;
    tBodyRef: (node: Element | null) => void;
    onClickCellHandler?: (data: object) => void;
    customStyles?: CustomCssClasses;
};
export default function DesktopTableBody({ columns, displayData, translations, tBodyRef, onClickCellHandler, customStyles }: Props): React.JSX.Element;
export {};
