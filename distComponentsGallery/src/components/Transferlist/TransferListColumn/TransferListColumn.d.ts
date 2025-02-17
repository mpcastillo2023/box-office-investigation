import React from "react";
import { CustomStyleClasses, TransferlistItem, TransferlistItemColumns } from "../Types/Types";
type Props = {
    handleToggle: (checkedItem: TransferlistItem, columnKey: keyof TransferlistItemColumns) => void;
    items: TransferlistItem[];
    displayItems: TransferlistItem[];
    columnKey: keyof TransferlistItemColumns;
    checkedItems: TransferlistItem[];
    moveItem: ({ from, to, index }: {
        from: keyof TransferlistItemColumns;
        to: keyof TransferlistItemColumns;
        index: number;
    }) => void;
    searchHandler?: (value: string) => void;
    disabled: boolean;
    hasCheckbox: boolean;
    searchPlaceholder: string;
    customStyle?: CustomStyleClasses;
};
export default function TransferListColumn({ items, columnKey, handleToggle, checkedItems, moveItem, searchHandler, disabled, hasCheckbox, searchPlaceholder, displayItems, customStyle }: Props): React.JSX.Element;
export {};
