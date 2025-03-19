import { MultiLevelMenu } from "../components";
import { MemoryRouter } from "react-router-dom";
import React from "react";
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
    title: "MultiLevelMenu",
    component: MultiLevelMenu,
    tags: ["autodocs"],
    decorators: [
        (Story) => (React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
            React.createElement(Story, null)))
    ],
    args: {
        menuItems: menuItems
    }
};
export default meta;
export const Basic = {
    args: {}
};
