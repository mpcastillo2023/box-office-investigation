import type { StoryObj } from "@storybook/react";
import { Breadcrumb } from "../components";
import React from "react";
declare const meta: {
    title: string;
    component: typeof Breadcrumb;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        dividers?: React.ReactNode;
        numberOfRemovedPaths?: number | undefined;
        textTranslation?: Record<string, string> | undefined;
        id?: string | undefined;
    }>) => React.JSX.Element)[];
    args: {
        numberOfRemovedPaths: number;
        textTranslation: {
            dashboard: string;
            "dashboard/datos": string;
            "dashboard/datos/basicos": string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
