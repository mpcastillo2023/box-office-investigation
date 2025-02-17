import type { StoryObj } from "@storybook/react";
import CalendarInput from "@cg-components/CalendarInput/CalendarInput";
declare const meta: {
    title: string;
    component: typeof CalendarInput;
    tags: string[];
    args: {
        onChange: undefined;
        onCalendarOpen: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCalendarInput: Story;
export declare const CalendarInputWithMinAndMaxDate: Story;
export declare const CalendarInputDisabled: Story;
