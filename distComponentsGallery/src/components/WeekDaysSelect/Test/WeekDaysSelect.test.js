import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeekDaysSelect from "../WeekDaysSelect";
import { fullDaysOptions, fullDaysOptionsEn } from "../OptionList/OptionList";
const weekDaysOrderMessage = {
    ["1, 7"]: "Weekend",
    ["2, 3, 4, 5, 6"]: "Weekdays",
    ["1, 2, 3, 4, 5, 6, 7"]: "Every day"
};
describe("WeekDaysSelect", () => {
    test("WeekDaysSelect is collapsed by default", () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions }));
        const buttonSelect = screen.getByRole("button");
        expect(buttonSelect.getAttribute("aria-expanded")).toEqual("false");
    });
    test("WeekDaysSelect open and show checkbox after clicked", async () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        const checkbox = screen.getAllByRole("checkbox");
        expect(checkbox.length).toEqual(7);
    });
    test("WeekDaysSelect display 7 days with names in spanish", async () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        const checkbox = screen.getAllByRole("checkbox");
        const monday = screen.getByText(/lunes/i);
        const tuesday = screen.getByText(/martes/i);
        const wendesday = screen.getByText(/miércoles/i);
        const thursday = screen.getByText(/jueves/i);
        const friday = screen.getByText(/viernes/i);
        const saturday = screen.getByText(/sábado/i);
        const sunday = screen.getByText(/domingo/i);
        expect(checkbox.length).toEqual(7);
        expect(monday).toBeInTheDocument();
        expect(tuesday).toBeInTheDocument();
        expect(wendesday).toBeInTheDocument();
        expect(thursday).toBeInTheDocument();
        expect(friday).toBeInTheDocument();
        expect(saturday).toBeInTheDocument();
        expect(sunday).toBeInTheDocument();
    });
    test("WeekDaysSelect display 7 days with names in english", async () => {
        render(React.createElement(WeekDaysSelect, { noDaysSelectedMessage: "Select some day", options: fullDaysOptionsEn, weekDaysOrderMessage: weekDaysOrderMessage }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        const checkbox = screen.getAllByRole("checkbox");
        const monday = screen.getByText(/monday/i);
        const tuesday = screen.getByText(/tuesday/i);
        const wendesday = screen.getByText(/wendesday/i);
        const thursday = screen.getByText(/thursday/i);
        const friday = screen.getByText(/friday/i);
        const saturday = screen.getByText(/saturday/i);
        const sunday = screen.getByText(/sunday/i);
        expect(checkbox.length).toEqual(7);
        expect(monday).toBeInTheDocument();
        expect(tuesday).toBeInTheDocument();
        expect(wendesday).toBeInTheDocument();
        expect(thursday).toBeInTheDocument();
        expect(friday).toBeInTheDocument();
        expect(saturday).toBeInTheDocument();
        expect(sunday).toBeInTheDocument();
    });
    test("WeekDaysSelect display message Todos los días by default if the 7 days are selected", async () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions, value: [1, 2, 3, 4, 5, 6, 7] }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        expect(screen.getByText(/Todos los días/i)).toBeInTheDocument();
    });
    test("WeekDaysSelect display message Entre semana by default if the 7 days are selected", async () => {
        const value = [2, 3, 4, 5, 6];
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions, value: value }));
        expect(screen.getByText(/Entre semana/i)).toBeInTheDocument();
    });
    test("WeekDaysSelect display message Fines de Semana by default if sunday and saturday are selected", async () => {
        const value = [1, 7];
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions, value: value }));
        expect(screen.getByText(/Fines de semana/i)).toBeInTheDocument();
    });
    test("WeekDaysSelect with external onChange", async () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        const checkbox = screen.getAllByRole("checkbox");
        await user.click(checkbox[0]);
        expect(checkbox[0].getAttribute("aria-checked")).toBe("true");
    });
    test("WeekDaysSelect disabled", async () => {
        render(React.createElement(WeekDaysSelect, { options: fullDaysOptions, disabled: true }));
        const user = userEvent.setup();
        const buttonSelect = screen.getByRole("button");
        await user.click(buttonSelect);
        const checkboxList = screen.queryAllByRole("checkbox");
        expect(checkboxList).toHaveLength(0);
        expect(buttonSelect.getAttribute("aria-expanded")).toBe("false");
    });
});
