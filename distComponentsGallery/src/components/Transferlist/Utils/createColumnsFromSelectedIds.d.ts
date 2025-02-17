import { TransferlistItem, TransferlistItemColumns } from "../Types/Types";
declare function createColumnsFromSelectedIds(leftColumn: TransferlistItem[], rightColumnIds: (number | string)[]): TransferlistItemColumns;
export default createColumnsFromSelectedIds;
