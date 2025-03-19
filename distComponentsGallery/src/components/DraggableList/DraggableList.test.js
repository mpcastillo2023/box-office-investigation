import { fireEvent, render, screen, within } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DraggableList from "./DraggableList";
import React from "react";
import userEvent from "@testing-library/user-event";
import { expect, test, beforeEach, vi, afterAll, beforeAll } from "vitest";
/* eslint-disable react/jsx-no-literals */
beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
});
afterAll(() => {
    vi.useRealTimers();
});
beforeEach(() => {
    render(React.createElement(DraggableList, { moveToBottomButton: React.createElement(React.Fragment, null, "Mover al final"), moveToTopButton: React.createElement(React.Fragment, null, "Mover al principio"), list: [
            {
                item: React.createElement("div", null, "Primer elemento"),
                key: 1,
                searchBy: "1 - Primer elemento"
            },
            {
                item: React.createElement("div", null, "Segundo elemento"),
                key: 2,
                searchBy: "2"
            },
            {
                item: React.createElement("div", null, "Tercer elemento"),
                key: 3,
                searchBy: "3"
            },
            {
                item: React.createElement("div", null, "Cuarto elemento"),
                key: 4,
                searchBy: "4"
            }
        ], 
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChangeSortingOrder: () => { } }));
});
test("It's rendering all items", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(4);
    screen.getByText("Primer elemento");
    screen.getByText("Segundo elemento");
    screen.getByText("Tercer elemento");
    screen.getByText("Cuarto elemento");
});
test("It's rendering dropdown", async () => {
    const dropdownToggle = screen.getAllByTestId("dropdown-toggle")[0];
    const user = userEvent.setup({ delay: null });
    await user.click(dropdownToggle);
    const dropdownContent = screen.getByTestId("dropdown-content");
    within(dropdownContent).getByText("Mover al final");
    within(dropdownContent).getByText("Mover al principio");
});
test("Test search", async () => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
    const user = userEvent.setup({ delay: null });
    const searchBox = screen.getByRole("textbox");
    await user.type(searchBox, "Primer elemento");
    expect(searchBox).toHaveValue("Primer elemento");
    act(() => {
        vi.runAllTimers();
    });
    const items = screen.getAllByRole("listitem");
    const firstItem = items[0];
    expect(firstItem).toHaveClass("highlightedItem");
});
test("It's rendering draggedItem", async () => {
    fireEvent.mouseDown(screen.getByText("Primer elemento"));
    screen.getByRole("dialog");
});
