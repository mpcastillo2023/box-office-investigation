import type { StoryObj } from "@storybook/react";
import { DropdownMultipleSelect } from "../components";
declare const meta: {
    title: string;
    component: typeof DropdownMultipleSelect;
    tags: string[];
    args: {
        optionList: {
            optionText: string;
            optionValue: string;
        }[];
        onChange: undefined;
        label: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSelectAllOptions: Story;
