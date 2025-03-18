import RangeCalendar from "../RangeCalendars";
export default function UseRangeCalendar({ onChangeStartDate, onChangeEndDate, startDate, endDate, startTime, endTime, onChangeStartTime, onChangeEndTime, disabled, areTimeInputsEnabled }: React.ComponentProps<typeof RangeCalendar>): {
    month: number;
    year: number;
    selectDayHandler: (day: number, month: number, year: number) => void;
    nextMonthHandler: () => void;
    prevMonthHandler: () => void;
    lastMonthHandler: () => void;
    currentMonthHandler: () => void;
    startDate: Date | null | undefined;
    endDate: Date | null | undefined;
    startTime: string | null;
    endTime: string | null;
    shouldDisplayTimeInputs: boolean | undefined;
    setShouldDisplayTimeInputs: import("react").Dispatch<import("react").SetStateAction<boolean | undefined>>;
    onChangeStartTimeHandler: (newTime: string) => void;
    onChangeEndTimeHandler: (newTime: string) => void;
};
