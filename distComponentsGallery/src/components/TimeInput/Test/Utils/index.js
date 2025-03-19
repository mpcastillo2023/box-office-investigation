export const getCurrentTime = (locale = undefined, date = undefined) => {
    if (date !== undefined) {
        const [hours, minutes] = new Date(date)
            .toLocaleTimeString(locale, {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit"
        })
            .split(":");
        return { hours, minutes };
    }
    else {
        const [hours, minutes] = new Date()
            .toLocaleTimeString(locale, {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit"
        })
            .split(":");
        return { hours, minutes };
    }
};
