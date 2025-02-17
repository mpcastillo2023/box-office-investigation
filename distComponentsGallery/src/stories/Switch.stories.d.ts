import type { StoryObj } from "@storybook/react";
import { Switch } from "../components";
declare const meta: {
    title: string;
    component: typeof Switch;
    tags: string[];
    args: {
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSwitch: Story;
export declare const DisabledSwitch: Story;
export declare const DisabledCheckedSwitch: Story;
export declare const CheckedSwitch: Story;
export declare const LabeledSwitch: Story;
