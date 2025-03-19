function daysForLocale(locale) {
    const mondayStartDate = new Date(2024, 0, 1); // January 1, 2024
    const weekdays = [];
    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(mondayStartDate);
        currentDate.setDate(mondayStartDate.getDate() + i);
        weekdays.push(formatter.format(currentDate));
    }
    return weekdays;
}
export default daysForLocale;
