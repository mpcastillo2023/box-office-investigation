import React from "react";
import { WeekDaysSelect } from "@cg-components/index";
import { fullDaysOptionsEn } from "@cg-components/WeekDaysSelect/OptionList/OptionList";
const weekDaysOrderMessage = {
    ["1, 7"]: "Weekend",
    ["2, 3, 4, 5, 6"]: "Weekdays",
    ["1, 2, 3, 4, 5, 6, 7"]: "Every day"
};
const meta = {
    title: "WeekDaysSelect",
    component: WeekDaysSelect,
    tags: ["autodocs"],
    args: {
        onChange: () => { }
    }
};
export default meta;
export const DefaultWeekDaysSelect = {
    args: {
        options: fullDaysOptionsEn
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const DisabledWeekDaysSelect = {
    args: {
        disabled: true,
        options: fullDaysOptionsEn
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const WeekDaysSelectedWeekends = {
    args: {
        value: [1, 7],
        options: fullDaysOptionsEn
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const WeekDaysSelectedOnlyWeek = {
    args: {
        value: [2, 3, 4, 5, 6],
        options: fullDaysOptionsEn
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const WeekDaysSelectEnglishOptions = {
    args: {
        options: fullDaysOptionsEn,
        noDaysSelectedMessage: "Select some day",
        weekDaysOrderMessage: weekDaysOrderMessage
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
