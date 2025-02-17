import React from "react";
type Props = {
    min?: number;
    max?: number;
    value?: number;
    onChange?: (sliderValue: number) => void;
    disabled?: boolean;
};
export declare const buttonHalfWidth = 10;
export default function Slider({ min, max, value, onChange, disabled }: Props): React.JSX.Element;
export {};
