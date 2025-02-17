import React from "react";
import { Column } from "@cg-components/InputTable/Types/Types";
type Props = {
    columns: Column[];
    rowIndex: number;
    activeIndex: number | null;
    onCancelHandler: (rowIndex: number) => void;
    onEditHandler: (rowIndex: number) => void;
    onRemoveHandler: (rowIndex: number) => void;
    onSaveHandler: (rowIndex: number) => void;
    disabled: boolean;
    withCellBackground?: boolean;
};
export default function InputTableActions({ columns, rowIndex, activeIndex, onCancelHandler, onEditHandler, onRemoveHandler, onSaveHandler, disabled }: Props): React.JSX.Element;
export {};
