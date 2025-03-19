/* eslint-disable react/jsx-no-literals */
import React from "react";
import styles from "./Styles/styles.module.scss";
import { Portal } from "..";
import UseSlider from "./Hooks/UseSlider";
// eslint-disable-next-line react-refresh/only-export-components
export const buttonHalfWidth = 10;
export default function Slider({ min = 0, max = 100, value, onChange, disabled = false }) {
    const { moveSlider, trackDimension, setIsSliderMoving, sliderPosition, isSliderMoving, calculatePercentage, adjustedSliderPosition } = UseSlider({
        min,
        max,
        value,
        onChange
    });
    return (React.createElement("div", { className: `${styles.trackContainer} ${disabled ? styles.disabled : ""}` },
        React.createElement("span", { className: styles.minMaxLabel },
            min,
            "%"),
        React.createElement("div", { className: styles.track, ref: trackDimension.elementRef, onMouseDown: (e) => {
                if (!disabled) {
                    moveSlider(e.clientX);
                    setIsSliderMoving(true);
                }
            } },
            React.createElement("div", { role: "slider", className: styles.sliderContainer, style: {
                    width: typeof value !== "undefined"
                        ? `calc(${value}% + ${buttonHalfWidth}px)`
                        : adjustedSliderPosition
                } },
                React.createElement("button", { className: styles.slider }, isSliderMoving ? (React.createElement("span", { className: styles.sliderTooltip }, calculatePercentage(sliderPosition))) : null))),
        React.createElement("span", { className: styles.minMaxLabel },
            max,
            "%"),
        isSliderMoving ? (React.createElement(Portal, null,
            React.createElement("div", { className: styles.sliderDragScreen, onMouseMove: (e) => {
                    moveSlider(e.clientX);
                }, onMouseUp: () => {
                    setIsSliderMoving(false);
                }, onMouseLeave: () => {
                    setIsSliderMoving(false);
                } }))) : null));
}
