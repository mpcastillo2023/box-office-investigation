import React from "react";
import { render, screen } from "@testing-library/react";
import DateTime from "../DateTime";
import userEvent from "@testing-library/user-event";
const currentLocale = "en";
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
describe("DateTime component testing", () => {
    test("should render for first time with ", () => {
        render(React.createElement(DateTime, { id: "test", currentLocale: currentLocale, value: new Date() }));
        expect(screen.getByLabelText("date-time-input-test")).toBeInTheDocument();
    });
    test("should render initial time with 00:00 hours with 24 hours format", () => {
        render(React.createElement(DateTime, { id: "test", currentLocale: currentLocale, value: new Date(currentYear, currentMonth - 1, currentDay, 0, 0) }));
        const dayInput = screen.getByLabelText("test-day-input");
        const mothInput = screen.getByLabelText("test-month-input");
        const yearInput = screen.getByLabelText("test-year-input");
        const hoursInput = screen.getByLabelText("test-hour");
        const minutesInput = screen.getByLabelText("test-minute");
        expect(dayInput).toHaveValue(currentDay);
        expect(mothInput).toHaveValue(currentMonth);
        expect(yearInput).toHaveValue(currentYear);
        expect(hoursInput).toHaveValue(0);
        expect(minutesInput).toHaveValue(0);
    });
    test("should render initial time with 23:59 hours with 24 hours format", () => {
        render(React.createElement(DateTime, { currentLocale: currentLocale, value: new Date(currentYear, currentMonth - 1, currentDay, 23, 59), id: "test" }));
        const dayInput = screen.getByLabelText("test-day-input");
        const mothInput = screen.getByLabelText("test-month-input");
        const yearInput = screen.getByLabelText("test-year-input");
        const hoursInput = screen.getByLabelText("test-hour");
        const minutesInput = screen.getByLabelText("test-minute");
        expect(dayInput).toHaveValue(currentDay);
        expect(mothInput).toHaveValue(currentMonth);
        expect(yearInput).toHaveValue(currentYear);
        expect(hoursInput).toHaveValue(23);
        expect(minutesInput).toHaveValue(59);
    });
    test("DateTime input should be disabled", () => {
        render(React.createElement(DateTime, { currentLocale: currentLocale, disabled: true, value: new Date(), id: "test" }));
        const dayInput = screen.getByLabelText("test-day-input");
        const mothInput = screen.getByLabelText("test-month-input");
        const yearInput = screen.getByLabelText("test-year-input");
        const hoursInput = screen.getByLabelText("test-hour");
        const minutesInput = screen.getByLabelText("test-minute");
        expect(dayInput).toBeDisabled();
        expect(mothInput).toBeDisabled();
        expect(yearInput).toBeDisabled();
        expect(hoursInput).toBeDisabled();
        expect(minutesInput).toBeDisabled();
    });
    test("should not render more than max date", async () => {
        const user = userEvent.setup();
        render(React.createElement(DateTime, { currentLocale: currentLocale, disabled: true, id: "test", value: new Date(), maxDate: new Date(2024, 9, 5), minDate: new Date() }));
        const dayInput = screen.getByLabelText("test-day-input");
        const mothInput = screen.getByLabelText("test-month-input");
        const yearInput = screen.getByLabelText("test-year-input");
        expect(dayInput).toHaveValue(currentDay);
        expect(mothInput).toHaveValue(currentMonth);
        expect(yearInput).toHaveValue(currentYear);
        await user.type(dayInput, "6");
        await user.type(mothInput, "9");
        expect(dayInput).not.toHaveValue("6");
        expect(mothInput).not.toHaveValue("9");
    });
    test("should not render less than min date", async () => {
        const user = userEvent.setup();
        render(React.createElement(DateTime, { currentLocale: currentLocale, disabled: true, value: new Date(), maxDate: new Date(2024, 9, 5), minDate: new Date(), id: "test" }));
        const dayInput = screen.getByLabelText("test-day-input");
        const mothInput = screen.getByLabelText("test-month-input");
        const yearInput = screen.getByLabelText("test-year-input");
        expect(dayInput).toHaveValue(currentDay);
        expect(mothInput).toHaveValue(currentMonth);
        expect(yearInput).toHaveValue(currentYear);
        await user.type(dayInput, "20");
        await user.type(mothInput, "3");
        expect(dayInput).toHaveValue(currentDay);
        expect(mothInput).toHaveValue(currentMonth);
    });
});
