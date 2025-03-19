import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";
import { expect, test, describe, vi } from "vitest";
describe("Switch testing", () => {
    test("should display Switch", () => {
        const onChange = vi.fn();
        const { getByRole } = render(React.createElement(Switch, { onChange: onChange }));
        expect(getByRole("switch")).toBeInTheDocument();
    });
    test("Switch should be disabled", () => {
        const onChange = vi.fn();
        render(React.createElement(Switch, { disabled: true, onChange: onChange }));
        expect(screen.getByRole("switch").parentElement?.parentElement).toHaveClass("disabled");
    });
    test("Switch should be checked", () => {
        const onChange = vi.fn();
        render(React.createElement(Switch, { value: true, onChange: onChange }));
        screen.getByRole("switch", { checked: true });
    });
    test("Switch should be clicked", async () => {
        const user = userEvent.setup();
        render(React.createElement(Switch, null));
        await user.click(screen.getByRole("switch"));
        screen.getByRole("switch", { checked: true });
    });
    test("Switch should be fired onClick function", async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(React.createElement(Switch, { onChange: onChange }));
        await user.click(screen.getByRole("switch"));
        expect(onChange).toHaveBeenCalledTimes(1);
    });
    test("Switch should be disabled", async () => {
        render(React.createElement(Switch, { disabled: true }));
        expect(screen.getByRole("switch")).toBeDisabled();
    });
});
