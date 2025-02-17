import { TransferlistItem, TransferlistItemColumns } from "@cg-components/Transferlist/Types/Types";
import React from "react";
type Props = {
    items: TransferlistItem[];
    displayItems: TransferlistItem[];
    hasCheckbox: boolean;
    moveItem: ({ from, to, index }: {
        from: keyof TransferlistItemColumns;
        to: keyof TransferlistItemColumns;
        index: number;
    }) => void;
    handleToggle: (checkedItem: TransferlistItem, columnKey: keyof TransferlistItemColumns) => void;
    columnKey: keyof TransferlistItemColumns;
    checkedItems: TransferlistItem[];
    disabled: boolean;
};
export default function TransferListItems({ items, hasCheckbox, moveItem, handleToggle, columnKey, checkedItems, disabled, displayItems }: Props): React.JSX.Element;
export {};
