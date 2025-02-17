import type { StoryObj } from "@storybook/react";
import * as React from "react";
import { CollapseButton, SidebarContent } from "@cg-components/index";
type Props = React.ComponentProps<typeof CollapseButton> & React.ComponentProps<typeof SidebarContent>;
declare const meta: {
    title: string;
    component: (props: Props) => React.JSX.Element;
    tags: string[];
    args: {
        desktopIcon: null;
        desktopIconCollapsed: null;
        children: React.JSX.Element;
        draggable: false;
        collapseButtonsInside: false;
        mobileIcon: React.JSX.Element;
        mobileIconCollapsed: React.JSX.Element;
    };
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        desktopIcon: React.ReactNode;
        desktopIconCollapsed?: React.ReactNode;
        mobileIcon: React.ReactNode;
        mobileIconCollapsed?: React.ReactNode;
        customStyle?: ({
            collapsedButton?: string;
            uncollapsedButton?: string;
        } & {
            sidebarContent?: string;
            sidebarContainer?: string;
            sidebarHeader?: string;
        }) | undefined;
        children: React.ReactNode;
        draggable?: boolean | undefined;
        minWidth?: number | undefined;
        collapseButtonsInside?: boolean | undefined;
        customHeader?: React.ReactNode;
        toggleIcon?: React.ReactNode;
        tooltipIconText?: React.ReactNode;
        toggleSidebar?: boolean | undefined;
        onToggleSidebar?: ((toggle: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>) | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithMinwidth: Story;
export declare const Draggable: Story;
export declare const WithCustomHeader: Story;
