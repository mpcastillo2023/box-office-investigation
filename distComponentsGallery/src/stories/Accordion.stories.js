/* eslint-disable react/jsx-no-literals */
import React from "react";
import { Accordion } from "../components";
const meta = {
    title: "Accordion",
    component: Accordion,
    tags: ["autodocs"],
    args: {
        title: "My Accordion",
        children: (React.createElement("div", { style: {
                padding: "10px 0"
            } }, "This is my content"))
    }
};
export default meta;
export const OpenAccordion = {
    args: {
        expanded: true
    }
};
export const ClosedAccordion = {
    args: {
        expanded: false
    }
};
