import type { StoryObj } from "@storybook/react";
import { Slider } from "../components";
import React from "react";
declare const meta: {
    title: string;
    component: typeof Slider;
    tags: string[];
    args: {};
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        min?: number | undefined;
        max?: number | undefined;
        value?: number | undefined;
        onChange?: ((sliderValue: number) => void) | undefined;
        disabled?: boolean | undefined;
    }>, props: import("@storybook/csf").StoryContext<import("@storybook/react").ReactRenderer, {
        min?: number | undefined;
        max?: number | undefined;
        value?: number | undefined;
        onChange?: ((sliderValue: number) => void) | undefined;
        disabled?: boolean | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSlider: Story;
export declare const MinSlider: Story;
export declare const MaxSlider: Story;
export declare const MinMaxSlider: Story;
