import React from "react";
import { screen, render } from "@testing-library/react";
import Calendar from "./Calendar";
import userEvent from "@testing-library/user-event";
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
describe("Calendar component testing", () => {
    beforeEach(() => {
        render(React.createElement(Calendar, { shouldRenderYearButtons: true }));
    });
    test("Should display current date component", () => {
        const inputsDate = screen.getByTestId("chosen-date");
        expect(inputsDate).toHaveTextContent(formatDate(currentDate));
    });
    test("Should changed day", async () => {
        const user = userEvent.setup();
        const nextDay = screen.getByRole("button", {
            name: `11-4-2024`
        });
        const inputsDate = screen.getByTestId("chosen-date");
        await user.click(nextDay);
        expect(nextDay).toHaveClass("activeCell");
        expect(inputsDate).toHaveTextContent(formatDate(new Date(currentYear, currentMonth, currentDay + 1)));
    });
    test("Should change month", async () => {
        const user = userEvent.setup();
        const prevMonth = screen.getByRole("button", { name: "prev-month" });
        const nextMonth = screen.getByRole("button", { name: "next-month" });
        const inputsDate = screen.getByTestId("chosen-date");
        await user.click(prevMonth);
        expect(inputsDate).toHaveTextContent(formatDate(new Date(currentYear, currentMonth - 1, currentDay)));
        await user.click(nextMonth);
        await user.click(nextMonth);
        expect(inputsDate).toHaveTextContent(formatDate(new Date(currentYear, currentMonth + 1, currentDay)));
    });
    test("Should change year", async () => {
        const user = userEvent.setup();
        const prevYear = screen.getByRole("button", { name: "prev-year" });
        const nextYear = screen.getByRole("button", { name: "next-year" });
        const inputsDate = screen.getByTestId("chosen-date");
        await user.click(prevYear);
        expect(inputsDate).toHaveTextContent(formatDate(new Date(currentYear - 1, currentMonth, currentDay)));
        await user.click(nextYear);
        await user.click(nextYear);
        expect(inputsDate).toHaveTextContent(formatDate(new Date(currentYear + 1, currentMonth, currentDay)));
    });
    test("Should display even rows", async () => {
        const user = userEvent.setup();
        const nextMonth = screen.getByRole("button", { name: "next-month" });
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
        expect((screen.getAllByRole("button").length - 4) % 7).toBe(0);
        await user.click(nextMonth);
    });
});
