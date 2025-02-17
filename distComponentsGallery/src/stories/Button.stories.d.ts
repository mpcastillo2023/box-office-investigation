import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ children, variant, rounded, size, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        children: React.ReactNode;
        variant?: "primary" | "secondary" | "empty" | "link" | "light" | "";
        size?: "large" | "medium" | "icon" | "smallIcon" | "full";
        rounded?: boolean;
    }) => React.JSX.Element;
    tags: string[];
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const SecondaryDisabled: Story;
export declare const Link: Story;
export declare const Empty: Story;
export declare const ButtonDisabled: Story;
export declare const ButtonMediumSize: Story;
export declare const ButtonRounded: Story;
export declare const ButtonWithLeftIcon: Story;
export declare const ButtonWithIcon: Story;
export declare const ButtonWithSmallIcon: Story;
