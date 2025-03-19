import React from "react";
import TimeInput from "../TimeInput";
import { render, screen, within } from "@testing-library/react";
import { getCurrentTime } from "./Utils";
import userEvent from "@testing-library/user-event";
describe("TimeInput basic testing", () => {
    const fn = vi.fn();
    test("TimeInput should be displayed in the document", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "10:30" }));
        const timeInput = screen.getByLabelText("time");
        expect(timeInput).toBeInTheDocument();
    });
    test("Should be display correct hours on time string", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "10:30" }));
        const hours = screen.getByLabelText("hours");
        expect(hours).toHaveDisplayValue("10");
    });
    test("Should be display correct minutes on time string", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "10:30" }));
        const minutes = screen.getByLabelText("minutes");
        expect(minutes).toHaveDisplayValue("30");
    });
    test("Should be display 00:00 time if value has bad time format", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "10:3" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(screen.getByLabelText("time")).toHaveDisplayValue("10:03");
        expect(minutes).toHaveDisplayValue("03");
        expect(hours).toHaveDisplayValue("10");
    });
    test("Should be display 00:00 time if value the string text", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "time" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(minutes).toHaveDisplayValue("00");
        expect(hours).toHaveDisplayValue("00");
    });
    test("Should display 00:00 time if the value is an empty string", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(minutes).toHaveDisplayValue("00");
        expect(hours).toHaveDisplayValue("00");
    });
    test("Should display current time if the value is a Date()", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: new Date("10/20/2024 01:01") }));
        const { hours: timeHours, minutes: timeMinutes } = getCurrentTime(undefined, "10/20/2024 01:01");
        const minutesInput = screen.getByLabelText("minutes");
        const hoursInput = screen.getByLabelText("hours");
        expect(minutesInput).toHaveDisplayValue(timeMinutes);
        expect(hoursInput).toHaveDisplayValue(timeHours);
    });
    test("Should display current time if the value is a toISOString date format", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: new Date().toISOString() }));
        const { hours: timeHours, minutes: timeMinutes } = getCurrentTime("es", undefined);
        const minutesInput = screen.getByLabelText("minutes");
        const hoursInput = screen.getByLabelText("hours");
        expect(minutesInput).toHaveDisplayValue(timeMinutes);
        expect(hoursInput.value).toBe(timeHours);
    });
    test("Should display current time if the value is less than 10 minutes and minutes", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "01:01", "aria-label": "time-input" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(screen.getByLabelText("time")).toHaveDisplayValue(`01:01`);
        expect(minutes).toHaveDisplayValue(`01`);
        expect(hours).toHaveDisplayValue(`01`);
    });
    test("Should display current time if the value 12:00", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "12:00", "aria-label": "time-input" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(screen.getByLabelText("time")).toHaveDisplayValue(`12:00`);
        expect(minutes).toHaveDisplayValue(`00`);
        expect(hours).toHaveDisplayValue(`12`);
    });
    test("Should display time if the value 00:00 in 24 hours format", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "00:00", "aria-label": "time-input" }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        expect(screen.getByLabelText("time")).toHaveDisplayValue(`00:00`);
        expect(minutes).toHaveDisplayValue(`00`);
        expect(hours).toHaveDisplayValue(`00`);
    });
    test("Should display current time if the value have seconds", () => {
        render(React.createElement(TimeInput, { onChange: fn, value: "12:50:30", "aria-label": "time-input", hasSeconds: true }));
        const minutes = screen.getByLabelText("minutes");
        const hours = screen.getByLabelText("hours");
        const seconds = screen.getByLabelText("seconds");
        expect(screen.getByLabelText("time")).toHaveDisplayValue(`12:50:30`);
        expect(hours).toHaveDisplayValue(`12`);
        expect(minutes).toHaveDisplayValue(`50`);
        expect(seconds).toHaveDisplayValue(`30`);
    });
    test("Should set hours when the user click on arrow down to remove hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hourControls = within(screen.getByLabelText("hours-controls"));
        const removeHourButton = hourControls.getAllByRole("button")[1];
        await user.click(removeHourButton);
        const time = screen.getByLabelText("time");
        const hours = time.value.split(":")[0];
        expect(hours).toBe("09");
    });
    test("Should set hours when the user click on arrow up to add hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hourControls = within(screen.getByLabelText("hours-controls"));
        const addHourButton = hourControls.getAllByRole("button")[0];
        await user.click(addHourButton);
        const time = screen.getByLabelText("time");
        const hours = time.value.split(":")[0];
        expect(hours).toBe("11");
    });
    test("Should not set hours when the user type a wrong hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hours = screen.getByLabelText("hours");
        await user.click(hours);
        await user.keyboard("50");
        expect(hours).not.toHaveDisplayValue("50");
    });
});
describe("TimeInput testing user interactions and buttons", () => {
    test("Should set hours when the user click on arrow down to remove hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hourControls = within(screen.getByLabelText("hours-controls"));
        const removeHourButton = hourControls.getAllByRole("button")[1];
        await user.click(removeHourButton);
        const time = screen.getByLabelText("time");
        const hours = time.value.split(":")[0];
        expect(hours).toBe("09");
    });
    test("Should set hours when the user click on arrow up to add hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hourControls = within(screen.getByLabelText("hours-controls"));
        const addHourButton = hourControls.getAllByRole("button")[0];
        await user.click(addHourButton);
        const time = screen.getByLabelText("time");
        const hours = time.value.split(":")[0];
        expect(hours).toBe("11");
    });
    test("Should not set hours when the user type a wrong hour", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hours = screen.getByLabelText("hours");
        await user.click(hours);
        await user.keyboard("50");
        expect(hours).not.toHaveDisplayValue("50");
    });
    test("Should display an empty string after delete the current value", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: "10:00" }));
        const hours = screen.getByLabelText("hours");
        const minutes = screen.getByLabelText("minutes");
        await user.click(hours);
        await user.keyboard(" ");
        await user.clear(hours);
        expect(hours).toHaveDisplayValue("");
        expect(hours).not.toHaveDisplayValue("00");
        expect(hours).not.toHaveDisplayValue("10");
        await user.click(minutes);
        await user.keyboard(" ");
        await user.clear(minutes);
        expect(minutes).toHaveDisplayValue("");
        expect(minutes).not.toHaveDisplayValue("00");
    });
    test("Should change hour and minutes", async () => {
        const user = userEvent.setup();
        render(React.createElement(TimeInput, { value: new Date() }));
        const hours = screen.getByLabelText("hours");
        const minutes = screen.getByLabelText("minutes");
        await user.click(hours);
        await user.type(hours, "10");
        await user.click(minutes);
        await user.type(minutes, "30");
        expect(hours).toHaveValue(10);
        expect(minutes).toHaveValue(30);
    });
});
