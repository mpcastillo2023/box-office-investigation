import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";
import { expect, test, describe } from "vitest";
describe("TextInput testing", () => {
    test("should display input text with value and placeholder", async () => {
        const user = userEvent.setup();
        render(React.createElement(TextInput, { placeholder: "Name" }));
        await user.type(screen.getByRole("textbox"), "Clorian");
        expect(screen.getByRole("textbox")).toHaveValue("Clorian");
    });
});
