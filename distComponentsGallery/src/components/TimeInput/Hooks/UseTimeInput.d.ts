import { TimeInputProps } from "../Types/Types";
type Props = {
    value?: TimeInputProps["value"];
    currentLocale?: TimeInputProps["currentLocale"];
    onChange?: TimeInputProps["onChange"];
    hasSeconds: TimeInputProps["hasSeconds"];
};
declare const UseTimeInput: ({ value, onChange, hasSeconds }: Props) => {
    hoursRef: import("react").MutableRefObject<HTMLInputElement | null>;
    minutesRef: import("react").MutableRefObject<HTMLInputElement | null>;
    secondsRef: import("react").MutableRefObject<HTMLInputElement | null>;
    handleHours: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMinutes: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSeconds: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setInputType: import("react").Dispatch<import("react").SetStateAction<"hours" | "minutes" | "seconds">>;
    inputType: "hours" | "minutes" | "seconds";
    updateTime: (hoursVal: string, minutesVal: string, secondsVal: string) => void;
    hours: string;
    minutes: string;
    seconds: string;
    setHours: import("react").Dispatch<import("react").SetStateAction<string>>;
    setMinutes: import("react").Dispatch<import("react").SetStateAction<string>>;
    setSeconds: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export default UseTimeInput;
