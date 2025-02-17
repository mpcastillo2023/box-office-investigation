import type { StoryObj } from "@storybook/react";
import { Calendar } from "../components";
import React from "react";
declare const meta: {
    title: string;
    component: typeof Calendar;
    tags: string[];
    args: {
        withMultipleDate: false;
    };
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        disabled?: boolean | undefined;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        shouldRenderYearButtons?: boolean | undefined;
        customStyles?: import("../components/Calendar/Types/Types").CustomStyles | undefined;
        withMultipleDate: true;
        onChange?: ((date: Date[]) => void) | undefined;
        value?: Date[] | undefined;
    } | {
        disabled?: boolean | undefined;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        shouldRenderYearButtons?: boolean | undefined;
        customStyles?: import("../components/Calendar/Types/Types").CustomStyles | undefined;
        withMultipleDate?: false | undefined;
        onChange?: ((date: Date) => void) | undefined;
        value?: Date | undefined;
    }>, props: import("@storybook/csf").StoryContext<import("@storybook/react").ReactRenderer, {
        disabled?: boolean | undefined;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        shouldRenderYearButtons?: boolean | undefined;
        customStyles?: import("../components/Calendar/Types/Types").CustomStyles | undefined;
        withMultipleDate: true;
        onChange?: ((date: Date[]) => void) | undefined;
        value?: Date[] | undefined;
    } | {
        disabled?: boolean | undefined;
        minDate?: Date | undefined;
        maxDate?: Date | undefined;
        shouldRenderYearButtons?: boolean | undefined;
        customStyles?: import("../components/Calendar/Types/Types").CustomStyles | undefined;
        withMultipleDate?: false | undefined;
        onChange?: ((date: Date) => void) | undefined;
        value?: Date | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCalendar: Story;
export declare const MultipleDaysCalendar: Story;
export declare const WithMinAndMaxDate: Story;
export declare const WithYearButton: Story;
