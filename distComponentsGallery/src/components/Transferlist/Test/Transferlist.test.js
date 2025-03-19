import { act, render, screen, within } from "@testing-library/react";
import Transferlist from "../Transferlist";
import React from "react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach, vi, beforeAll, afterAll } from "vitest";
beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
});
afterAll(() => {
    vi.useRealTimers();
});
const columns = {
    leftColumn: [
        {
            id: 1,
            text: "Social"
        },
        {
            id: 2,
            text: "Paquete"
        },
        {
            id: 3,
            text: "Adultos"
        }
    ],
    rightColumn: [
        {
            id: 4,
            text: "Ventas"
        },
        {
            id: 5,
            text: "Adultos mayores"
        },
        {
            id: 6,
            text: "Grupo escolar"
        }
    ]
};
const leftColumnTitle = "Disabled";
const rightColumnTitlte = "Enabled";
let onChangeHandler = vi.fn();
describe("Test without  checkbox", () => {
    beforeEach(() => {
        onChangeHandler = vi.fn();
        render(React.createElement(Transferlist, { leftColumnTitle: leftColumnTitle, rightColumnTitle: rightColumnTitlte, defaultColumns: columns, onChange: onChangeHandler }));
    });
    test("Its rendering titles", () => {
        screen.getByRole("heading", { name: "Disabled" });
        screen.getByRole("heading", { name: "Enabled" });
    });
    test("Move item to right column", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const listItem = within(leftColumn).getByText("Social");
        await user.click(listItem);
        expect(within(leftColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(rightColumn).getByText("Social")).toBeInTheDocument();
        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });
    test("Move item to left column", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const listItem = within(rightColumn).getByText("Ventas");
        await user.click(listItem);
        expect(within(rightColumn).queryByText("Ventas")).not.toBeInTheDocument();
        expect(within(leftColumn).getByText("Ventas")).toBeInTheDocument();
        expect(onChangeHandler).toHaveBeenCalledTimes(1);
    });
    test("Move between columns", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const listItem = within(leftColumn).getByText("Social");
        await user.click(listItem);
        expect(within(leftColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(rightColumn).getByText("Social")).toBeInTheDocument();
        await user.click(within(rightColumn).getByText("Social"));
        expect(within(rightColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(rightColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(leftColumn).getByText("Social")).toBeInTheDocument();
        expect(onChangeHandler).toHaveBeenCalledTimes(2);
    });
    test("Add all button", async () => {
        const user = userEvent.setup();
        const addAllButton = screen.getByRole("button", {
            name: "Add all items"
        });
        await user.click(addAllButton);
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        expect(rightColumn.children.length).toEqual(6);
    });
    test("Remove all button", async () => {
        const user = userEvent.setup();
        const removeAllButton = screen.getByRole("button", {
            name: "Remove all items"
        });
        await user.click(removeAllButton);
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        expect(leftColumn.children.length).toEqual(6);
    });
});
describe("Test with checkbox", () => {
    beforeEach(() => {
        onChangeHandler = vi.fn();
        render(React.createElement(Transferlist, { leftColumnTitle: leftColumnTitle, rightColumnTitle: rightColumnTitlte, defaultColumns: columns, onChange: onChangeHandler, hasCheckbox: true }));
    });
    test("Initial render", () => {
        screen.getByRole("heading", { name: "Disabled" });
        screen.getByRole("heading", { name: "Enabled" });
        const moveToLeftButton = screen.getByRole("button", {
            name: "Move selected items to left column"
        });
        const moveToRightButton = screen.getByRole("button", {
            name: "Move selected items to right column"
        });
        expect(moveToLeftButton).toHaveAttribute("disabled");
        expect(moveToRightButton).toHaveAttribute("disabled");
    });
    test("Move item to right column", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const moveToRightButton = screen.getByRole("button", {
            name: "Move selected items to right column"
        });
        const listItem = within(leftColumn).getByText("Social");
        await user.click(listItem);
        await user.click(moveToRightButton);
        expect(within(leftColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(rightColumn).getByText("Social")).toBeInTheDocument();
    });
    test("Move item to left column", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const moveToLeftButton = screen.getByRole("button", {
            name: "Move selected items to left column"
        });
        const listItem = within(rightColumn).getByText("Ventas");
        await user.click(listItem);
        await user.click(moveToLeftButton);
        expect(within(rightColumn).queryByText("Ventas")).not.toBeInTheDocument();
        expect(within(leftColumn).getByText("Ventas")).toBeInTheDocument();
    });
    test("Move between columns", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const listItem = within(leftColumn).getByText("Social");
        const moveToLeftButton = screen.getByRole("button", {
            name: "Move selected items to left column"
        });
        const moveToRightButton = screen.getByRole("button", {
            name: "Move selected items to right column"
        });
        await user.click(listItem);
        await user.click(moveToRightButton);
        expect(within(leftColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(rightColumn).getByText("Social")).toBeInTheDocument();
        await user.click(within(rightColumn).getByText("Social"));
        await user.click(moveToLeftButton);
        expect(within(rightColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(leftColumn).getByText("Social")).toBeInTheDocument();
    });
    test("Move multiple items", async () => {
        const user = userEvent.setup();
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const firstlistItem = within(leftColumn).getByText("Social");
        const secondListItem = within(leftColumn).getByText("Paquete");
        const thirdListItem = within(leftColumn).getByText("Adultos");
        const moveToRightButton = screen.getByRole("button", {
            name: "Move selected items to right column"
        });
        await user.click(firstlistItem);
        await user.click(secondListItem);
        await user.click(thirdListItem);
        await user.click(moveToRightButton);
        expect(within(leftColumn).queryByText("Social")).not.toBeInTheDocument();
        expect(within(leftColumn).queryByText("Paquete")).not.toBeInTheDocument();
        expect(within(leftColumn).queryByText("Adultos")).not.toBeInTheDocument();
        expect(within(rightColumn).getByText("Paquete")).toBeInTheDocument();
        expect(within(rightColumn).getByText("Social")).toBeInTheDocument();
        expect(within(rightColumn).getByText("Adultos")).toBeInTheDocument();
    });
    test("Add all button", async () => {
        const user = userEvent.setup();
        const addAllButton = screen.getByRole("button", {
            name: "Add all items"
        });
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        const firstlistItem = within(leftColumn).getByText("Social");
        await user.click(firstlistItem);
        await user.click(addAllButton);
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        expect(rightColumn.children.length).toEqual(6);
    });
    test("Remove all button", async () => {
        const user = userEvent.setup();
        const rightColumn = screen.getByRole("list", { name: "rightColumn" });
        const removeAllButton = screen.getByRole("button", {
            name: "Remove all items"
        });
        const listItem = within(rightColumn).getByText("Ventas");
        await user.click(listItem);
        await user.click(removeAllButton);
        const leftColumn = screen.getByRole("list", { name: "leftColumn" });
        expect(leftColumn.children.length).toEqual(6);
    });
});
describe("Test search", () => {
    beforeEach(() => {
        render(React.createElement(Transferlist, { leftColumnTitle: leftColumnTitle, rightColumnTitle: rightColumnTitlte, defaultColumns: columns, onChange: onChangeHandler }));
    });
    test("Test Left Search", async () => {
        const user = userEvent.setup({ delay: null });
        const leftColumnContainer = screen.getByRole("list", {
            name: "leftColumn"
        }).parentElement;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const leftSearch = within(leftColumnContainer).getByRole("textbox");
        await user.type(leftSearch, "Paquete");
        expect(leftSearch).toHaveValue("Paquete");
        act(() => {
            vi.runAllTimers();
        });
        const searchedLeftColumn = screen.getByRole("list", { name: "leftColumn" });
        expect(searchedLeftColumn.children.length).toEqual(1);
    });
    test("Test Right Search", async () => {
        const user = userEvent.setup({ delay: null });
        const rightColumn = screen.getByRole("list", {
            name: "rightColumn"
        });
        const rightColumnContainer = rightColumn.parentElement;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const rightSearch = within(rightColumnContainer).getByRole("textbox");
        await user.type(rightSearch, "Ventas");
        expect(rightSearch).toHaveValue("Ventas");
        act(() => {
            vi.runAllTimers();
        });
        const searchedRightColumn = screen.getByRole("list", {
            name: "rightColumn"
        });
        expect(searchedRightColumn.children.length).toEqual(1);
    });
});
