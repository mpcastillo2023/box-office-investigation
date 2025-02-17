import React from "react";
type Props = {
    value?: string | number;
    refCallback: React.RefCallback<HTMLInputElement> | undefined;
    onChange?: ((value: string | number) => void) | undefined;
    maxValue: number | undefined;
};
export default function UseNumberInput({ value, refCallback, onChange, maxValue }: Props): {
    handleDecrease: () => void;
    handleIncrease: () => void;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    elementRef: React.MutableRefObject<HTMLInputElement | undefined>;
    value: string | number;
};
export {};
