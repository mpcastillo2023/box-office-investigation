import type { StoryObj } from "@storybook/react";
import { MultiLevelMenu } from "../components";
import React from "react";
declare const meta: {
    title: string;
    component: typeof MultiLevelMenu;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        menuItems: import("../components").MenuItem[];
        customStyle?: import("../components/MultilevelMenu/Types").customStyleClasses | undefined;
        onMenuItemClick?: (() => void) | undefined;
    }>) => React.JSX.Element)[];
    args: {
        menuItems: ({
            text: string;
            href: string;
            icon?: undefined;
            activeIcon?: undefined;
            children?: undefined;
            defaultCollapsed?: undefined;
        } | {
            text: string;
            icon: React.JSX.Element;
            activeIcon: React.JSX.Element;
            children: ({
                text: string;
                href: string;
                children?: undefined;
                icon?: undefined;
                activeIcon?: undefined;
            } | {
                text: string;
                children: {
                    text: string;
                    href: string;
                }[];
                icon: React.JSX.Element;
                activeIcon: React.JSX.Element;
                href?: undefined;
            })[];
            defaultCollapsed: boolean;
            href?: undefined;
        })[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
