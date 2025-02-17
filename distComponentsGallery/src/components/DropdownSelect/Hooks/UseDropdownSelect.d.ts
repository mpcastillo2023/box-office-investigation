import { SelectOption } from "../Types/Types";
type Props = {
    value: string | number | boolean;
    optionList: SelectOption[];
    onChange?: (selectedOption: SelectOption) => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function UseDropdownSelect({ optionList, value, onChange, setIsOpen }: Props): {
    onClickOptionHandler: (optionValue: string | number | boolean) => void;
    selectedOption: SelectOption | undefined;
};
export {};
