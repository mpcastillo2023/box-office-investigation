import React from "react";
import { customStyleClasses } from "../Types/Types";
type Props = {
    placeholder?: string;
    selectedOptionText: string | React.ReactNode;
    customStyle?: customStyleClasses;
};
export default function SelectedOption({ placeholder, selectedOptionText, customStyle }: Props): React.JSX.Element;
export {};
