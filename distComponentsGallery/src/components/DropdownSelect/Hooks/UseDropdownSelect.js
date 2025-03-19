import { useEffect, useMemo, useState } from "react";
import findOption from "../Utils/findOption";
export default function UseDropdownSelect({ optionList, value, onChange, setIsOpen }) {
    const defaultOption = useMemo(() => findOption(optionList, value), []);
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    useEffect(() => {
        const newOption = findOption(optionList, value);
        setSelectedOption(newOption);
    }, [value, optionList]);
    const onClickOptionHandler = (optionValue) => {
        const newOption = findOption(optionList, optionValue);
        if (newOption) {
            if (onChange) {
                onChange(newOption);
            }
            else {
                setSelectedOption(newOption);
            }
            setIsOpen(false);
        }
    };
    return {
        onClickOptionHandler,
        selectedOption
    };
}
