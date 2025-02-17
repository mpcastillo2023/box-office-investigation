import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ icon, activeIcon, className, disabled, ariaLabel, noDaysSelectedMessage, weekDaysOrderMessage, options, ...props }: {
        disabled?: boolean;
        ariaLabel?: string;
        icon?: React.ReactNode;
        activeIcon?: React.ReactNode;
        className?: string;
        hasError?: boolean;
        value?: number[];
        onChange?: (value: number[]) => void;
        options: import("../components/WeekDaysSelect/Types/Types").FullDaysOptions[];
        weekDaysOrderMessage?: Record<string, string>;
        noDaysSelectedMessage?: string;
        required?: boolean;
    }) => JSX.Element;
    tags: string[];
    args: {
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultWeekDaysSelect: Story;
export declare const DisabledWeekDaysSelect: Story;
export declare const WeekDaysSelectedWeekends: Story;
export declare const WeekDaysSelectedOnlyWeek: Story;
export declare const WeekDaysSelectEnglishOptions: Story;
