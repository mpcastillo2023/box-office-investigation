import { ColumnsWithIds, columnInfo, Item } from "../Types/Types";
declare function createColumnsFromIds(columnWithSelectedIds: ColumnsWithIds, data: Item[]): Record<string, columnInfo>;
export default createColumnsFromIds;
