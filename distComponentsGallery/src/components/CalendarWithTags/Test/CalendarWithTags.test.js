import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CalendarWithTags from "../CalendarWithTags";
import { expect, test, beforeEach } from "vitest";
const currentLocale = "en";
const dateOfTests = new Date(2024, 2, 10);
beforeAll(() => {
    vi.setSystemTime(dateOfTests);
});
afterAll(() => {
    vi.useRealTimers();
});
beforeEach(() => {
    render(React.createElement(CalendarWithTags, { currentLocale: currentLocale }));
});
test("should display tags after click component", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "12-3-2024" });
    const tagsConatiner = screen.getByTestId("tags-container");
    await user.click(button);
    expect(tagsConatiner).toHaveTextContent("03/12/2024");
});
test("should remove tag after clicking the tag", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "12-3-2024" });
    const tagsContainer = screen.getByTestId("tags-container");
    await user.click(button);
    expect(tagsContainer).toHaveTextContent("03/12/2024");
    const tag = screen.getByText("03/12/2024");
    await user.click(tag);
    expect(tagsContainer).not.toHaveTextContent("03/12/2024");
});
test("should add more tags", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: "12-3-2024" });
    const anotherButton = screen.getByRole("button", { name: "15-3-2024" });
    await user.click(button);
    await user.click(anotherButton);
    const tagsContainer = screen.getByTestId("tags-container");
    expect(tagsContainer.childNodes.length).toBe(2);
});
