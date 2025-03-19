import { useEffect, useState } from "react";
export default function UseDropdownMultipleSelect({ value, optionList, onChange }) {
    const [selectedOptionsState, setSelectedOptions] = useState([]);
    const selectedOptionsValue = value
        ? value
        : selectedOptionsState.map((option) => option.optionValue);
    const selectedOptions = value
        ? optionList.filter((option) => selectedOptionsValue.includes(option.optionValue))
        : selectedOptionsState;
    useEffect(() => {
        const options = optionList.filter((option) => selectedOptionsValue.includes(option.optionValue));
        setSelectedOptions(options);
    }, [value, optionList]);
    const onClickOptionHandler = (newValue) => {
        const isValueSelected = selectedOptionsValue.includes(newValue);
        const newOption = optionList.find((option) => newValue === option.optionValue);
        if (newOption) {
            const newOptions = isValueSelected
                ? selectedOptions.filter((selectedOption) => selectedOption.optionValue !== newValue)
                : [...selectedOptions, newOption];
            if (onChange) {
                onChange(newOptions);
            }
            else {
                setSelectedOptions(newOptions);
            }
        }
    };
    const onClickAllOptionsHandler = () => {
        const newOptions = [...optionList];
        if (selectedOptions.length === newOptions.length) {
            if (onChange) {
                onChange([]);
            }
            else {
                setSelectedOptions([]);
            }
        }
        else {
            if (onChange) {
                onChange(newOptions);
            }
            else {
                setSelectedOptions(newOptions);
            }
        }
    };
    return {
        selectedOptions,
        onClickOptionHandler,
        selectedOptionsValue,
        onClickAllOptionsHandler
    };
}
