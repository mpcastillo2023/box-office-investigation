/* eslint-disable react/jsx-no-literals */
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MultiLevelMenu from "../MultiLevelMenu";
import { MultiLevelMenuTestData, getParent, getChildLevel } from "./TestUtils";
import { expect, test, beforeEach } from "vitest";
MultiLevelMenuTestData.push({ customMenuItem: React.createElement("h1", null, "custom menu item") });
beforeEach(() => {
    render(React.createElement(BrowserRouter, null,
        React.createElement(MultiLevelMenu, { menuItems: MultiLevelMenuTestData })));
});
test("menu is rendering first level", () => {
    screen.getByRole("link", { name: /home/i });
    screen.getByRole("link", { name: /about/i });
    screen.getByRole("button", { name: /settings/i });
});
test("menu is initially collapsed", () => {
    const firstCollapseButton = screen.getByRole("button", { name: /settings/i });
    const firstParent = getParent(firstCollapseButton);
    const firstLevel = within(firstParent).queryByRole("list", {
        name: /menu-level-1/i
    });
    expect(firstLevel).toHaveClass("closed");
});
test("multilevel menu opens and shows children", async () => {
    const user = userEvent.setup();
    const firstCollapseButton = screen.getByRole("button", { name: /settings/i });
    const firstParent = getParent(firstCollapseButton);
    await user.click(firstCollapseButton);
    const secondParent = getChildLevel(firstParent);
    expect(secondParent).not.toHaveClass("closed");
    const secondCollapseButton = within(firstParent).getByRole("button", {
        name: /blog/i
    });
    await user.click(secondCollapseButton);
    const thirdParent = getChildLevel(secondParent);
    expect(thirdParent).not.toHaveClass("closed");
});
test("multilevel menu collapses", async () => {
    const user = userEvent.setup();
    const firstCollapseButton = screen.getByRole("button", { name: /settings/i });
    const firstParent = getParent(firstCollapseButton);
    await user.click(firstCollapseButton);
    await user.click(firstCollapseButton);
    const secondParent = getChildLevel(firstParent);
    expect(secondParent).toHaveClass("closed");
});
test("should render custom menu item", async () => {
    screen.getByRole("heading", { name: /custom menu item/i });
});
