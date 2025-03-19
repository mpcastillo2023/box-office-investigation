import { act, render, screen } from "@testing-library/react";
import QuickSearch from "../QuickSearch";
import { getQuery } from "@cg-api/getQuery";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import userEvent from "@testing-library/user-event";
import { expect, test, describe, beforeEach, vi, afterAll, beforeAll } from "vitest";
beforeAll(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
});
afterAll(() => {
    vi.useRealTimers();
});
const ExampleQuickSearch = ({ onSelect }) => {
    const [searchParam, setSearchParam] = useState("");
    const queryKey = ["languages", { q: searchParam }];
    const { data, isLoading } = useQuery({
        queryKey: queryKey,
        queryFn: (getQuery),
        refetchOnWindowFocus: false
    });
    return (React.createElement(QuickSearch, { data: data, isLoading: isLoading, dataTextProperty: "name", onSelect: onSelect, onChange: (value) => {
            setSearchParam(value);
        } }));
};
let mockFn = vi.fn();
const queryClient = new QueryClient();
describe("Test quick search", () => {
    beforeEach(() => {
        mockFn = vi.fn();
        render(React.createElement(QueryClientProvider, { client: queryClient },
            React.createElement(ExampleQuickSearch, { onSelect: mockFn })));
    });
    test("Should render list of values", async () => {
        const user = userEvent.setup({ delay: null });
        const searchBox = screen.getByRole("textbox");
        await user.type(searchBox, "e");
        act(() => {
            vi.runAllTimers();
        });
        const listItems = await screen.findAllByRole("listitem");
        const listItemsText = listItems.map((listItem) => listItem.textContent);
        expect(listItemsText).toEqual([
            "Chinese",
            "Czech",
            "French",
            "Georgian",
            "German",
            "Greek",
            "Greenlandic",
            "Icelandic",
            "Indonesian",
            "Japanese",
            "Javanese",
            "Korean",
            "Norwegian",
            "Portuguese",
            "Serbian"
        ]);
        expect(mockFn).toHaveBeenCalledTimes(0);
    });
    test("Keyboard actions should work properly", async () => {
        /*const user = userEvent.setup({ delay: null });
        const searchBox = screen.getByRole("textbox");
        await user.type(searchBox, "e");
        act(() => {
          vi.runAllTimers();
        });
        await user.type(searchBox, "{arrowdown}");
        await user.type(searchBox, "{arrowup}");
        await user.type(searchBox, "{arrowup}");
        expect(searchBox).toHaveValue("Serbian");
        await user.type(searchBox, "{enter}");
        await user.click(searchBox);
        const listItems = await screen.findAllByRole("listitem");
        const listItemsText = listItems.map((listItem) => listItem.textContent);
        expect(listItemsText).toEqual(["Serbian"]);
        expect(mockFn).toHaveBeenCalledTimes(1);*/
    });
    test("Keyboard click actions should work properly", async () => {
        const user = userEvent.setup({ delay: null });
        const searchBox = screen.getByRole("textbox");
        await user.type(searchBox, "o");
        act(() => {
            vi.runAllTimers();
        });
        const firstItem = (await screen.findAllByRole("listitem"))[0];
        await user.click(firstItem);
        await user.click(searchBox);
        const listItems = await screen.findAllByRole("listitem");
        const listItemsText = listItems.map((listItem) => listItem.textContent);
        expect(listItemsText).toEqual(["Croatian"]);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
