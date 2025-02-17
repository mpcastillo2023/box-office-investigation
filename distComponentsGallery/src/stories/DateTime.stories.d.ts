import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ currentLocale, disabled, value, onChange, required, maxDate, minDate, id, timeInputClassName, hasSeconds }: {
        currentLocale: string;
        disabled?: boolean;
        value: Date | string;
        onChange?: (value: Date | string) => void;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        required?: boolean;
        id: string;
        calendarInputClassName?: string | undefined;
        className?: string | undefined;
        timeInputClassName?: string | undefined;
        hasSeconds?: boolean;
    }) => JSX.Element;
    tags: string[];
    args: {
        id: string;
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultDateTimeInput: Story;
export declare const StartTimeInput: Story;
export declare const EndTimeInput: Story;
export declare const SpecificTimeAndDate: Story;
export declare const DateTimeDisabled: Story;
