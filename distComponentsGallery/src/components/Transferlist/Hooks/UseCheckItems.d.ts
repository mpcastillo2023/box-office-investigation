import { TransferlistItemColumns, TransferlistItem } from "../Types/Types";
type Props = {
    disabled: boolean;
};
export default function UseCheckItems({ disabled }: Props): {
    checkedItems: TransferlistItemColumns;
    setCheckedItems: import("react").Dispatch<import("react").SetStateAction<TransferlistItemColumns>>;
    handleToggle: (checkedItem: TransferlistItem, columnKey: keyof TransferlistItemColumns) => void;
};
export {};
