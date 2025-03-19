const weekDaysOrderMessages = {
    ["1, 7"]: "Fines de semana",
    ["2, 3, 4, 5, 6"]: "Entre semana",
    ["1, 2, 3, 4, 5, 6, 7"]: "Todos los días"
};
export const renderDaysSelected = (weekDays, value, customOrderMessage, noDaysSelectedMessages) => {
    const filteredByChecked = [...weekDays].filter((day) => value.includes(day.weekDay));
    const resultDays = filteredByChecked.map((day) => day.optionValue);
    const daysIndex = filteredByChecked
        .map((day) => day.weekDay)
        .sort((a, b) => a - b)
        .join(", ");
    if (customOrderMessage) {
        return customOrderMessage[daysIndex] != undefined
            ? customOrderMessage[daysIndex]
            : resultDays.join(", ") || noDaysSelectedMessages;
    }
    else {
        return weekDaysOrderMessages[daysIndex] != undefined
            ? weekDaysOrderMessages[daysIndex]
            : resultDays.join(", ") || noDaysSelectedMessages;
    }
};
