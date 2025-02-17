import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: {
        position: "top" | "right" | "bottom" | "left";
        tooltipText: string | React.ReactNode;
        tooltipToggle?: React.ReactNode;
        className?: string;
        withSeparator?: boolean;
    }) => React.JSX.Element;
    tags: string[];
    args: {
        tooltipText: React.JSX.Element;
        tooltipToggle: React.JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TooltipTop: Story;
export declare const TooltipRight: Story;
export declare const TooltipBottom: Story;
export declare const TooltipLeft: Story;
