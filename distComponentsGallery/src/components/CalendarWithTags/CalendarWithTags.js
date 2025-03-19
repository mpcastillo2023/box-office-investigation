import React from "react";
import { Calendar } from "..";
import Tags from "./Tags/Tags";
import TwoWayArrows from "@cg-icons/TwoWayArrows.svg";
import styles from "./Styles/styles.module.scss";
import UseCalendarWithTags from "./Hooks/UseCalendarWithTags";
/**
 * CalendarWithTags component represents a calendar UI that allows users to select dates,
 * and those selected dates are displayed as tags next to the calendar.
 *
 * Dates can be added by clicking on the date in the calendar and removed by clicking the corresponding tag.
 *
 * @param {Props} props - Props for the CalendarWithTags component.
 *
 * @returns {JSX.Element}
 */
const CalendarWithTags = ({ currentLocale = "es", disabled, onChange, value, minDate, maxDate, className }) => {
    const { tags, handleRemove, handleAddTags } = UseCalendarWithTags({
        value,
        currentLocale,
        onChange
    });
    const tagComponent = (tag) => (React.createElement(Tags, { className: styles.button, onClick: () => handleRemove(tag.formatedDate), key: tag.formatedDate, "data-testid": `tag-${tag.formatedDate}`, disabled: disabled }, tag.formatedDate));
    const renderTags = () => {
        return Array.isArray(value) && value?.length
            ? value.map((tag) => tagComponent(tag))
            : tags.map((tag) => tagComponent(tag));
    };
    const dateArray = tags.map((tag) => {
        const dateWithoutTime = tag.date.split("T")[0];
        const [year, month, day] = dateWithoutTime.split("-");
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${styles.calendarAndTagsContainer} ${className}`, "data-testid": "calendar-with-tags-container" },
            React.createElement("div", { className: styles.calendarContainer },
                React.createElement(Calendar, { minDate: minDate ? minDate : new Date(), maxDate: maxDate, onChange: (value) => {
                        handleAddTags(value);
                    }, disabled: disabled, value: dateArray, withMultipleDate: true })),
            tags.length ? (React.createElement("div", { className: styles.twoWayArrowsIcon },
                React.createElement(TwoWayArrows, null))) : null,
            React.createElement("div", { className: styles.tagsContainer, "data-testid": "tags-container" }, renderTags()))));
};
export default CalendarWithTags;
