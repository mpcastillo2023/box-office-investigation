import { isNumber } from "@cg-utils";
import { useEffect, useRef, useState } from "react";
export default function UseNumberInput({ value = "", refCallback, onChange, maxValue }) {
    const elementRef = useRef();
    const [internalValue, setInternalValue] = useState(value);
    const onChangeCallback = onChange ? onChange : setInternalValue;
    useEffect(() => {
        if (refCallback && elementRef.current) {
            refCallback(elementRef.current);
        }
    }, [refCallback]);
    const handleIncrease = () => {
        if (isNumber(value) || isNumber(internalValue)) {
            if (onChange) {
                onChange(Number(value) + 1);
            }
            else {
                setInternalValue((prevState) => Number(prevState) + 1);
            }
        }
        else {
            onChangeCallback(1);
        }
    };
    const handleDecrease = () => {
        if (Number(value) <= 1)
            return;
        if (isNumber(value) || isNumber(internalValue)) {
            if (onChange) {
                onChange(Number(value) - 1);
            }
            else {
                setInternalValue((prevState) => Number(prevState) - 1);
            }
        }
        else {
            onChangeCallback(-1);
        }
    };
    const onChangeHandler = (e) => {
        const value = e.target.value;
        if (isNumber(value)) {
            const numericValue = Number(value);
            if (maxValue !== undefined && numericValue > maxValue) {
                onChangeCallback(maxValue);
            }
            else {
                onChangeCallback(numericValue);
            }
        }
        else {
            onChangeCallback("");
        }
    };
    const properValue = onChange ? value : internalValue;
    const correctValue = isNumber(properValue) && typeof properValue === "string"
        ? parseFloat(properValue)
        : properValue;
    return {
        handleDecrease,
        handleIncrease,
        onChangeHandler,
        elementRef,
        value: isNumber(correctValue) ? correctValue : ""
    };
}
