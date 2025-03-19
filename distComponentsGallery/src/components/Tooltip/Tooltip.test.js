/* eslint-disable react/jsx-no-literals */
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { expect, test, describe, beforeEach } from "vitest";
describe("Tooltip testing", () => {
    beforeEach(() => {
        render(React.createElement("div", { "data-testid": "tooltip-container" },
            React.createElement(Tooltip, { position: "top", tooltipText: "My Label", tooltipToggle: React.createElement("div", { id: "tooltip-content" }, "My Element to show") })));
    });
    test("Tooltip should have hidden class", () => {
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveClass("hide");
    });
    test("Tooltip Label should be My Label", () => {
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveTextContent("My Label");
    });
    test("Tooltip should display content on hover", async () => {
        const tooltipText = screen.getByText("My Element to show");
        fireEvent.mouseOver(tooltipText);
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveClass("show");
    });
    test("Tooltip should hide content on mouse leave", async () => {
        const tooltipText = screen.getByText("My Element to show");
        fireEvent.mouseOver(tooltipText);
        fireEvent.mouseLeave(tooltipText);
        const tooltip = screen.getByRole("tooltip");
        expect(tooltip).toHaveClass("hide");
    });
});
