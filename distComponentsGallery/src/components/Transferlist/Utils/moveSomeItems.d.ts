import { TransferlistItem, TransferlistItemColumns } from "../Types/Types";
declare function moveSomeItems(itemsToMove: TransferlistItem[], columns: TransferlistItemColumns, from: keyof TransferlistItemColumns, to: keyof TransferlistItemColumns): {
    leftColumn: TransferlistItem[];
    rightColumn: TransferlistItem[];
};
export default moveSomeItems;
