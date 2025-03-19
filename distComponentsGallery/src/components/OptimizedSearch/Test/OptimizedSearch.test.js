import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { OptimizedSearch } from "@cg-components/index";
const testData = [
    {
        text: "Item 1",
        children: [
            { text: "Subitem 1.1", href: "/subitem-1-1" },
            { text: "Subitem 1.2", href: "/subitem-1-2" }
        ]
    },
    {
        text: "Item 2",
        children: [
            { text: "Subitem 2.1", href: "/subitem-2-1" },
            { text: "Subitem 2.2", href: "/subitem-2-2" }
        ]
    }
];
const setup = () => {
    return render(React.createElement(MemoryRouter, null,
        React.createElement(OptimizedSearch, { placeholder: "Search", notResultsText: "No results found", data: testData })));
};
describe("OptimizedSearch component", () => {
    test("renders search input and magnifier icon", () => {
        const { getByPlaceholderText, getByTestId } = setup();
        const searchInput = getByPlaceholderText("Search");
        const magnifierIcon = getByTestId("SvgMagnifier");
        expect(searchInput).toBeInTheDocument();
        expect(magnifierIcon).toBeInTheDocument();
    });
    test("filters results based on search input", () => {
        const { getByPlaceholderText, getByText, queryByText } = setup();
        const searchInput = getByPlaceholderText("Search");
        fireEvent.change(searchInput, { target: { value: "Item 1" } });
        expect(getByText("Item 1")).toBeInTheDocument();
        expect(getByText("Subitem 1.1")).toBeInTheDocument();
        expect(getByText("Subitem 1.2")).toBeInTheDocument();
        expect(queryByText("Item 2")).not.toBeInTheDocument();
        expect(queryByText("Subitem 2.1")).not.toBeInTheDocument();
        expect(queryByText("Subitem 2.2")).not.toBeInTheDocument();
    });
    // test("navigates to the correct URL when item link is clicked", async () => {
    //  const { getByPlaceholderText, getByText } = setup();
    //  const searchInput = getByPlaceholderText("Search");
    // fireEvent.change(searchInput, { target: { value: "Subitem 1.1" } });
    //  fireEvent.click(getByText("Subitem 1.1"));
    // await waitFor(() =>
    //   expect(window.location.pathname).toEqual("/subitem-1-1")
    // );
    // });
});
