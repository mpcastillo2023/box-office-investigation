export const getCurrentDateAndTime = (currentLocale = "en", date = new Date()) => {
    const currentDay = date.toLocaleString(currentLocale, {
        day: "numeric"
    });
    const currentMonth = date.toLocaleString(currentLocale, {
        month: "numeric"
    });
    const currentYear = date.toLocaleString(currentLocale, {
        year: "numeric"
    });
    const currentDate = date.toLocaleString(currentLocale, {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    });
    const currentTime = date.toLocaleTimeString(currentLocale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    return { currentDay, currentMonth, currentYear, currentTime, currentDate };
};
