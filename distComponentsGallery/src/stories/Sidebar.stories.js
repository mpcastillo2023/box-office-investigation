import * as React from "react";
import { Button, CollapseButton, MultiLevelMenu, SidebarContent } from "@cg-components/index";
import { IsDesktopProvider } from "@cg-providers/IsDesktopProvider";
import { SidebarContextProvider } from "@cg-providers/SidebarProvider";
import { MemoryRouter } from "react-router-dom";
const SidebarExample = (props) => {
    return (React.createElement(IsDesktopProvider, null,
        React.createElement(SidebarContextProvider, null,
            React.createElement(CollapseButton, { ...props }),
            React.createElement(SidebarContent, { ...props }, props.children))));
};
const menuItems = [
    {
        text: "Home",
        href: "/home"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Contact",
        href: "/contact"
    },
    {
        text: "Settings",
        icon: (React.createElement("div", { style: {
                fontSize: "20px",
                fontWeight: 900
            } }, "+")),
        activeIcon: (React.createElement("div", { style: {
                fontSize: "20px",
                fontWeight: 900
            } }, "-")),
        children: [
            {
                text: "Account",
                href: "/settings/account"
            },
            {
                text: "Privacy",
                href: "/settings/privacy"
            },
            {
                text: "Notifications",
                href: "/settings/notifications"
            },
            {
                text: "Blog",
                children: [
                    {
                        text: "Articles",
                        href: "/blog/articles"
                    },
                    {
                        text: "Tutorials",
                        href: "/blog/tutorials"
                    },
                    {
                        text: "News",
                        href: "/blog/news"
                    }
                ],
                icon: (React.createElement("div", { style: {
                        fontSize: "20px",
                        fontWeight: 900
                    } }, "+")),
                activeIcon: (React.createElement("div", { style: {
                        fontSize: "20px",
                        fontWeight: 900
                    } }, "-"))
            }
        ],
        defaultCollapsed: true
    }
];
const meta = {
    title: "Sidebar",
    component: SidebarExample,
    tags: ["autodocs"],
    args: {
        desktopIcon: null,
        desktopIconCollapsed: null,
        children: React.createElement(MultiLevelMenu, { menuItems: menuItems }),
        draggable: false,
        collapseButtonsInside: false,
        mobileIcon: (React.createElement(Button, { variant: "primary", style: {
                margin: "10px 0",
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 9999
            } }, "Close sidebar!")),
        mobileIconCollapsed: (React.createElement(Button, { variant: "primary", style: { margin: "10px 0" } }, "Open sidebar!"))
    },
    decorators: [
        (Story) => {
            return (React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
                React.createElement(Story, null)));
        }
    ]
};
export default meta;
export const Basic = {
    args: {
        desktopIcon: (React.createElement(Button, { variant: "primary", style: { margin: "10px 0" } }, "Close sidebar!")),
        desktopIconCollapsed: (React.createElement(Button, { variant: "primary", style: { margin: "10px 0" } }, "Open sidebar!")),
        mobileIcon: (React.createElement(Button, { variant: "primary", style: {
                margin: "10px 0",
                position: "fixed",
                top: 0,
                right: 0,
                zIndex: 9999
            } }, "Close sidebar!")),
        mobileIconCollapsed: (React.createElement(Button, { variant: "primary", style: { margin: "10px 0" } }, "Open sidebar!"))
    }
};
export const WithMinwidth = {
    args: {
        desktopIcon: null,
        desktopIconCollapsed: null,
        collapseButtonsInside: true,
        draggable: true,
        minWidth: 125
    }
};
export const Draggable = {
    args: {
        desktopIcon: null,
        desktopIconCollapsed: null,
        collapseButtonsInside: true,
        draggable: true,
        minWidth: 125
    }
};
export const WithCustomHeader = {
    args: {
        desktopIcon: null,
        desktopIconCollapsed: null,
        collapseButtonsInside: true,
        draggable: false,
        minWidth: 125,
        customHeader: (React.createElement("div", null,
            React.createElement(Button, { style: {
                    width: "2rem",
                    height: "2rem"
                } }, "Clorian")))
    }
};
