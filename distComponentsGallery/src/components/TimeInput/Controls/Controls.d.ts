import React from "react";
export type ControlProps = {
    inputType: "hours" | "minutes" | "seconds";
    disabled: boolean | undefined;
    updateTime: (hour: string, minute: string, seconds: string) => void;
    hours: string;
    minutes: string;
    seconds: string;
    setHours: (value: React.SetStateAction<string>) => void;
    setMinutes: (value: React.SetStateAction<string>) => void;
    setSeconds: (value: React.SetStateAction<string>) => void;
};
declare const Controls: React.NamedExoticComponent<ControlProps>;
export default Controls;
