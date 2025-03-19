import React from "react";
import Checkbox from "@cg-components/Checkbox/Checkbox";
import styles from "../Styles/styles.module.scss";
export default function WeekDays({ filteredOptions, handleSelectedDays, disabled, value }) {
    const renderOptions = () => {
        return filteredOptions.map((dayInfo) => {
            return (React.createElement("li", { key: dayInfo.optionText, className: styles.weekDayList, "data-testid": "weekday-list" },
                React.createElement(Checkbox, { disabled: disabled, textBeside: React.createElement("div", { className: styles.dayText }, dayInfo.optionText), onChange: () => {
                        handleSelectedDays(dayInfo.weekDay);
                    }, customStyles: styles, value: value.includes(dayInfo.weekDay) })));
        });
    };
    return React.createElement("ul", { "aria-label": "weekdays-list" }, renderOptions());
}
