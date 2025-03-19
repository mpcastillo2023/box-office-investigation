export const TwentyFourHoursRegex = new RegExp(/^(2[0-3]|[01]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/);
export const transformFromDateToTime = (dateValue) => {
    if (dateValue instanceof Date) {
        const hours = dateValue?.getHours().toString();
        const minutes = dateValue?.getMinutes().toString();
        const seconds = dateValue?.getSeconds().toString();
        const newHours = parseInt(hours) < 10 ? `0${hours}` : hours.toString();
        const newMinutes = parseInt(minutes) < 10 ? `0${minutes}` : minutes.toString();
        const newSeconds = parseInt(seconds) < 10 ? `0${seconds}` : seconds.toString();
        return `${newHours || "00"}:${newMinutes || "00"}:${newSeconds || "00"}`;
    }
    if (!isNaN(new Date(dateValue).getTime())) {
        const hours = new Date(dateValue).getHours();
        const minutes = new Date(dateValue).getMinutes();
        const seconds = new Date(dateValue).getSeconds();
        const newHours = hours < 10 ? `0${hours}` : hours.toString();
        const newMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
        const newSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
        return `${newHours}:${newMinutes}:${newSeconds}`;
    }
    if (typeof dateValue === "string" && dateValue.includes(":")) {
        return dateValue;
    }
    return "00:00:00";
};
export const transformDateFromValue = (dateToTransform) => {
    if (dateToTransform instanceof Date) {
        const day = dateToTransform.getDate();
        const month = dateToTransform.getMonth() + 1;
        const year = dateToTransform.getFullYear();
        const fullDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        return fullDate;
    }
    if (typeof dateToTransform === "string" &&
        TwentyFourHoursRegex.test(dateToTransform)) {
        return dateToTransform.split("T")[0];
    }
    if (typeof dateToTransform === "string" &&
        !TwentyFourHoursRegex.test(dateToTransform)) {
        if (!isNaN(new Date(dateToTransform).getTime())) {
            const day = new Date(dateToTransform).getDate();
            const month = new Date(dateToTransform).getMonth() + 1;
            const year = new Date(dateToTransform).getFullYear();
            const fullDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
            return fullDate;
        }
        else {
            return dateToTransform.split(" ")[0];
        }
    }
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const currentFullDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
    return currentFullDate;
};
