/* eslint-disable react/jsx-no-literals */
import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";
import StepperButtons from "./StepperButtons/StepperButtons";
import DataStepperProvider from "./Provider/StepperProvider";
import Check from "@cg-icons/Check.svg";
/**
 * Stepper component provides a step-by-step process interface, allowing users to complete a task by going through multiple steps.
 * It can be customized with optional buttons for navigating through the steps.
 * This component can be used in various scenarios such as multi-step forms, wizards, or guided tours.
 *
 * @template T
 * @param {Props<T>} props - Props for the Stepper component.
 * @returns {JSX.Element | null}
 */
export default function Stepper(props) {
    const { stepItems = [] } = props;
    const [isStepValid, setStepValid] = useState(false);
    const [triggerCheck, setTriggerCheck] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeStep = props.hasButtons ? activeIndex : props.activeStep;
    if (stepItems.length <= 0)
        return null;
    const renderComponents = () => {
        if (props.hasButtons) {
            const stepItem = stepItems[activeStep];
            return stepItem
                ? stepItem.renderComponent(setStepValid, setTriggerCheck)
                : null;
        }
        else {
            const stepItem = stepItems[activeStep];
            return stepItem ? stepItem.component : null;
        }
    };
    return (React.createElement("div", { className: styles.stepperWrapper },
        React.createElement("div", { className: styles.stepItemContainer, style: {
                justifyContent: stepItems.length < 3 ? "center" : "",
                margin: stepItems.length < 3 ? "4rem auto" : ""
            } }, stepItems.map((stepItem, index) => {
            const isLast = index === stepItems.length - 1;
            const isActive = index === activeStep;
            const isPassed = index < activeStep;
            const isActiveClass = isActive ? styles.isActive : "";
            const passedStepClass = isPassed ? styles.passedStep : "";
            const isLastClass = isLast ? styles.isLast : "";
            return (React.createElement(React.Fragment, { key: index },
                React.createElement("div", { className: `${isActiveClass} ${styles.stepItem} ${passedStepClass} ${isLastClass}` },
                    React.createElement("span", { className: styles.stepCount }, isPassed ? (React.createElement(Check, { className: styles.checkIcon })) : (index + 1)),
                    React.createElement("span", { className: styles.stepText }, stepItem.stepName))));
        })),
        React.createElement(DataStepperProvider, { ...props },
            React.createElement("div", { className: styles.stepperComponentsContainer }, renderComponents()),
            props.hasButtons ? (React.createElement(StepperButtons, { ...props, triggerCheck: triggerCheck, activeIndex: activeIndex, setActiveIndex: setActiveIndex, numberOfSteps: stepItems.length, isStepValid: isStepValid })) : null)));
}
