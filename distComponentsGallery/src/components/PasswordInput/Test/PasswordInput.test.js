import React from "react";
import userEvent from "@testing-library/user-event";
import PasswordInput from "../PasswordInput";
import { beforeEach, expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
describe("PasswordInput testing", () => {
    beforeEach(() => {
        render(React.createElement(PasswordInput, { label: "Password", placeholder: "Password" }));
    });
    const value = "123456";
    test("should display PasswordInput", async () => {
        const passwordInput = screen.getByTestId("password-input");
        expect(passwordInput).toBeInTheDocument();
        expect(screen.getByText("Password")).toBeInTheDocument();
        expect(passwordInput.getAttribute("placeholder")).toBe("Password");
    });
    test("input should not display the password", async () => {
        const user = userEvent.setup();
        const passwordInput = screen.getByTestId("password-input");
        await user.type(passwordInput, value);
        expect(passwordInput).toHaveAttribute("type", "password");
    });
    test("input should display the password", async () => {
        const user = userEvent.setup();
        const passwordInput = screen.getByTestId("password-input");
        const passwordChangeType = screen.getByRole("button");
        await user.type(passwordInput, value);
        await user.click(passwordChangeType);
        expect(passwordInput).toHaveAttribute("type", "text");
        expect(passwordInput).toHaveValue(value);
    });
});
