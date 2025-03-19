/* eslint-disable react/jsx-no-literals */
import React from "react";
import Clock from "@cg-icons/Clock.svg";
import { setFocusOnInput } from "./Controls/Helpers";
import UseTimeInput from "./Hooks/UseTimeInput";
import styles from "./Styles/styles.module.scss";
import Controls from "./Controls/Controls";
/**
 * TimeInput component provides a time input field to control hours and minutes.
 * Display time in 24 hours or 12 hours format. Can be handle with keyboard (arrow up or down)
 *
 * @param {TimeInputProps} props - Props for the TimeInput component.
 * @returns {JSX.Element}
 */
const TimeInput = ({ id, value, dataTestId, hoursPlaceholder = "--", minutesPlaceholder = "--", secondsPlaceholder = "--", name = "time", disabled, required, onChange, className, ariaLabel = "time", iconAriaLabel = "clock", hoursAriaLabel = "hours", minutesAriaLabel = "minutes", secondsAriaLabel = "seconds", currentLocale, hasSeconds = false, isThereError = false, customContainerClass = "" }) => {
    const { hoursRef, minutesRef, secondsRef, setInputType, inputType, updateTime, handleHours, handleMinutes, handleSeconds, hours, minutes, seconds, setSeconds, setHours, setMinutes } = UseTimeInput({
        value,
        currentLocale,
        onChange,
        hasSeconds
    });
    const errorClass = isThereError ? styles.inputError : "";
    return (React.createElement("div", { className: customContainerClass || "" },
        React.createElement("div", { className: `${styles.inputContainer} ${errorClass} ${className} ${disabled ? styles.disabled : ""}`, "data-testid": dataTestId, role: "textbox", tabIndex: 0 },
            React.createElement("div", { className: styles.iconContainer, role: "button", onClick: () => {
                    setInputType("hours");
                    setFocusOnInput(hoursRef);
                }, "aria-label": iconAriaLabel },
                React.createElement(Clock, null)),
            React.createElement("div", { className: styles.timeInputMainContainer },
                React.createElement("div", { className: `${styles.timerContainer} ${styles.hourContainer}`, onClick: (e) => {
                        e.preventDefault();
                        setInputType("hours");
                        setFocusOnInput(hoursRef);
                    } },
                    React.createElement("input", { type: "hidden", name: name, "aria-label": ariaLabel, value: hasSeconds
                            ? `${hours}:${minutes}:${seconds}`
                            : `${hours}:${minutes}` }),
                    React.createElement("input", { type: "number", id: id, autoComplete: "off", minLength: 1, maxLength: 2, step: 1, min: 0, max: 23, inputMode: "numeric", value: hours, onChange: handleHours, pattern: "^(2[0-3]|[01]?[0-9]){1,1}$", placeholder: hoursPlaceholder, required: required, onBlur: () => {
                            if (hours === "") {
                                updateTime("00", minutes, seconds);
                                return;
                            }
                            if (hours.length < 2) {
                                updateTime(`0${hours}`, minutes, seconds);
                                return;
                            }
                        }, onKeyDown: (e) => {
                            if (e.key === "Tab") {
                                setInputType("minutes");
                                if (hours === "") {
                                    updateTime("00", minutes, seconds);
                                    return;
                                }
                                if (hours.length < 2) {
                                    updateTime(`0${hours}`, minutes, seconds);
                                    return;
                                }
                            }
                            return (["e", "E", "+", "-"].includes(e.key) && e.preventDefault());
                        }, onClick: (e) => {
                            e.preventDefault();
                            setFocusOnInput(hoursRef);
                            setInputType("hours");
                        }, tabIndex: 0, disabled: disabled, "aria-label": hoursAriaLabel, name: `hours-${name}`, ref: hoursRef })),
                React.createElement("span", { className: styles.timeDivider }, ":"),
                React.createElement("div", { className: `${styles.timerContainer} ${styles.minutesContainer}`, onClick: () => {
                        setInputType("minutes");
                        setFocusOnInput(minutesRef);
                    } },
                    React.createElement("input", { type: "number", autoComplete: "off", min: 0, max: 59, step: 1, size: 2, placeholder: minutesPlaceholder, value: minutes, inputMode: "numeric", onChange: handleMinutes, pattern: "/^([0-5]){1,1}([0-9]){1,1}$/", required: required, onBlur: () => {
                            if (minutes === "") {
                                updateTime(hours, "00", seconds);
                                return;
                            }
                            if (minutes.length < 2) {
                                updateTime(hours, `0${minutes}`, seconds);
                                return;
                            }
                        }, onKeyDown: (e) => {
                            if (e.key === "Tab" && hasSeconds) {
                                setInputType("seconds");
                                if (minutes === "") {
                                    updateTime(hours, "00", seconds);
                                    return;
                                }
                                if (minutes.length < 2) {
                                    updateTime(hours, `0${minutes}`, seconds);
                                }
                                setInputType("seconds");
                            }
                            return (["e", "E", "+", "-"].includes(e.key) && e.preventDefault());
                        }, onClick: (e) => {
                            e.preventDefault();
                            setFocusOnInput(minutesRef);
                            setInputType("minutes");
                        }, ref: minutesRef, tabIndex: 0, disabled: disabled, "aria-label": minutesAriaLabel, name: `minutes-${name}` })),
                hasSeconds ? (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: styles.timeDivider }, ":"),
                    React.createElement("div", { className: `${styles.timerContainer} ${styles.secondsContainer}`, onClick: () => {
                            setInputType("seconds");
                            setFocusOnInput(secondsRef);
                        } },
                        React.createElement("input", { type: "number", autoComplete: "off", step: 1, size: 2, min: 0, max: 59, placeholder: secondsPlaceholder, value: seconds, pattern: "/^([0-5]){1,1}([0-9]){1,1}$/", required: required, onBlur: () => {
                                if (seconds === "") {
                                    updateTime(hours, minutes, "00");
                                    return;
                                }
                                if (seconds.length < 2) {
                                    updateTime(hours, minutes, `0${seconds}`);
                                    return;
                                }
                            }, onKeyDown: (e) => {
                                if (e.key === "Tab") {
                                    if (seconds === "") {
                                        updateTime(hours, minutes, "00");
                                        return;
                                    }
                                    if (seconds.length < 2) {
                                        updateTime(hours, minutes, `0${seconds}`);
                                    }
                                    setInputType("seconds");
                                }
                                return (["e", "E", "+", "-"].includes(e.key) && e.preventDefault());
                            }, onChange: handleSeconds, onClick: (e) => {
                                e.preventDefault();
                                setFocusOnInput(secondsRef);
                                setInputType("seconds");
                            }, tabIndex: 0, disabled: disabled, ref: secondsRef, "aria-label": secondsAriaLabel, name: `seconds-${name}` })))) : null),
            React.createElement(Controls, { inputType: inputType, setSeconds: setSeconds, setMinutes: setMinutes, setHours: setHours, seconds: seconds, minutes: minutes, hours: hours, disabled: disabled, updateTime: updateTime }))));
};
export default TimeInput;
