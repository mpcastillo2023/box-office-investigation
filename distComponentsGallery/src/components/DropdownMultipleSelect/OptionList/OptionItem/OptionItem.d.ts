import React from "react";
import { SelectOption } from "../../Types/Types";
type Props = {
    onClickOptionHandler: (newValue: string | number | boolean) => void;
    option: SelectOption;
    isActive: boolean;
};
export default function OptionItem({ onClickOptionHandler, option, isActive }: Props): React.JSX.Element;
export {};
