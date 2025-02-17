import React from "react";
import { customStyleClasses, SelectOption, Translations } from "../Types/Types";
type Props = {
    optionList: SelectOption[];
    onClickOptionHandler: (optionValue: string | number | boolean) => void;
    selectedOptionValue?: string | number | boolean;
    customStyle?: customStyleClasses;
    ariaLabel: string;
    currentFocusIndex: number;
    activeItemRef: React.MutableRefObject<HTMLElement | undefined>;
    withSubtitle: boolean;
    translations: Translations;
};
export default function OptionList({ optionList, onClickOptionHandler, selectedOptionValue, customStyle, ariaLabel, currentFocusIndex, activeItemRef, withSubtitle, translations }: Props): React.JSX.Element;
export {};
