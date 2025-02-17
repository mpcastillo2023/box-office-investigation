import React from "react";
import type { StoryObj } from "@storybook/react";
import { OptimizedSearch } from "@cg-components/index";
declare const meta: {
    title: string;
    component: typeof OptimizedSearch;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        data: import("@cg-components/index").MenuItem[];
        placeholder: string;
        notResultsText: string;
        className?: string | undefined;
        focusOnRender?: boolean | undefined;
        customPlaceholder?: React.ReactNode;
        searchInputClass?: string | undefined;
    }>, props: import("@storybook/csf").StoryContext<import("@storybook/react").ReactRenderer, {
        data: import("@cg-components/index").MenuItem[];
        placeholder: string;
        notResultsText: string;
        className?: string | undefined;
        focusOnRender?: boolean | undefined;
        customPlaceholder?: React.ReactNode;
        searchInputClass?: string | undefined;
    }>) => React.JSX.Element)[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicQuickSearch: Story;
