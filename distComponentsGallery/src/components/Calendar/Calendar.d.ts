import React from "react";
import { CustomStyles } from "./Types/Types";
type Props = {
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    shouldRenderYearButtons?: boolean;
    customStyles?: CustomStyles;
} & (WithMultipleDatesProp | WithoutMultipleDatesProp);
type WithMultipleDatesProp = {
    withMultipleDate: true;
    onChange?: (date: Date[]) => void;
    value?: Date[];
};
type WithoutMultipleDatesProp = {
    withMultipleDate?: false;
    onChange?: (date: Date) => void;
    value?: Date;
};
export default function Calendar(props: Props): React.JSX.Element;
export {};
