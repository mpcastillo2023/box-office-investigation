/* eslint-disable react/jsx-no-literals */
import React from "react";
import { Tabs } from "../components";
const list = Array.from({ length: 2 }, (v, i) => ({
    tabTitle: "My Title " + (i + 1),
    tabView: React.createElement(React.Fragment, null,
        "Content ",
        i + 1,
        " ")
}));
const meta = {
    title: "Tabs",
    component: Tabs,
    tags: ["autodocs"],
    args: {
        tabList: list
    }
};
export default meta;
export const DefaultTabs = {
    args: {}
};
export const SecondTabActive = {
    args: {
        initTabView: 1
    }
};
