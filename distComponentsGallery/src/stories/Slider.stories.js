import { Slider } from "../components";
import React from "react";
const meta = {
    title: "Slider",
    component: Slider,
    tags: ["autodocs"],
    args: {},
    decorators: [
        (Story, props) => {
            return (React.createElement("div", { style: { marginTop: "60px" } },
                React.createElement(Story, { args: {
                        ...props.args
                    } })));
        }
    ]
};
export default meta;
export const DefaultSlider = {
    args: {}
};
export const MinSlider = {
    args: {
        min: 20
    }
};
export const MaxSlider = {
    args: {
        max: 20
    }
};
export const MinMaxSlider = {
    args: {
        min: 10,
        max: 60
    }
};
