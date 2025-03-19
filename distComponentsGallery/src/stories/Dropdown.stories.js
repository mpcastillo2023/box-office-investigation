import { Dropdown } from "../components";
import React from "react";
const meta = {
    title: "Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    args: {
        dropdownElement: "Clickeame!",
        dropdownContent: "Content",
        autowidth: true,
        onDropdownToggle: undefined
    }
};
export default meta;
export const Basic = {
    args: {}
};
export const WithIcon = {
    args: {
        icon: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", height: 20 },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 15.75l7.5-7.5 7.5 7.5" }))),
        activeIcon: (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", height: 20 },
            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })))
    }
};
