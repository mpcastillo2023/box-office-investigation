import type { StoryObj } from "@storybook/react";
import { RangeCalendar } from "../components";
declare const meta: {
    title: string;
    component: typeof RangeCalendar;
    tags: string[];
    args: {
        onChangeStartDate: undefined;
        onChangeEndDate: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicRangeCalendar: Story;
export declare const RangeCalendarWithTime: Story;
