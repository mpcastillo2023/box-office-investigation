import { SelectOption } from "../Types/Types";
type Props = {
    value?: (string | number | boolean)[];
    optionList: SelectOption[];
    onChange?: (selectedOption: SelectOption[]) => void;
};
export default function UseDropdownMultipleSelect({ value, optionList, onChange }: Props): {
    selectedOptions: SelectOption[];
    onClickOptionHandler: (newValue: string | number | boolean) => void;
    selectedOptionsValue: (string | number | boolean)[];
    onClickAllOptionsHandler: () => void;
};
export {};
