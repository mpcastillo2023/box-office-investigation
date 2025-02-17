import { TransferlistItemColumns } from "../Types/Types";
declare function moveAllItems(columns: TransferlistItemColumns, from: keyof TransferlistItemColumns, to: keyof TransferlistItemColumns): {
    leftColumn: import("../Types/Types").TransferlistItem[];
    rightColumn: import("../Types/Types").TransferlistItem[];
};
export default moveAllItems;
