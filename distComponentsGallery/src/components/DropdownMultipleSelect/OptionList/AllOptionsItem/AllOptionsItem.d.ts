import React from "react";
import { SelectOption } from "@cg-components/DropdownMultipleSelect/Types/Types";
type Props = {
    onClickAllOptionsHandler: () => void;
    optionList: SelectOption[];
    selectedOptions: SelectOption[];
    selectAllOptionsText: string;
};
export default function AllOptionsItem({ onClickAllOptionsHandler, optionList, selectedOptions, selectAllOptionsText }: Props): React.JSX.Element;
export {};
