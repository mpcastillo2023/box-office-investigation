import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./Textarea";
import { expect, test, describe } from "vitest";
describe("TextInput testing", () => {
    test("should display input text with value and placeholder", async () => {
        const user = userEvent.setup();
        render(React.createElement(Textarea, { placeholder: "Name" }));
        await user.type(screen.getByRole("textarea"), "Clorian");
        expect(screen.getByRole("textarea")).toHaveValue("Clorian");
    });
});
