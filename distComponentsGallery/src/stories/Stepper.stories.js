/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-no-literals */
import React, { useContext, useEffect, useState } from "react";
import { Button, NumberInput, Stepper, TextInput } from "../components";
import { DataStepperContext } from "@cg-components/Stepper/Provider/StepperProvider";
const Identity = ({ setStepValid }) => {
    const { getValuesRef, dataInput } = useContext(DataStepperContext);
    const savedName = dataInput?.name || "";
    const [name, setName] = useState(savedName);
    getValuesRef.current = () => {
        return { name };
    };
    useEffect(() => {
        if (name.length > 0 && typeof name === "string") {
            setStepValid(true);
        }
        else {
            setStepValid(false);
        }
    }, [name]);
    useEffect(() => {
        if (savedName.length > 0 && typeof savedName === "string") {
            setStepValid(true);
        }
        else {
            setStepValid(false);
        }
    }, [savedName]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Identity"),
        React.createElement(TextInput, { onChange: (e) => {
                const newValue = e.target.value;
                setName(newValue);
            }, value: name })));
};
const Settings = ({ setStepValid }) => {
    const { getValuesRef, dataInput } = useContext(DataStepperContext);
    const savedticketNumber = dataInput?.ticketNumber || "";
    const [ticketNumber, setTicketNumber] = useState(savedticketNumber);
    getValuesRef.current = () => {
        return { ticketNumber };
    };
    useEffect(() => {
        if (ticketNumber === "" ||
            (typeof ticketNumber === "number" && ticketNumber > 0)) {
            setStepValid(true);
        }
        else {
            setStepValid(false);
        }
    }, [ticketNumber]);
    useEffect(() => {
        if (savedticketNumber === "" ||
            (typeof savedticketNumber === "number" && savedticketNumber > 0)) {
            setStepValid(true);
        }
        else {
            setStepValid(false);
        }
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Settings"),
        React.createElement(NumberInput, { onChange: (value) => {
                setTicketNumber(value);
            }, value: ticketNumber })));
};
const stepItems = [
    {
        stepName: "Identity",
        component: React.createElement("h2", null, "Identity")
    },
    {
        stepName: "Settings",
        component: React.createElement("h2", null, "Settings")
    },
    {
        stepName: "Relations",
        component: React.createElement("h2", null, "Relations")
    },
    {
        stepName: "Structure",
        component: React.createElement("h2", null, "Structure")
    },
    {
        stepName: "Display",
        component: React.createElement("h2", null, "Display")
    }
];
const meta = {
    title: "Stepper",
    component: Stepper,
    tags: ["autodocs"],
    args: {
        stepItems: stepItems,
        activeStep: 0
    }
};
export default meta;
export const BasicStepper = {
    // @ts-ignore
    args: {}
};
export const FormStepper = {
    // @ts-ignore
    args: {
        nextButtonText: "Next",
        previousButtonText: "Back",
        stepItems: [
            {
                stepName: "Identity",
                renderComponent(setStepValid) {
                    return React.createElement(Identity, { setStepValid: setStepValid });
                }
            },
            {
                stepName: "Settings",
                renderComponent(setStepValid) {
                    return React.createElement(Settings, { setStepValid: setStepValid });
                }
            }
        ],
        hasButtons: true,
        renderLastButton: (data, isValid) => {
            return (React.createElement(Button, { variant: "primary", disabled: !isValid, onClick: () => {
                    console.log(data);
                } }, "Save"));
        }
    }
};
