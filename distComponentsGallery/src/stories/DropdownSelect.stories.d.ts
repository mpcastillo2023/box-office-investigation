import type { StoryObj } from "@storybook/react";
import { DropdownSelect } from "../components";
declare const meta: {
    title: string;
    component: typeof DropdownSelect;
    tags: string[];
    args: {
        optionList: ({
            optionText: string;
            optionValue: string;
            optionAvailability: false;
        } | {
            optionText: string;
            optionValue: string;
            optionAvailability: true;
        })[];
        onChange: undefined;
        iconOnLeft: false;
        placeholder: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithLabel: Story;
export declare const WithoutLabel: Story;
export declare const FullSize: Story;
export declare const DisabledDropdownSelect: Story;
export declare const WithPreselectedValue: Story;
export declare const WithDifferentIcon: Story;
export declare const WithSubtitle: Story;
