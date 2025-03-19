import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberInput from "../NumberInput";
import { expect, test, describe } from "vitest";
describe("NumberInput testing", () => {
    test("should display labels", () => {
        render(React.createElement(NumberInput, { textBeside: "Min", placeholder: "Enter Min" }));
        const numberInput = screen.getByRole("textbox");
        expect(screen.getByText("Min")).toBeInTheDocument();
        expect(numberInput.getAttribute("placeholder")).toBe("Enter Min");
    });
    test("should display input text with value and placeholder", async () => {
        const user = userEvent.setup();
        render(React.createElement(NumberInput, { textBeside: "Min", placeholder: "Min" }));
        await user.type(screen.getByRole("textbox"), "4");
        expect(screen.getByRole("textbox")).toHaveValue(4);
    });
    test("should block text that is not number", async () => {
        const user = userEvent.setup();
        render(React.createElement(NumberInput, { textBeside: "Min", placeholder: "Min" }));
        await user.type(screen.getByRole("textbox"), "Clorian");
        expect(screen.getByRole("textbox")).toHaveValue(null);
    });
    test("should increase input number value", async () => {
        const user = userEvent.setup();
        render(React.createElement(NumberInput, { textBeside: "Min", placeholder: "Min", "aria-label": "min" }));
        await user.click(screen.getByRole("button", { name: "min-increase-button" }));
        expect(screen.getByRole("textbox")).toHaveValue(1);
    });
    test("should decrease input number value", async () => {
        const user = userEvent.setup();
        render(React.createElement(NumberInput, { textBeside: "Min", placeholder: "Min", "aria-label": "min" }));
        await user.click(screen.getByRole("button", { name: "min-decrease-button" }));
        expect(screen.getByRole("textbox")).toHaveValue(null);
    });
});
