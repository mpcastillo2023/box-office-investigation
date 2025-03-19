import * as React from "react";
import { TimeInput } from "../components";
const meta = {
    title: "TimeInput",
    component: TimeInput,
    tags: ["autodocs"],
    args: {}
};
export default meta;
export const DefaultTimeInput = {
    args: {},
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement("div", { style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto",
                        flexDirection: "column"
                    } },
                    React.createElement(TimeInput, { value: new Date(), hoursPlaceholder: "hh", minutesPlaceholder: "mm" }))));
        }
    ]
};
export const TimeInputWithSeconds = {
    args: {
        value: new Date()
    },
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement(TimeInput, { value: new Date(), hasSeconds: true })));
        }
    ]
};
export const TimeInputWithSpecificTime = {
    args: {
        value: new Date()
    },
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement(TimeInput, { value: new Date("2024-06-10T04:08:47.202Z"), hasSeconds: true })));
        }
    ]
};
export const TimeInputStartValue = {
    args: {
        hoursPlaceholder: "hh",
        minutesPlaceholder: "mm",
        value: "00:00"
    },
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement(TimeInput, { value: "00:00" })));
        }
    ]
};
export const TimeInputEndValue = {
    args: {
        hoursPlaceholder: "hh",
        minutesPlaceholder: "mm",
        value: new Date(2024, 1, 21, 23, 59)
    },
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement(TimeInput, { value: new Date(2024, 1, 21, 23, 59) })));
        }
    ]
};
export const TimeInputWithValueAndDisabled = {
    args: {
        hoursPlaceholder: "hh",
        minutesPlaceholder: "mm",
        value: "20:30",
        disabled: true
    },
    decorators: [
        () => {
            return (React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                    width: "100%"
                } },
                React.createElement(TimeInput, { value: new Date(), disabled: true })));
        }
    ]
};
