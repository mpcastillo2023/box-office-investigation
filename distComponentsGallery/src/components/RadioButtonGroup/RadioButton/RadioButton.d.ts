import React from "react";
import { RadioButtonOption } from "../Types/types";
type Props = {
    radioButtonOption: RadioButtonOption;
    isChecked: boolean;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | boolean | undefined>>;
    onChange?: (value: string | boolean) => void;
    disabled?: boolean;
    ariaLabel?: string;
    name: string;
};
export default function RadioButton({ radioButtonOption, isChecked, setSelectedOption, onChange, disabled, ariaLabel, name }: Props): React.JSX.Element;
export {};
