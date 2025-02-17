import { Column, InputTableDataItem } from "@cg-components/InputTable/Types/Types";
type Props = {
    columns: Column[];
    data: InputTableDataItem[];
    onChange?: (newData: InputTableDataItem[]) => void;
    isValidSaveCallback?: (newItem: InputTableDataItem) => boolean | Promise<boolean>;
};
export default function UseInputTable({ data, onChange, isValidSaveCallback }: Props): {
    onChangeCellHandler: (value: string | boolean | number, rowIndex: number, field: string | number) => void;
    onCancelHandler: (rowIndex: number) => void;
    onSaveHandler: (rowIndex: number) => Promise<void>;
    onEditHandler: (rowIndex: number) => void;
    onRemoveHandler: (rowIndex: number) => void;
    activeIndex: number | null;
    activeItem: InputTableDataItem | null;
    tableData: InputTableDataItem[];
    rows: InputTableDataItem[];
    hiddenIndexes: number[];
    onSearchChangeHandler: (query: string) => void;
    onRemoveAllHandler: () => void;
};
export {};
