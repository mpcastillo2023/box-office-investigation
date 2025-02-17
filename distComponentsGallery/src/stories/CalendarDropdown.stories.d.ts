import type { StoryObj } from "@storybook/react";
import CalendarDropdown from "@cg-components/CalendarDropdown/CalendarDropdown";
declare const meta: {
    title: string;
    component: typeof CalendarDropdown;
    tags: string[];
    args: {
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCalendarDropdown: Story;
