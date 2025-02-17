import type { StoryObj } from "@storybook/react";
import { RadioButtonGroup } from "../components";
declare const meta: {
    title: string;
    component: typeof RadioButtonGroup;
    tags: string[];
    args: {
        options: {
            optionText: string;
            optionValue: string;
        }[];
        name: string;
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicRadioButtonGroup: Story;
export declare const DisabledRadioButtonGroup: Story;
