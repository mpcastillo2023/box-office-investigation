/* eslint-disable react/jsx-no-literals */
import React from "react";
import { Tooltip } from "../components";
const meta = {
    title: "Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    args: {
        tooltipText: React.createElement("div", null, "My Tooltip value"),
        tooltipToggle: (React.createElement("p", { style: {
                height: "200px",
                width: "25%",
                backgroundColor: "#ccc",
                margin: "0 auto",
                textAlign: "center"
            } }, "Hover to show"))
    }
};
export default meta;
export const TooltipTop = {
    args: {
        position: "top"
    }
};
export const TooltipRight = {
    args: {
        position: "right"
    }
};
export const TooltipBottom = {
    args: {
        position: "bottom"
    }
};
export const TooltipLeft = {
    args: {
        position: "left"
    }
};
