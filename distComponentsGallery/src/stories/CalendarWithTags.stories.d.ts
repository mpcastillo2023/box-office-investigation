import type { StoryObj } from "@storybook/react";
import { DateInfo } from "@cg-components/CalendarWithTags/Types/Types";
declare const meta: {
    title: string;
    component: ({ currentLocale, disabled, onChange, value, minDate, maxDate, className }: {
        currentLocale: string;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        onChange?: (tags: string[]) => void;
        value?: DateInfo[];
        disabled?: boolean;
        className?: string;
    }) => JSX.Element;
    tags: string[];
    args: {
        currentLocale: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCalendarWithTags: Story;
