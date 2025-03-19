export const addHours = (prev) => {
    const newHour = prev === "" ? "00" : parseInt(prev) + 1;
    if (parseInt(newHour.toString()) < 24)
        return parseInt(newHour.toString()) < 10
            ? `0${newHour}`
            : newHour.toString();
    return prev;
};
export const removeHours = (prev) => {
    const newHour = prev === "" ? "00" : parseInt(prev) - 1;
    if (parseInt(newHour.toString()) >= 0)
        return parseInt(newHour.toString()) < 10
            ? `0${newHour}`
            : newHour.toString();
    return prev;
};
export const addMinutes = (prev) => {
    const newMinutes = prev === "" ? "00" : parseInt(prev) + 1;
    if (parseInt(newMinutes.toString()) <= 59) {
        return parseInt(newMinutes.toString()) < 10
            ? `0${newMinutes}`
            : newMinutes.toString();
    }
    return prev;
};
export const removeMinutes = (prev) => {
    const newMinutes = prev === "" ? "00" : parseInt(prev) - 1;
    if (parseInt(newMinutes.toString()) >= 0)
        return parseInt(newMinutes.toString()) < 10
            ? `0${newMinutes}`
            : newMinutes.toString();
    return prev;
};
export const addSeconds = (prev) => {
    const newSeconds = prev === "" ? "00" : parseInt(prev) + 1;
    if (parseInt(newSeconds.toString()) <= 59) {
        return parseInt(newSeconds.toString()) < 10
            ? `0${newSeconds}`
            : newSeconds.toString();
    }
    return prev;
};
export const removeSeconds = (prev) => {
    const newSeconds = prev === "" ? "00" : parseInt(prev) - 1;
    if (parseInt(newSeconds.toString()) >= 0)
        return parseInt(newSeconds.toString()) < 10
            ? `0${newSeconds}`
            : newSeconds.toString();
    return prev;
};
export const setFocusOnInput = (ref) => {
    ref.current?.select();
    ref.current?.focus();
};
