/* eslint-disable react/jsx-no-literals */
import React, { useContext, useEffect, useState } from "react";
import Stepper from "../Stepper";
import { Button } from "@cg-components/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataStepperContext } from "../Provider/StepperProvider";
import TextInput from "@cg-components/TextInput/TextInput";
import NumberInput from "@cg-components/NumberInput/NumberInput";
import { expect, test, vi } from "vitest";
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
const ExampleStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    return (React.createElement(React.Fragment, null,
        activeStep > 0 ? (React.createElement(Button, { onClick: () => setActiveStep((prevState) => prevState - 1) }, "Back")) : null,
        React.createElement(Stepper, { stepItems: stepItems, activeStep: activeStep }),
        activeStep < stepItems.length - 1 ? (React.createElement(Button, { onClick: () => setActiveStep((prevState) => prevState + 1) }, "Next")) : null));
};
test("Render components properly", async () => {
    render(React.createElement(ExampleStepper, null));
    const user = userEvent.setup();
    screen.getByRole("heading", { level: 2, name: "Identity" });
    const Settings = screen.queryByRole("heading", {
        level: 2,
        name: "Settings"
    });
    expect(Settings).not.toBeInTheDocument();
    const nextButton = screen.getByRole("button", { name: "Next" });
    await user.click(nextButton);
    const backButton = screen.getByRole("button", { name: "Back" });
    const Identity = screen.queryByRole("heading", {
        level: 2,
        name: "Identity"
    });
    screen.getByRole("heading", {
        level: 2,
        name: "Settings"
    });
    expect(Identity).not.toBeInTheDocument();
    await user.click(backButton);
    screen.getByRole("heading", { level: 2, name: "Identity" });
    await user.click(nextButton);
    await user.click(nextButton);
    await user.click(nextButton);
    screen.getByRole("heading", {
        level: 2,
        name: "Structure"
    });
    await user.click(nextButton);
    screen.getByRole("heading", {
        level: 2,
        name: "Display"
    });
});
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
        if (typeof ticketNumber === "number" && ticketNumber > 0) {
            setStepValid(true);
        }
        else {
            setStepValid(false);
        }
    }, [ticketNumber]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Settings"),
        React.createElement(NumberInput, { onChange: (value) => {
                setTicketNumber(value);
            }, value: ticketNumber })));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormStepper = ({ onSave }) => {
    return (React.createElement(Stepper, { nextButtonText: "Next", previousButtonText: "Back", stepItems: [
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
        ], hasButtons: true, renderLastButton: (data, isValid) => {
            return (React.createElement(Button, { variant: "primary", disabled: !isValid, onClick: onSave }, "Save"));
        } }));
};
test("Render form stepper", async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();
    render(React.createElement(FormStepper, { onSave: onSave }));
    screen.getByRole("heading", { level: 2, name: "Identity" });
    const Settings = screen.queryByRole("heading", {
        level: 2,
        name: "Settings"
    });
    expect(Settings).not.toBeInTheDocument();
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton).toBeDisabled();
    const name = screen.getByRole("textbox");
    await user.type(name, "TestName");
    expect(nextButton).not.toBeDisabled();
    await user.click(nextButton);
    const backButton = screen.getByRole("button", { name: "Back" });
    screen.getByRole("heading", {
        level: 2,
        name: "Settings"
    });
    await user.click(backButton);
    const savedName = screen.getByRole("textbox");
    expect(savedName).toHaveValue("TestName");
    const nextButtonAfterBack = screen.getByRole("button", { name: "Next" });
    expect(nextButtonAfterBack).not.toBeDisabled();
    await user.click(nextButtonAfterBack);
    screen.getByRole("heading", { level: 2, name: "Settings" });
    const numTickets = screen.getByRole("textbox");
    const saveButton = screen.getByRole("button", { name: "Save" });
    expect(saveButton).toBeDisabled();
    await user.type(numTickets, "2");
    expect(saveButton).not.toBeDisabled();
    await user.click(saveButton);
});
