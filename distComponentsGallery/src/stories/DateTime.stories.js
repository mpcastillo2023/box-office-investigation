import React from "react";
import { DateTime } from "../components";
const meta = {
    title: "DateTime",
    component: DateTime,
    tags: ["autodocs"],
    args: {
        id: "stories",
        onChange: undefined
    }
};
export default meta;
export const DefaultDateTimeInput = {
    args: {
        currentLocale: "en-US",
        disabled: false,
        value: new Date()
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const StartTimeInput = {
    args: {
        currentLocale: "en-US",
        value: new Date(2024, 8, 29, 0, 0)
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const EndTimeInput = {
    args: {
        currentLocale: "en-US",
        value: new Date(2024, 8, 29, 23, 59)
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const SpecificTimeAndDate = {
    args: {
        currentLocale: "en",
        id: "stories",
        value: new Date(2024, 11, 25, 10, 30)
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
export const DateTimeDisabled = {
    args: {
        currentLocale: "en",
        id: "stories",
        value: new Date(2024, 11, 25, 10, 30),
        disabled: true
    },
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { width: "400px" } },
                React.createElement(Story, { props: props })));
        }
    ]
};
