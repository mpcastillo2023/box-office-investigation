import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "../Checkbox";
import { expect, test, describe, vi } from "vitest";
describe("Checkbox testing", () => {
    test("should display Checkbox", () => {
        const onChange = vi.fn();
        const { getByRole } = render(React.createElement(Checkbox, { onChange: onChange }));
        expect(getByRole("checkbox")).toBeInTheDocument();
    });
    test("Checkbox should be disabled", () => {
        const onChange = vi.fn();
        const { getByRole } = render(React.createElement(Checkbox, { disabled: true, onChange: onChange }));
        expect(getByRole("checkbox")).toBeDisabled();
    });
    test("Checkbox should be checked", () => {
        const onChange = vi.fn();
        const { getByRole } = render(React.createElement(Checkbox, { value: true, onChange: onChange }));
        expect(getByRole("checkbox").getAttribute("aria-checked")).toBe("true");
    });
    test("Checkbox should be clicked", async () => {
        const user = userEvent.setup();
        const { getByRole } = render(React.createElement(Checkbox, null));
        await user.click(getByRole("checkbox"));
        expect(getByRole("checkbox").getAttribute("aria-checked")).toBe("true");
    });
    test("Checkbox should be fired onClick function", async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        const { getByRole } = render(React.createElement(Checkbox, { onChange: onChange }));
        await user.click(getByRole("checkbox"));
        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
