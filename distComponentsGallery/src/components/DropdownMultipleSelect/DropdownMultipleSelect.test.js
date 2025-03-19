import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import DropdownMultipleSelect from "./DropdownMultipleSelect";
import { expect, test } from "vitest";
const optionList = [
    {
        optionText: "Purple",
        optionValue: "purple"
    },
    {
        optionText: "Red",
        optionValue: "red"
    },
    {
        optionText: "Orange",
        optionValue: "orange"
    },
    {
        optionText: "Green",
        optionValue: "green"
    },
    {
        optionText: "Ocean",
        optionValue: "ocean"
    }
];
test("Should display placeholder", () => {
    render(React.createElement(DropdownMultipleSelect, { optionList: optionList, label: "Choose some options" }));
    screen.getByText("Choose some options");
});
test("Should display option list when click on dropdown", async () => {
    render(React.createElement(DropdownMultipleSelect, { optionList: optionList, label: "Choose some options" }));
    const user = userEvent.setup();
    const multiselectToggle = screen.getByTestId("dropdown-toggle");
    await user.click(multiselectToggle);
    const optionListElement = screen.getByRole("listbox");
    expect(optionListElement.children).toHaveLength(5);
});
test("Should check option", async () => {
    render(React.createElement(DropdownMultipleSelect, { optionList: optionList, label: "Choose some options" }));
    const user = userEvent.setup();
    const multiselectToggle = screen.getByTestId("dropdown-toggle");
    await user.click(multiselectToggle);
    const optionListElement = screen.getByRole("listbox");
    const purpleOption = await within(optionListElement).findByText("Purple");
    const greenOption = await within(optionListElement).findByText("Green");
    await user.click(purpleOption);
    await user.click(greenOption);
    screen.getByRole("checkbox", { name: "Purple-checkbox", checked: true });
    const greenCheckedBox = screen.getByRole("checkbox", {
        name: "Green-checkbox",
        checked: true
    });
    await user.click(greenCheckedBox);
    expect(screen.queryByRole("checkbox", {
        name: "Green-checkbox",
        checked: true
    })).not.toBeInTheDocument();
});
test("Should add option", async () => {
    render(React.createElement(DropdownMultipleSelect, { optionList: optionList, label: "Choose some options", withSelectAllOptions: true, selectAllOptionsText: "Select all options" }));
    const user = userEvent.setup();
    const multiselectToggle = screen.getByTestId("dropdown-toggle");
    await user.click(multiselectToggle);
    const optionListElement = screen.getByRole("listbox");
    const allOptions = await within(optionListElement).findByText("Select all options");
    await user.click(allOptions);
    screen.getByRole("checkbox", { name: "Purple-checkbox", checked: true });
    screen.getByRole("checkbox", { name: "Red-checkbox", checked: true });
    screen.getByRole("checkbox", { name: "Orange-checkbox", checked: true });
    screen.getByRole("checkbox", { name: "Green-checkbox", checked: true });
    screen.getByRole("checkbox", { name: "Ocean-checkbox", checked: true });
});
