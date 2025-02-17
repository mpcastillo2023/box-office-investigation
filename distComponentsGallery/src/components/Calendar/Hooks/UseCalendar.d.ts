import Calendar from "../Calendar";
export default function UseCalendar({ onChange, value, disabled, withMultipleDate }: React.ComponentProps<typeof Calendar>): {
    day: number | undefined;
    month: number;
    year: number;
    currentLocale: string;
    selectDayHandler: (day: number) => void;
    nextMonthHandler: () => void;
    prevMonthHandler: () => void;
    nextYearHandler: () => void;
    prevYearHandler: () => void;
    selectedDates: Date | Date[] | undefined;
};
