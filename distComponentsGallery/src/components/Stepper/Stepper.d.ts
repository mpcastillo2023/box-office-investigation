import React from "react";
import { StepItem, StepItemWithButtons } from "./Types/types";
type Props<T> = HasButtonProps<T> | NoButtonsProps;
type HasButtonProps<T> = {
    /**
     * Indicates whether the stepper should display next and previous buttons.
     * @param {boolean}
     */
    hasButtons: true;
    /**
     * Text or component for the "Next" button.
     * @param {string | React.ReactNode}
     */
    nextButtonText?: string | React.ReactNode;
    /**
     * Text or component for the "Previous" button.
     * @param {string | React.ReactNode}
     */
    previousButtonText?: string | React.ReactNode;
    renderLastButton: (getValues: () => T, isValid: boolean, triggerCheck: (() => void) | null) => React.ReactNode | JSX.Element;
    /**
     * Items defining each step in the stepper with associated render functions.
     * @param {StepItemWithButtons[]}
     */
    stepItems: StepItemWithButtons[];
    /**
     * Object storing the default data input.
     * @param {Record<string, unknown>}
     */
    defaultDataInput?: Record<string, unknown>;
};
type NoButtonsProps = {
    /**
     * Current active step number.
     * @param {number}
     */
    activeStep: number;
    /**
     * Indicates whether the stepper should display next and previous buttons.
     * @param {boolean}
     */
    hasButtons?: false;
    /**
     * Items defining each step in the stepper.
     * @param {StepItem[]}
     */
    stepItems: StepItem[];
};
/**
 * Stepper component provides a step-by-step process interface, allowing users to complete a task by going through multiple steps.
 * It can be customized with optional buttons for navigating through the steps.
 * This component can be used in various scenarios such as multi-step forms, wizards, or guided tours.
 *
 * @template T
 * @param {Props<T>} props - Props for the Stepper component.
 * @returns {JSX.Element | null}
 */
export default function Stepper<T>(props: Props<T>): React.JSX.Element | null;
export {};
