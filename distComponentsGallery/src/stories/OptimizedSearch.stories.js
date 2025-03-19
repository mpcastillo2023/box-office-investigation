import React from "react";
import { MemoryRouter } from "react-router";
import { OptimizedSearch } from "@cg-components/index";
const meta = {
    title: "OptimizedSearch",
    component: OptimizedSearch,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            return (React.createElement(MemoryRouter, null,
                React.createElement(Story, { props: props })));
        }
    ],
    args: {}
};
export default meta;
export const BasicQuickSearch = {
    args: {
        data: [
            {
                text: "Basic data",
                href: "https://www.google.com",
                children: [
                    { text: "BuyerTypes", href: "https://www.google.com" },
                    {
                        text: "Points sales",
                        href: "https://www.google.com"
                    },
                    {
                        text: "Sales groups",
                        href: "https://www.google.com"
                    }
                ]
            },
            {
                text: "Products",
                href: "https://www.google.com",
                children: [
                    { text: "Capacity", href: "https://www.google.com" },
                    {
                        text: "Basic Products",
                        href: "https://www.google.com"
                    },
                    {
                        text: "forms",
                        href: "https://www.google.com"
                    }
                ]
            },
            {
                text: "complements",
                href: "https://www.google.com",
                children: [
                    { text: "extras", href: "https://www.google.com" },
                    {
                        text: "services",
                        href: "https://www.google.com"
                    },
                    {
                        text: "recommendations",
                        href: "https://www.google.com"
                    }
                ]
            }
        ],
        placeholder: "Search",
        notResultsText: "No results"
    }
};
