import type { StoryObj } from "@storybook/react";
import { Checkbox } from "../components";
declare const meta: {
    title: string;
    component: typeof Checkbox;
    tags: string[];
    args: {
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimaryCheckbox: Story;
export declare const DisabledCheckbox: Story;
export declare const StatusTextCheckbox: Story;
