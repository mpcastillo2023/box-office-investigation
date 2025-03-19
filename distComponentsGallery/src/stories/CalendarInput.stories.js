import CalendarInput from "@cg-components/CalendarInput/CalendarInput";
import React from "react";
const afterTomorrow = new Date();
afterTomorrow.setDate(afterTomorrow.getDate() + 2);
const meta = {
    title: "CalendarInput",
    component: CalendarInput,
    tags: ["autodocs"],
    args: {
        onChange: undefined,
        onCalendarOpen: undefined
    }
};
export default meta;
export const DefaultCalendarInput = {
    args: {},
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "500px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const CalendarInputWithMinAndMaxDate = {
    args: {
        minDate: new Date(new Date().setHours(0, 0, 0, 0)),
        maxDate: afterTomorrow
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "500px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const CalendarInputDisabled = {
    args: {
        minDate: new Date(new Date().setHours(0, 0, 0, 0)),
        maxDate: afterTomorrow,
        disabled: true
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "500px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
