/* eslint-disable react/jsx-no-literals */
import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalendarInput from "@cg-components/CalendarInput/CalendarInput";
const dateOfTests = new Date(2024, 3, 10);
const currentDate = dateOfTests;
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const formatDate = (date) => {
    const currentDateText = new Intl.DateTimeFormat("es", {
        year: "numeric",
        month: "long"
    }).format(date);
    return currentDateText.charAt(0).toUpperCase() + currentDateText.slice(1);
};
beforeAll(() => {
    vi.setSystemTime(dateOfTests);
});
afterAll(() => {
    vi.useRealTimers();
});
describe("CalendarInput component testing", () => {
    beforeEach(() => {
        render(React.createElement(CalendarInput, null));
    });
    test("Calendar should work", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getByRole("spinbutton", { name: "day-input" });
        await user.click(dayInput);
        const inputsDate = screen.getByTestId("chosen-date");
        expect(inputsDate).toHaveTextContent(formatDate(currentDate));
        const nextDay = screen.getByTestId(`${currentDay + 1}-${currentMonth + 1}-${currentYear}`);
        await user.click(nextDay);
        const monthInput = screen.getByRole("spinbutton", { name: "month-input" });
        const yearInput = screen.getByRole("spinbutton", { name: "year-input" });
        expect(dayInput).toHaveValue(currentDay + 1);
        expect(monthInput).toHaveValue(currentMonth + 1);
        expect(yearInput).toHaveValue(currentYear);
    });
    test("Should block invalid dates", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getByRole("spinbutton", { name: "day-input" });
        const monthInput = screen.getByRole("spinbutton", { name: "month-input" });
        const yearInput = screen.getByRole("spinbutton", { name: "year-input" });
        await user.type(dayInput, "32");
        await user.type(monthInput, "13");
        await user.type(yearInput, "3002");
        expect(dayInput).toHaveValue(3);
        expect(monthInput).toHaveValue(1);
        expect(yearInput).toHaveValue(300);
    });
    test("Should adjust day", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getByRole("spinbutton", { name: "day-input" });
        const monthInput = screen.getByRole("spinbutton", { name: "month-input" });
        const yearInput = screen.getByRole("spinbutton", { name: "year-input" });
        await user.type(dayInput, "31");
        await user.type(monthInput, "02");
        await user.type(yearInput, "2024");
        expect(dayInput).toHaveValue(29);
    });
});
describe("Test min and max date", () => {
    const afterTomorrow = dateOfTests;
    const beforeYesterday = dateOfTests;
    afterTomorrow.setDate(afterTomorrow.getDate() + 4);
    beforeYesterday.setDate(beforeYesterday.getDate() - 2);
    beforeEach(() => {
        render(React.createElement(CalendarInput, { maxDate: afterTomorrow, minDate: beforeYesterday }));
    });
    test("Calendar should not work with disabled dates", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getByRole("spinbutton", { name: "day-input" });
        const monthInput = screen.getByRole("spinbutton", {
            name: "month-input"
        });
        const yearInput = screen.getByRole("spinbutton", { name: "year-input" });
        await user.click(dayInput);
        const inputsDate = screen.getByTestId("chosen-date");
        expect(inputsDate).toHaveTextContent(formatDate(currentDate));
        const nextDay = screen.getByTestId(`15-3`);
        await user.click(nextDay);
        expect(dayInput).toHaveValue(null);
        expect(monthInput).toHaveValue(null);
        expect(yearInput).toHaveValue(null);
        const prevDay = screen.getByTestId(`7-3`);
        await user.click(prevDay);
        expect(dayInput).toHaveValue(null);
        expect(monthInput).toHaveValue(null);
        expect(yearInput).toHaveValue(null);
    });
    test("Should block invalid dates", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getByRole("spinbutton", { name: "day-input" });
        const monthInput = screen.getByRole("spinbutton", { name: "month-input" });
        const yearInput = screen.getByRole("spinbutton", { name: "year-input" });
        await user.type(dayInput, `15`);
        await user.type(monthInput, `${currentMonth + 1}`);
        await user.type(yearInput, `${currentYear}`);
        fireEvent.blur(dayInput);
        expect(dayInput).toHaveValue(12);
    });
});
