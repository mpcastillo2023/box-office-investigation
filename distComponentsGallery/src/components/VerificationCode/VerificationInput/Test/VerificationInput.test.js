import React from "react";
import userEvent from "@testing-library/user-event";
import VerificationInput from "../VerificationInput";
import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
describe("VerificationInput testing", () => {
    const valueNumber = 7;
    const valueString = "7";
    const valueStrings = "a1";
    test("should display VerificationInput", () => {
        render(React.createElement(VerificationInput, null));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).toBeInTheDocument();
    });
    test("should display VerificationInput with an empty string", () => {
        render(React.createElement(VerificationInput, null));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).toHaveDisplayValue("");
        expect(verificationInput).toBeInTheDocument();
    });
    test("should VerificationInput accept string as value", () => {
        render(React.createElement(VerificationInput, { value: valueString }));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).toHaveDisplayValue(valueString);
    });
    test("should VerificationInput accept number as value", () => {
        render(React.createElement(VerificationInput, { value: valueNumber }));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).toHaveDisplayValue(valueNumber.toString());
    });
    test("should VerificationInput only accept 1 length of character", () => {
        render(React.createElement(VerificationInput, { value: 10 }));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).not.toHaveDisplayValue("10");
        expect(verificationInput).toHaveDisplayValue("1");
    });
    test("should VerificationInput only accept 1 character of a string", () => {
        render(React.createElement(VerificationInput, { value: valueStrings }));
        const verificationInput = screen.getByRole("textbox");
        expect(verificationInput).not.toHaveDisplayValue(valueStrings);
        expect(verificationInput).toHaveDisplayValue(valueStrings.substring(0, 1));
    });
    test("should VerificationInput change values", async () => {
        render(React.createElement(VerificationInput, null));
        const user = userEvent.setup();
        const verificationInput = screen.getByRole("textbox");
        await user.click(verificationInput);
        await user.type(verificationInput, valueNumber.toString());
        expect(verificationInput).toHaveDisplayValue(valueNumber.toString());
    });
});
