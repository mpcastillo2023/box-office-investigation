import React from "react";
import RangeCalendar from "../RangeCalendars";
type Props = {
    startDate?: Date | null;
    endDate?: Date | null;
    startTime?: string | null;
    endTime?: string | null;
} & React.ComponentProps<typeof RangeCalendar>;
export default function UseRangeCalendarTexts(props: Props): {
    dropdownText: string | React.JSX.Element;
    placeholder: string;
    translations: import("../RangeCalendars").Translations;
    startDateTextTimeInput: string | null;
    endDateTextTimeInput: string | null;
};
export {};
