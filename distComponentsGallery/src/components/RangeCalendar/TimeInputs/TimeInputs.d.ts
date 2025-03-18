import React from "react";
import { Translations } from "../RangeCalendars";
type Props = {
    startTime?: string | null;
    endTime?: string | null;
    shouldDisplayTimeInputs?: boolean;
    setShouldDisplayTimeInputs: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    onChangeStartTimeHandler: (newTime: string) => void;
    onChangeEndTimeHandler: (newTime: string) => void;
    translations?: Translations;
    placeholder?: string;
    startDateText: string | null;
    endDateText: string | null;
};
export default function TimeInputs({ startDateText, endDateText, startTime, endTime, shouldDisplayTimeInputs, setShouldDisplayTimeInputs, onChangeStartTimeHandler, onChangeEndTimeHandler, translations, placeholder }: Props): React.JSX.Element;
export {};
