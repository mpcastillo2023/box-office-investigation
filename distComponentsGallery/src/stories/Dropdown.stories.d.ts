import type { StoryObj } from "@storybook/react";
import { Dropdown } from "../components";
declare const meta: {
    title: string;
    component: typeof Dropdown;
    tags: string[];
    args: {
        dropdownElement: string;
        dropdownContent: string;
        autowidth: true;
        onDropdownToggle: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithIcon: Story;
