import React, { useState } from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach } from "vitest";
const selectionTypeServicesOptions = [
    {
        optionText: "Selector de cantidad",
        optionValue: "select"
    },
    {
        optionText: "Un servicio por compra",
        optionValue: "checkbox_one"
    },
    {
        optionText: "Un servicio por persona",
        optionValue: "checkbox_all"
    },
    {
        optionText: "Deshabilitado",
        optionValue: "disabled_option",
        disabled: true
    }
];
describe("Test with internal state", () => {
    beforeEach(() => {
        render(React.createElement(RadioButtonGroup, { options: selectionTypeServicesOptions, name: "select" }));
    });
    test("Should render options", async () => {
        const checkboxOne = screen.getByRole("radio", { name: "checkbox_one" });
        const select = screen.getByRole("radio", { name: "select" });
        const checkboxAll = screen.getByRole("radio", { name: "checkbox_all" });
        const disabledOption = screen.getByRole("radio", {
            name: "disabled_option"
        });
        expect(checkboxOne).not.toBeChecked();
        expect(select).not.toBeChecked();
        expect(checkboxAll).not.toBeChecked();
        expect(disabledOption).not.toBeChecked();
        expect(disabledOption).toBeDisabled();
    });
    test("Should select option", async () => {
        const user = userEvent.setup();
        const checkboxOne = screen.getByRole("radio", { name: "checkbox_one" });
        await user.click(checkboxOne);
        expect(checkboxOne).toBeChecked();
    });
});
const TestRadioButtonGroupExternalState = () => {
    const [value, setValue] = useState("");
    return (React.createElement(RadioButtonGroup, { options: selectionTypeServicesOptions, name: "select", value: value, onChange: (newValue) => setValue(newValue) }));
};
describe("Test with external state", () => {
    beforeEach(() => {
        render(React.createElement(TestRadioButtonGroupExternalState, null));
    });
    test("Should render options", async () => {
        const checkboxOne = screen.getByRole("radio", { name: "checkbox_one" });
        const select = screen.getByRole("radio", { name: "select" });
        const checkboxAll = screen.getByRole("radio", { name: "checkbox_all" });
        const disabledOption = screen.getByRole("radio", {
            name: "disabled_option"
        });
        expect(checkboxOne).not.toBeChecked();
        expect(select).not.toBeChecked();
        expect(checkboxAll).not.toBeChecked();
        expect(disabledOption).not.toBeChecked();
        expect(disabledOption).toBeDisabled();
    });
    test("Should select option", async () => {
        const user = userEvent.setup();
        const checkboxOne = screen.getByRole("radio", { name: "checkbox_one" });
        await user.click(checkboxOne);
        expect(checkboxOne).toBeChecked();
    });
});
