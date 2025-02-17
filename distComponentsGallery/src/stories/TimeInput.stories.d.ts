import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ id, value, dataTestId, hoursPlaceholder, minutesPlaceholder, secondsPlaceholder, name, disabled, required, onChange, className, ariaLabel, iconAriaLabel, hoursAriaLabel, minutesAriaLabel, secondsAriaLabel, currentLocale, hasSeconds, isThereError, customContainerClass }: import("../components/TimeInput/Types/Types").TimeInputProps) => JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultTimeInput: Story;
export declare const TimeInputWithSeconds: Story;
export declare const TimeInputWithSpecificTime: Story;
export declare const TimeInputStartValue: Story;
export declare const TimeInputEndValue: Story;
export declare const TimeInputWithValueAndDisabled: Story;
