/* eslint-disable react/jsx-no-literals */
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { SidebarContextProvider } from "../../../providers/SidebarProvider";
import SidebarContent from "../SidebarContent/SidebarContent";
import CollapseButton from "../CollapseButton/CollapseButton";
import { IsDesktopProvider } from "../../../providers/IsDesktopProvider";
import setMobileView from "../../../testUtils/setMobileView";
import setDesktopView from "../../../testUtils/setDesktopView";
import { expect, test, describe, beforeEach, beforeAll, afterAll } from "vitest";
const renderSidebar = () => {
    render(React.createElement(IsDesktopProvider, null,
        React.createElement(SidebarContextProvider, null,
            React.createElement(CollapseButton, { desktopIcon: React.createElement("button", null, "collapse me!"), mobileIcon: React.createElement("button", null, "collapse me!") }),
            React.createElement(SidebarContent, { draggable: true },
                React.createElement("a", { href: "/test" }, "i am the menu")))));
};
describe("desktop view", () => {
    const user = userEvent.setup();
    beforeAll(() => {
        setDesktopView();
    });
    beforeEach(() => {
        renderSidebar();
    });
    test("should render sidebar", () => {
        screen.getByRole("button", { name: /collapse me!/i });
        screen.getByRole("link", { name: /i am the menu/i });
    });
    test("should collapse sidebar when clicked", async () => {
        const collapseButton = screen.getByRole("button", {
            name: /collapse me!/i
        });
        await user.click(collapseButton);
        const sidebarContentCollapsed = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContentCollapsed?.parentElement;
        expect(sidebarContentCollapsed).toHaveClass("closed");
        expect(sidebarContainer).toHaveClass("collapsedContainer");
    });
    test("should collapse sidebar when clicked  on inside button", async () => {
        const collapseButton = screen.getByTestId("toogle-icon");
        await user.click(collapseButton);
        const sidebarContentCollapsed = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContentCollapsed?.parentElement;
        expect(sidebarContentCollapsed).toHaveClass("closed");
        expect(sidebarContainer).toHaveClass("collapsedContainer");
    });
    test("should open sidebar when collapsed", async () => {
        const collapseButton = screen.getByRole("button", {
            name: /collapse me!/i
        });
        await user.click(collapseButton);
        await user.click(collapseButton);
        const sidebarContent = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContent?.parentElement;
        expect(sidebarContent).not.toHaveClass("closed");
        expect(sidebarContainer).not.toHaveClass("collapsedContainer");
    });
    test("should open sidebar when collapsed with  inside  button", async () => {
        const collapseButton = screen.getByTestId("SvgArrowDrag");
        await user.click(collapseButton);
        const collapsestrong = screen.getByTestId("SvgArrowDrag");
        await user.click(collapsestrong);
        const sidebarContent = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContent?.parentElement;
        expect(sidebarContent).not.toHaveClass("closed");
        expect(sidebarContainer).not.toHaveClass("collapsedContainer");
    });
    test("should display drag", async () => {
        const draghandler = screen.getByTestId("draghandler");
        fireEvent.mouseDown(draghandler);
        screen.getByTestId("draggableScreen");
    });
});
describe("mobile view", () => {
    const user = userEvent.setup();
    beforeAll(() => {
        setMobileView();
    });
    beforeEach(() => {
        renderSidebar();
    });
    afterAll(() => {
        setDesktopView();
    });
    test("should render collapsed", () => {
        screen.getByRole("button", { name: /collapse me!/i });
        const sidebarContent = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContent?.parentElement;
        expect(sidebarContent).toHaveClass("closed");
        expect(sidebarContainer).toHaveClass("collapsedContainer");
    });
    test("should open a collapsed sidebar", async () => {
        const collapseButton = screen.getByRole("button", {
            name: /collapse me!/i
        });
        await user.click(collapseButton);
        const sidebarContentDisplayed = screen.getByRole("link", {
            name: /i am the menu/i
        }).parentElement;
        const sidebarContainer = sidebarContentDisplayed?.parentElement;
        expect(sidebarContentDisplayed).not.toHaveClass("closed");
        expect(sidebarContainer).not.toHaveClass("collapsedContainer");
    });
    test("should close an opened sidebar", async () => {
        const collapseButton = screen.getByRole("button", {
            name: /collapse me!/i
        });
        await user.click(collapseButton);
        await user.click(collapseButton);
        const sidebarContentHidden = screen.queryByRole("link", {
            name: /i am the menu/i
        })?.parentElement;
        const sidebarContainer = sidebarContentHidden?.parentElement;
        expect(sidebarContentHidden).toHaveClass("closed");
        expect(sidebarContainer).toHaveClass("collapsedContainer");
    });
});
