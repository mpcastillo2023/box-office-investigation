/* eslint-disable react/jsx-no-literals */
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";
import React from "react";
import { expect, test, beforeEach } from "vitest";
beforeEach(() => {
    render(React.createElement(React.Fragment, null,
        React.createElement(Dropdown, { dropdownElement: React.createElement(React.Fragment, null, "Click me!"), dropdownContent: React.createElement("div", null, "Just some content") }),
        React.createElement("div", null, "some other part of the doc")));
});
test("should render collapsed initially", async () => {
    const dropdownContentCollapsed = screen.queryByText("Just some content");
    screen.getByRole("button");
    expect(dropdownContentCollapsed).not.toBeInTheDocument();
});
test("should open content on click", async () => {
    const user = userEvent.setup();
    const dropdownContentCollapsed = screen.queryByText("Just some content");
    const dropdownElement = screen.getByRole("button", {
        name: /click me!/i
    });
    expect(dropdownContentCollapsed).not.toBeInTheDocument();
    await user.click(dropdownElement);
    screen.getByText("Just some content");
});
test("should close content when clicking box", async () => {
    const user = userEvent.setup();
    const dropdownContentCollapsed = screen.queryByText("Just some content");
    const dropdownElement = screen.getByRole("button", {
        name: /click me!/i
    });
    expect(dropdownContentCollapsed).not.toBeInTheDocument();
    await user.click(dropdownElement);
    await user.click(dropdownElement);
    expect(screen.queryByText("Just some content")).not.toBeInTheDocument();
});
test("should close content when clicking outside the dropdown", async () => {
    const user = userEvent.setup();
    const dropdownElement = screen.getByRole("button", {
        name: /click me!/i
    });
    const otherElementOfDom = screen.getByText("some other part of the doc");
    await user.click(dropdownElement);
    screen.queryByText("Just some content");
    await user.click(otherElementOfDom);
    waitFor(() => {
        const dropdownContent = screen.queryByText("Just some content");
        expect(dropdownContent).not.toBeInTheDocument();
    });
});
test("should not close when clicking inside dropdown", async () => {
    const user = userEvent.setup();
    const dropdownElement = screen.getByRole("button", {
        name: /click me!/i
    });
    await user.click(dropdownElement);
    const dropdownContent = screen.getByText("Just some content");
    await user.click(dropdownContent);
    screen.getByText("Just some content");
});
