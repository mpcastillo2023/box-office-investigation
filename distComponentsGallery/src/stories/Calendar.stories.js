import { Calendar } from "../components";
import React from "react";
const afterTomorrow = new Date();
afterTomorrow.setDate(afterTomorrow.getDate() + 2);
const meta = {
    title: "Calendar",
    component: Calendar,
    tags: ["autodocs"],
    args: {
        withMultipleDate: false
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "300px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export default meta;
export const DefaultCalendar = {
    args: {}
};
export const MultipleDaysCalendar = {
    args: {
        withMultipleDate: true
    }
};
export const WithMinAndMaxDate = {
    args: {
        minDate: new Date(new Date().setHours(0, 0, 0, 0)),
        maxDate: afterTomorrow
    }
};
export const WithYearButton = {
    args: {
        shouldRenderYearButtons: true
    }
};
