import React from "react";
import CalendarDropdown from "../CalendarDropdown";
import { render, screen } from "@testing-library/react";
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
describe("CalendarDropdown component testing", () => {
    beforeEach(() => {
        render(React.createElement(CalendarDropdown, null));
    });
    test("Calendar should work", async () => {
        const user = userEvent.setup();
        const dayInput = screen.getAllByRole("textbox");
        await user.click(dayInput[0]);
        const inputsDate = screen.getByTestId("chosen-date");
        expect(inputsDate).toHaveTextContent(formatDate(currentDate));
        const nextDay = screen.getByTestId(`${currentDay + 1}-${currentMonth + 1}-${currentYear}`);
        await user.click(nextDay);
        const dateInput = screen.getAllByRole("textbox");
        expect(dateInput[0]).toHaveValue("11 Abr 2024");
    });
});
