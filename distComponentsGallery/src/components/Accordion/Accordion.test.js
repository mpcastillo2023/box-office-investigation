/* eslint-disable react/jsx-no-literals */
import React from "react";
import { screen, render } from "@testing-library/react";
import Accordion from "./Accordion";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach, vi } from "vitest";
describe("Accordion Testing", () => {
    beforeEach(() => {
        render(React.createElement(Accordion, { title: React.createElement(React.Fragment, null, "My Title"), testId: "myAccordion", expanded: true },
            React.createElement("div", null, "My content")));
    });
    test("Accordion should be displayed with content", () => {
        const accordion = screen.getByText("My content");
        expect(accordion).toBeInTheDocument();
    });
    test("Accordion should have title", () => {
        const accordion = screen.getByText("My Title");
        expect(accordion).toBeInTheDocument();
    });
    test("Accordion should be opened", () => {
        const accordion = screen.getByTestId("myAccordion");
        expect(accordion.getAttribute("aria-expanded")).toBe("true");
    });
    test("Accordion should be closed", () => {
        render(React.createElement(Accordion, { title: React.createElement(React.Fragment, null, "My Title"), testId: "myAccordionClosed", expanded: false },
            React.createElement("div", null, "My content")));
        const accordion = screen.getByTestId("myAccordionClosed");
        expect(accordion.getAttribute("aria-expanded")).toBe("false");
    });
    test("Accordion should show ToggleEditable component", () => {
        const EditComponent = () => {
            return React.createElement("div", { "data-testid": "isEdit" }, "IsEdit");
        };
        render(React.createElement(Accordion, { title: React.createElement(React.Fragment, null, "My Title"), testId: "myAccordionEdit", expanded: false, toggleEdit: React.createElement(EditComponent, null) },
            React.createElement("div", null, "My content")));
        const toggleElement = screen.getByTestId("isEdit");
        expect(toggleElement.textContent).toBe("IsEdit");
    });
    test("Accordion should open after user click", async () => {
        window.scrollTo = vi.fn(() => 0);
        const Title = () => {
            return React.createElement("div", { "data-testid": "title" }, "This is my title");
        };
        const user = userEvent.setup();
        render(React.createElement(Accordion, { title: React.createElement(Title, null), testId: "myAccordionClicked", expanded: false },
            React.createElement("div", null, "My content")));
        const title = screen.getByTestId("title");
        await user.click(title);
        const accordion = screen.getByTestId("myAccordionClicked");
        expect(accordion.getAttribute("aria-expanded")).toBe("true");
    });
});
