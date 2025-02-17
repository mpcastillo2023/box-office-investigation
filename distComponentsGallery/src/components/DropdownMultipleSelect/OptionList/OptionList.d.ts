import { SelectOption } from "../Types/Types";
import React from "react";
type Props = {
    optionList: SelectOption[];
    selectedOptions: SelectOption[];
    onClickOptionHandler: (newValue: string | number | boolean) => void;
    onClickAllOptionsHandler: () => void;
    selectedOptionsValue: (string | number | boolean)[];
    ariaLabel?: string;
} & (WithSelectAllOptions | WithoutSelectAllOptions);
type WithSelectAllOptions = {
    withSelectAllOptions: true;
    selectAllOptionsText: string;
};
type WithoutSelectAllOptions = {
    withSelectAllOptions?: false;
};
export default function MultipleOptionList({ optionList, onClickOptionHandler, selectedOptions, selectedOptionsValue, onClickAllOptionsHandler, ariaLabel, ...props }: Props): React.JSX.Element;
export {};
