type Props = {
    value?: number[];
    onChange?: (value: number[]) => void;
};
declare const UseWeekDaysSelect: ({ onChange, value }: Props) => {
    handleSelectedDays: (dayIndex: number) => void;
    value: number[];
};
export default UseWeekDaysSelect;
