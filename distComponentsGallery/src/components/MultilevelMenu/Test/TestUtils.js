import { within } from "@testing-library/react";
export const MultiLevelMenuTestData = [
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
        icon: "collapsed icon",
        activeIcon: "non collapsed icon",
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
                icon: "+",
                activeIcon: "-"
            }
        ],
        defaultCollapsed: true
    }
];
export const getParent = (element) => {
    const parent = element.parentElement;
    if (parent === null)
        throw new Error("Parent not found");
    return parent;
};
export const getChildLevel = (parentElement) => {
    return within(parentElement).getAllByRole("list")[0];
};
export const queryLinksInMenuLevel = (parentElement, linkNames) => {
    return linkNames.map((linkName) => within(parentElement).queryByRole("link", { name: linkName }));
};
