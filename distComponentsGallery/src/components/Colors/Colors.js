import React, { useState } from "react";
import { Switch } from "@cg-components/index";
import styles from "./Styles/styles.module.scss";
const ColorSwatches = ({ darkColors, lightColors }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const colors = isDarkTheme ? { ...darkColors } : { ...lightColors };
    const colorsNames = Object.keys(colors);
    const colorLabel = (color) => {
        return color
            .split(/(?=[A-Z])/)
            .join(" ")
            .toLowerCase();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Switch, { onChange: (value) => {
                setIsDarkTheme(value);
            }, value: isDarkTheme, textBeside: isDarkTheme ? "Enable light theme" : "Enable dark theme" }),
        React.createElement("ul", { className: styles.colorsContainer }, colorsNames.map((color) => {
            return (React.createElement("li", { key: color },
                React.createElement("span", { className: styles.displayColor, style: {
                        backgroundColor: colors[color]
                    } }),
                React.createElement("p", { className: styles.label }, colorLabel(color)),
                React.createElement("span", null, colors[color])));
        }))));
};
export default ColorSwatches;
