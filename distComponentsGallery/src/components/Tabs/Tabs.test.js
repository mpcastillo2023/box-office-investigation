/* eslint-disable react/jsx-no-literals */
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tabs from "./Tabs";
import { expect, test, describe, beforeEach } from "vitest";
const tabList = [
    {
        tabTitle: "Information",
        tabView: (React.createElement(React.Fragment, null,
            React.createElement("div", null, "Information Component"))),
        active: false
    },
    {
        tabTitle: "Configuration",
        tabView: (React.createElement(React.Fragment, null,
            React.createElement("div", null, "Configuration Component"))),
        active: false
    },
    {
        tabTitle: "Visualization",
        tabView: (React.createElement(React.Fragment, null,
            React.createElement("div", null, "Visualization Component"))),
        active: false
    },
    {
        tabTitle: "Web Sheet",
        tabView: React.createElement("div", null, "Ficha Web"),
        active: false
    },
    {
        tabTitle: "Open Data",
        tabView: React.createElement("div", null, "Open data"),
        active: false
    },
    {
        tabTitle: "Settings",
        tabView: React.createElement("div", null, "Settings Component"),
        active: false
    },
    {
        tabTitle: "Languages",
        tabView: React.createElement("div", null, "Languages Component"),
        active: false
    }
];
describe("Tab Component Testing", () => {
    const user = userEvent.setup();
    beforeEach(() => {
        render(React.createElement(Tabs, { tabList: tabList }));
    });
    test("Should render all tabs", () => {
        const tabs = screen.getAllByRole("tab");
        expect(tabs.length).toBe(7);
    });
    test("Should show Information Component text after click on first tab", async () => {
        const tabs = screen.getAllByRole("tab")[0];
        await user.click(tabs);
        screen.getByText("Information Component");
    });
});
