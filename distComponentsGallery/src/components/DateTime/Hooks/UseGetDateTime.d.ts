type Props = {
    dateToTransform: string | Date;
    onChange?: (val: Date | string) => void;
};
declare const UseGetDateTime: ({ dateToTransform, onChange }: Props) => {
    time: string;
    date: string;
    handleChangeDate: (dateValue: string | Date) => void;
    handleChangeTime: (timeValue: string | Date) => void;
};
export default UseGetDateTime;
