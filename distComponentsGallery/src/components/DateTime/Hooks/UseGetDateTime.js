import { useState } from "react";
import { transformDateFromValue, transformFromDateToTime } from "./Utils";
const UseGetDateTime = ({ dateToTransform, onChange }) => {
    const [date, setDate] = useState(transformDateFromValue(dateToTransform));
    const [time, setTime] = useState(transformFromDateToTime(dateToTransform));
    const fullDateTime = `${date} ${time}`;
    const fullDateValues = `${transformDateFromValue(dateToTransform)} ${transformFromDateToTime(dateToTransform)}`;
    if (dateToTransform && onChange) {
        if (fullDateValues !== fullDateTime) {
            setDate(transformDateFromValue(dateToTransform));
            setTime(transformFromDateToTime(dateToTransform));
        }
    }
    const handleTime = (timeValue) => {
        if (onChange && dateToTransform) {
            handleUpdate(date, timeValue);
        }
        else {
            setTime(transformFromDateToTime(timeValue));
        }
    };
    const handleDate = (dateValue) => {
        handleUpdate(transformDateFromValue(dateValue), time);
    };
    const handleUpdate = (dateValue, timeValue) => {
        if (onChange && dateToTransform) {
            if (timeValue instanceof Date && dateValue instanceof Date) {
                const neDate = new Date(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate(), timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
                onChange(neDate);
            }
            else {
                onChange(`${dateValue} ${timeValue}`);
            }
        }
    };
    return {
        time,
        date,
        handleChangeDate: handleDate,
        handleChangeTime: handleTime
    };
};
export default UseGetDateTime;
