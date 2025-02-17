import React, { ReactNode } from "react";
type Props<T> = {
    nextButtonText?: string | ReactNode;
    renderLastButton: (getValues: () => T, isValid: boolean, triggerCheck: (() => void) | null) => ReactNode | JSX.Element;
    previousButtonText?: string | ReactNode;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    numberOfSteps: number;
    isStepValid: boolean;
    triggerCheck: (() => void) | null;
};
export default function StepperButtons<T>({ nextButtonText, previousButtonText, renderLastButton, activeIndex, setActiveIndex, numberOfSteps, isStepValid, triggerCheck }: Props<T>): React.JSX.Element;
export {};
