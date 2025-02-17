import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ role, body, title, testId, onClickEvent, tabIndex, children, className, toggleEdit, expandIcon, collapseIcon, expanded, variant, shouldDisplayIcon, customStyleClasses, ...props }: {
        title: React.ReactNode;
        children: React.ReactNode;
        collapseIcon?: React.ReactNode;
        expandIcon?: React.ReactNode;
        body?: React.ReactNode;
        toggleEdit?: React.ReactNode;
        className?: string;
        expanded?: boolean;
        onClickEvent?: React.MouseEventHandler<HTMLDivElement>;
        role?: React.AriaRole;
        testId?: string;
        tabIndex?: number;
        shouldOpen?: boolean;
        shouldDisplayIcon?: boolean;
        variant?: "primary" | "simple";
        customStyleClasses?: import("../components/Accordion/Types/types").CustomStyleClasses;
    }) => React.JSX.Element;
    tags: string[];
    args: {
        title: string;
        children: React.JSX.Element;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const OpenAccordion: Story;
export declare const ClosedAccordion: Story;
