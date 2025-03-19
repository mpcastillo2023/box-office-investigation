import React from "react";
import LoginForm from "../LoginForm";
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
describe("LoginForm testing", () => {
    const fn = vi.fn();
    beforeEach(() => {
        render(React.createElement(LoginForm, { isValid: false, handleSubmit: fn }));
    });
    test("should display LoginForm", () => {
        const loginForm = screen.getByRole("form");
        expect(loginForm).toBeInTheDocument();
    });
    test("LoginForm should display image logo", async () => {
        const loginFormImage = screen.getByAltText("clorian-logo");
        expect(loginFormImage).toBeInTheDocument();
    });
});
