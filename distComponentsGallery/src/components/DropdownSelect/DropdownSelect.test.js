import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import DropdownSelect from "./DropdownSelect";
import { getParent } from "../MultilevelMenu/Test/TestUtils";
import getByTextContent from "../../testUtils/getByTextContent";
import { expect, test, vi } from "vitest";
const initializeAppSpy = vi.fn();
test("should display default option first", () => {
    render(React.createElement(DropdownSelect, { optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ], value: "ES", placeholder: "Seleccionar idioma: ", onChange: initializeAppSpy }));
    getByTextContent("Seleccionar idioma: Castellano");
    const englishOption = screen.queryByText("Ingles");
    expect(englishOption).not.toBeInTheDocument();
});
test("should display change option and call afterChangeFunction", async () => {
    render(React.createElement(DropdownSelect, { optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ], value: "ES", placeholder: "Seleccionar idioma: " }));
    const defaultOption = getByTextContent("Seleccionar idioma: Castellano");
    getParent(screen.getByText("Seleccionar idioma:"));
    const user = userEvent.setup();
    await user.click(defaultOption);
    const englishOption = screen.getByText("Ingles");
    expect(englishOption).toBeVisible();
    await user.click(englishOption);
    const englishSelectedOption = getByTextContent("Seleccionar idioma: Ingles");
    expect(englishSelectedOption).toBeInTheDocument();
});
test("should display change option and call afterChangeFunction", async () => {
    render(React.createElement(DropdownSelect, { optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ], value: "ES", placeholder: "Seleccionar idioma: ", onChange: initializeAppSpy }));
    const defaultOption = getByTextContent("Seleccionar idioma: Castellano");
    getParent(screen.getByText("Seleccionar idioma:"));
    const user = userEvent.setup();
    await user.click(defaultOption);
    const englishOption = screen.getByText("Ingles");
    expect(englishOption).toBeVisible();
    await user.click(englishOption);
    expect(initializeAppSpy).toHaveBeenCalledTimes(1);
});
test("Keyboard actions should work properly", async () => {
    render(React.createElement(DropdownSelect, { optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ], value: "ES", placeholder: "Seleccionar idioma: ", onChange: initializeAppSpy }));
    const user = userEvent.setup();
    const searchBox = screen.getByTestId("dropdown-search");
    await user.type(searchBox, "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}e{arrowdown}{arrowdown}");
    const optionListText = screen
        .getAllByRole("option")
        .map((optionElement) => optionElement.textContent);
    expect(optionListText).toEqual(["Castellano", "Ingles"]);
    const preselectedOption = screen.getByTestId("dropdown-option-preselected");
    expect(preselectedOption).toHaveTextContent("Ingles");
});
test("Keyboard actions should work properly", async () => {
    render(React.createElement(DropdownSelect, { optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ], value: "ES", placeholder: "Seleccionar idioma: ", onChange: initializeAppSpy }));
    const user = userEvent.setup();
    const searchBox = screen.getByTestId("dropdown-search");
    await user.type(searchBox, "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}e{arrowdown}{arrowdown}{enter}");
    expect(initializeAppSpy).toHaveBeenCalledTimes(2);
});
