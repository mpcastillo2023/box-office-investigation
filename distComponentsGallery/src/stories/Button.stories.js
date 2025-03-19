/* eslint-disable react/jsx-no-literals */
import React from "react";
import { Button } from "../components";
const meta = {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "Click me!"
    }
};
export default meta;
export const Primary = {
    args: {
        variant: "primary",
        size: "large"
    }
};
export const Secondary = {
    args: {
        variant: "secondary"
    }
};
export const SecondaryDisabled = {
    args: {
        variant: "secondary",
        disabled: true
    }
};
export const Link = {
    args: {
        variant: "link"
    }
};
export const Empty = {
    args: {
        variant: "empty"
    }
};
export const ButtonDisabled = {
    args: {
        disabled: true,
        variant: "primary"
    }
};
export const ButtonMediumSize = {
    args: {
        variant: "primary",
        size: "medium"
    }
};
export const ButtonRounded = {
    args: {
        variant: "primary",
        size: "medium",
        rounded: true
    }
};
export const ButtonWithLeftIcon = {
    args: {
        variant: "primary",
        children: (React.createElement("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            } },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", style: {
                    width: "1.5rem",
                    height: "1.5rem"
                } },
                React.createElement("path", { fillRule: "evenodd", d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z", clipRule: "evenodd" })),
            React.createElement(React.Fragment, null, "Click me!")))
    }
};
export const ButtonWithIcon = {
    args: {
        variant: "primary",
        size: "icon",
        children: (React.createElement("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            } },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", style: {
                    width: "1.5rem",
                    height: "1.5rem"
                } },
                React.createElement("path", { fillRule: "evenodd", d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z", clipRule: "evenodd" }))))
    }
};
export const ButtonWithSmallIcon = {
    args: {
        variant: "primary",
        size: "smallIcon",
        children: (React.createElement("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            } },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z", clipRule: "evenodd" }))))
    }
};
