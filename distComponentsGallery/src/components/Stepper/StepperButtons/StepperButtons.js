import React, { useContext } from "react";
import styles from "../Styles/styles.module.scss";
import { Button } from "@cg-components/Button";
import { DataStepperContext } from "../Provider/StepperProvider";
export default function StepperButtons({ nextButtonText = "Next", previousButtonText = "Back", renderLastButton, activeIndex, setActiveIndex, numberOfSteps, isStepValid, triggerCheck }) {
    const { getValuesRef, setDataInput, dataInput } = useContext(DataStepperContext);
    const scrollUp = () => {
        window.scrollTo(0, 0);
    };
    const nextStepHandler = () => {
        setDataInput((prevState) => {
            const currentValues = getValuesRef.current ? getValuesRef.current() : {};
            return {
                ...prevState,
                ...currentValues
            };
        });
        setActiveIndex((prevState) => {
            return prevState + 1;
        });
        scrollUp();
    };
    const prevStepHandler = () => {
        setActiveIndex((prevState) => {
            return prevState - 1;
        });
        scrollUp();
    };
    const onlyHasOneButtonClass = activeIndex === 0 ? styles.onlyOneButton : "";
    const getLastStepValue = () => {
        const currentValues = getValuesRef.current ? getValuesRef.current() : {};
        return {
            ...dataInput,
            ...currentValues
        };
    };
    const isLastStep = activeIndex === numberOfSteps - 1;
    return (React.createElement("div", { className: `${styles.buttonsContainer} ${onlyHasOneButtonClass}` },
        activeIndex > 0 ? (React.createElement(Button, { variant: "secondary", onClick: prevStepHandler }, previousButtonText)) : null,
        activeIndex < numberOfSteps - 1 ? (React.createElement("div", { style: {
                position: "relative"
            } },
            isStepValid ? null : (React.createElement("div", { className: styles.disabledCheck, onClick: () => {
                    if (triggerCheck)
                        triggerCheck();
                } })),
            React.createElement(Button, { variant: "primary", onClick: nextStepHandler, disabled: !isStepValid }, nextButtonText))) : null,
        isLastStep ? (React.createElement(React.Fragment, null, renderLastButton(getLastStepValue, isStepValid, triggerCheck))) : null));
}
