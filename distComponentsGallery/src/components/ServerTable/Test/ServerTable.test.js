/* eslint-disable react/jsx-no-literals */
import React from "react";
import ServerTable from "../ServerTable";
import UseEndpoint from "@cg-hooks/UseEndpoint";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import { initialLanguages, searchedLanguages, spanishLanguage, sortFieldAscLanguages, sortFieldDescLanguages, hiddenLanguages, visibleLanguages } from "./Utils/ExpectedTableData";
import checkTableContent from "../../../testUtils/checkTableContent";
import { expect, test, beforeEach } from "vitest";
const columns = [
    {
        name: "languageId",
        label: "Identificador",
        options: {
            filter: false,
            sort: true
        }
    },
    {
        name: "name",
        label: "Nombre",
        options: {
            filter: false,
            sort: true
        }
    },
    {
        name: "languageCode",
        label: "Código",
        options: {
            filter: false,
            sort: true
        }
    },
    {
        name: "countryCode",
        label: "Codigo de pais",
        options: {
            filter: false,
            sort: true
        }
    }
];
const TestingServerTable = () => {
    const { data, isFetching, queryParams, setQueryParams, count } = UseEndpoint({
        endpoint: ["languages"],
        defaultQueryParams: {
            sortField: "languageId",
            sortDir: "DESC",
            page: 1,
            size: 10
        }
    });
    const totalPages = count / (queryParams.size || 0);
    return (React.createElement(ServerTable, { mobileAccordionColumnKey: "name", setQueryParams: setQueryParams, queryParams: queryParams, displayData: data, isFetching: isFetching, page: queryParams.page || 1, rowsPerPage: queryParams.size || 10, columns: columns, totalPages: totalPages, totalItems: 10, hasSearch: true, filters: [
            {
                type: "Toggle",
                toggleText: "Show visible",
                queryParam: "visible"
            },
            {
                type: "Select",
                placeholder: "Choose your language",
                optionList: [
                    {
                        optionText: "en",
                        optionValue: "en"
                    },
                    {
                        optionText: "es",
                        optionValue: "es"
                    },
                    {
                        optionText: "ca",
                        optionValue: "ca"
                    }
                ],
                queryParam: "languageCode",
                emptyOptionText: "Any",
                value: ""
            }
        ] }));
};
const queryClient = new QueryClient();
beforeEach(async () => {
    render(React.createElement(QueryClientProvider, { client: queryClient },
        React.createElement(TestingServerTable, null)));
    await screen.findByRole("alert");
});
test("Render Titles properly", async () => {
    for (let index = 0; index < columns.length; index++) {
        const titleElement = await screen.findByTestId(`headcol-${index}`);
        expect(titleElement).toHaveTextContent(columns[index].label);
    }
});
test("Render Rows properly", async () => {
    await checkTableContent(columns, initialLanguages);
});
test("Search request is done", async () => {
    const user = userEvent.setup({ delay: null });
    const searchBox = await screen.findByRole("textbox", {
        name: "table-search"
    });
    await user.type(searchBox, "Español");
    expect(searchBox).toHaveValue("Español");
    await waitFor(async () => {
        await checkTableContent(columns, searchedLanguages);
    });
});
test("Should filter by toggle", async () => {
    const user = userEvent.setup();
    const viewActiveButton = await screen.findByRole("switch");
    await user.click(viewActiveButton);
    await checkTableContent(columns, visibleLanguages);
    const viewHiddenButton = await screen.findByRole("switch");
    await user.click(viewHiddenButton);
    await checkTableContent(columns, hiddenLanguages);
});
test("Shoud filter by Select", async () => {
    const user = userEvent.setup();
    const defaultOption = await screen.findByText("Choose your language");
    await user.click(defaultOption);
    const options = await screen.findAllByRole("option");
    const spanishOption = options.find((listitem) => listitem.textContent === "es");
    await user.click(spanishOption);
    await checkTableContent(columns, spanishLanguage);
});
test("Should sort asc and desc", async () => {
    const user = userEvent.setup();
    const nameTitle = screen.getByTestId(`headcol-${1}`);
    await user.click(nameTitle);
    await checkTableContent(columns, sortFieldDescLanguages);
    await user.click(nameTitle);
    await checkTableContent(columns, sortFieldAscLanguages);
});
test("Should paginate properly", async () => {
    // const user = userEvent.setup();
    // const fistpage = await screen.findByRole("button", { name: "first page" });
    // const prevPage = await screen.findByRole("button", { name: "previous page" });
    // const nextPage = await screen.findByRole("button", { name: "next page" });
    // const lastPage = await screen.findByRole("button", { name: "last page" });
    // await user.click(nextPage);
    // await checkTableContent(columns, secondPageLanguages);
    // await user.click(lastPage);
    // await checkTableContent(columns, fourthPageLanguages);
    // await user.click(prevPage);
    // await checkTableContent(columns, thirdPageLanguages);
    // await user.click(fistpage);
    // await checkTableContent(columns, initialLanguages);
});
