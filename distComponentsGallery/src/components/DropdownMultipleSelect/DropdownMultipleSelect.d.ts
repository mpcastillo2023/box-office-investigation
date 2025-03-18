import React from "react";
import { SelectOption } from "./Types/Types";
import { customStyleClasses as DropdownCustomStyles } from "@cg-components/DropdownSelect/Types/Types";
import { CustomStyleClasses } from "./Types/Types";
type Props = {
    optionList: SelectOption[];
    label: React.ReactNode;
    icon?: React.ReactNode;
    activeIcon?: React.ReactNode;
    customStyle?: DropdownCustomStyles & CustomStyleClasses;
    /**
     * The currently selected values.
     * @param {(string | number | boolean)[]}
     */
    value?: (string | number | boolean)[];
    /**
     * Callback function to be called when an option is selected.
     * @param {(selectedOption: SelectOption[]) => void}
     */
    onChange?: (selectedOption: SelectOption[]) => void;
    withSelectAllOptions?: boolean;
    ariaLabel?: string;
} & (WithSelectAllOptions | WithoutSelectAllOptions);
type WithSelectAllOptions = {
    withSelectAllOptions: true;
    selectAllOptionsText: string;
};
type WithoutSelectAllOptions = {
    withSelectAllOptions?: false;
};
export default function DropdownMultipleSelect(props: Props): React.JSX.Element;
export {};
