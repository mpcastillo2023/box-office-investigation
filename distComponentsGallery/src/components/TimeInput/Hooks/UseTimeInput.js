import { useCallback, useRef, useState } from "react";
import { formatHoursValue, formatMinutesValue, formatSecondsValue } from "../Utils";
const UseTimeInput = ({ value, onChange, hasSeconds }) => {
    const [hours, setHours] = useState(formatHoursValue(value));
    const [minutes, setMinutes] = useState(formatMinutesValue(value));
    const [seconds, setSeconds] = useState(formatSecondsValue(value));
    const [inputType, setInputType] = useState("hours");
    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);
    const fullCurrentTime = `${hours}:${minutes}:${seconds}`;
    const fullTimeValues = `${formatHoursValue(value)}:${formatMinutesValue(value)}:${formatSecondsValue(value)}`;
    if (value && onChange) {
        if (fullTimeValues !== fullCurrentTime) {
            setHours(formatHoursValue(value));
            setMinutes(formatMinutesValue(value));
            setSeconds(formatSecondsValue(value));
        }
    }
    const updateTime = useCallback((hoursVal, minutesVal, secondsVal) => {
        if (onChange && value) {
            const newTime = hasSeconds
                ? `${hoursVal}:${minutesVal}:${secondsVal}`
                : `${hoursVal}:${minutesVal}`;
            onChange(newTime);
            return;
        }
        else {
            setHours(hoursVal);
            setMinutes(minutesVal);
            setSeconds(secondsVal);
        }
    }, [onChange, value]);
    const handleHours = (e) => {
        const { currentTarget } = e;
        if (currentTarget.value === "") {
            updateTime(currentTarget.value, minutes, seconds);
            return;
        }
        if (currentTarget.value &&
            currentTarget.valueAsNumber < 24 &&
            currentTarget.valueAsNumber >= 0) {
            const lastNumbers = currentTarget.value.slice(-2);
            if (onChange) {
                updateTime(lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers, minutes, seconds);
            }
            else {
                setHours(lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers);
            }
        }
    };
    const handleMinutes = (e) => {
        const { currentTarget } = e;
        if (currentTarget.value === "") {
            updateTime(hours, currentTarget.value, seconds);
            return;
        }
        if (currentTarget.value &&
            currentTarget.valueAsNumber < 60 &&
            currentTarget.valueAsNumber >= 0) {
            const lastNumbers = currentTarget.value.slice(-2);
            if (onChange) {
                updateTime(hours, lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers, seconds);
            }
            else {
                setMinutes(lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers);
            }
        }
    };
    const handleSeconds = (e) => {
        const { currentTarget } = e;
        if (currentTarget.value === "") {
            updateTime(hours, minutes, currentTarget.value);
            return;
        }
        if (currentTarget.value &&
            currentTarget.valueAsNumber < 60 &&
            currentTarget.valueAsNumber >= 0) {
            const lastNumbers = currentTarget.value.slice(-2);
            if (onChange) {
                updateTime(hours, minutes, lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers);
            }
            else {
                setSeconds(lastNumbers.length < 2 ? `0${lastNumbers}` : lastNumbers);
            }
        }
    };
    return {
        hoursRef,
        minutesRef,
        secondsRef,
        handleHours,
        handleMinutes,
        handleSeconds,
        setInputType,
        inputType,
        updateTime,
        hours,
        minutes,
        seconds,
        setHours,
        setMinutes,
        setSeconds
    };
};
export default UseTimeInput;
