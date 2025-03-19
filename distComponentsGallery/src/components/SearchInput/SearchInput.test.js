import React from "react";
import { screen, render } from "@testing-library/react";
import SearchInput from "./SearchInput";
import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";
describe("SearchInput Testing", () => {
    test("Should display SearchInput", () => {
        render(React.createElement(SearchInput, { placeholder: "Search sales group", "data-testid": "search" }));
        const searchInput = screen.getByRole("textbox");
        expect(searchInput).toBeInTheDocument();
    });
    test("Should SearchInput has placeholder", () => {
        render(React.createElement(SearchInput, { placeholder: "Search sales group", "data-testid": "search" }));
        const searchInput = screen.getByRole("textbox");
        expect(searchInput.getAttribute("placeholder")).toBe("Search sales group");
    });
    test("Should SearchInput has default value", () => {
        render(React.createElement(SearchInput, { placeholder: "Search sales group", "data-testid": "search", defaultValue: "Clorian" }));
        const searchInput = screen.getByRole("textbox");
        expect(searchInput).toHaveDisplayValue("Clorian");
    });
    test("Should SearchInput has clear button", async () => {
        const user = userEvent.setup();
        render(React.createElement(SearchInput, { placeholder: "Search sales group", "data-testid": "search", hasClearButton: true, defaultValue: "Clorian" }));
        const clearButton = screen.getByTestId("clean-button");
        await user.click(clearButton);
        const searchInput = screen.getByRole("textbox");
        expect(searchInput).toHaveDisplayValue("");
    });
});
