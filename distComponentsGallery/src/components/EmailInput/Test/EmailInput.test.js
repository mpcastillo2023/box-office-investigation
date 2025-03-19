import React from "react";
import userEvent from "@testing-library/user-event";
import EmailInput from "../EmailInput";
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
describe("EmailInput testing", () => {
    const valueText = "Clorian";
    const valueEmail = "dev@clorian.com";
    test("should display EmailInput", async () => {
        render(React.createElement(EmailInput, { label: "Email", placeholder: "Enter your email" }));
        const emailInput = await screen.findByTestId("email-input");
        expect(emailInput).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(emailInput.getAttribute("placeholder")).toBe("Enter your email");
    });
    test("input should not display the email", async () => {
        render(React.createElement(EmailInput, { label: "Email", placeholder: "Enter your email" }));
        const user = userEvent.setup();
        const emailInput = screen.getByTestId("email-input");
        await user.type(emailInput, valueEmail);
        expect(emailInput).toHaveAttribute("type", "email");
    });
    test("input should be type text", async () => {
        render(React.createElement(EmailInput, { type: "text", label: "Email", placeholder: "Enter your email" }));
        const user = userEvent.setup();
        const emailInput = screen.getByTestId("email-input");
        await user.type(emailInput, valueText);
        expect(emailInput).toHaveAttribute("type", "text");
    });
});
