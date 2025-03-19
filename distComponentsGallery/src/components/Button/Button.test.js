/* eslint-disable react/jsx-no-literals */
import React, { useState } from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach } from "vitest";
import Button from "./Button";
const ExampleComponent = () => {
    const [text, setText] = useState("First Text");
    return (React.createElement("div", null,
        React.createElement("p", null, text),
        React.createElement(Button, { onClick: () => setText("Second Text"), role: "button" }, "Change")));
};
describe("Button testing", () => {
    beforeEach(() => {
        render(React.createElement(Button, null, "My button"));
    });
    test("should display Button Component", () => {
        const mybutton = screen.getByText("My button");
        expect(mybutton).toBeInTheDocument();
    });
    test("Button Component should be primary variant by default", () => {
        const mybutton = screen.getByText("My button");
        mybutton.classList.add("primary");
        expect(mybutton.classList.contains("primary")).toBe(true);
    });
    test("Button Component should be empty variant", () => {
        const { getByText } = render(React.createElement(Button, { variant: "empty" }, "Empty"));
        const mybutton = getByText("Empty");
        expect(mybutton.classList.contains("empty")).toBe(true);
    });
    test("Clicking on Button component to change text", async () => {
        const user = userEvent.setup();
        const { getByText } = render(React.createElement(ExampleComponent, null));
        const myButton = getByText("Change");
        getByText("First Text");
        await user.click(myButton);
        getByText("Second Text");
    });
});
