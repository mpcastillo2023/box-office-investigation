import React from "react";
import ServerTable from "@cg-components/ServerTable/ServerTable";
import UseEndpoint from "@cg-hooks/UseEndpoint";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
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
            sort: false
        }
    }
];
const meta = {
    title: "ServerTable",
    component: ServerTable,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            const { data, isFetching, queryParams, setQueryParams, count } = UseEndpoint({
                endpoint: ["languages"],
                defaultQueryParams: {
                    sortField: "languageId",
                    sortDir: "DESC",
                    page: 1,
                    size: 10,
                    visible: true
                }
            });
            const totalPages = count / (queryParams.size || 0);
            return (React.createElement(Story, { args: {
                    ...props.args,
                    setQueryParams: setQueryParams,
                    queryParams: queryParams,
                    displayData: data,
                    isFetching: isFetching,
                    page: queryParams.page || 1,
                    rowsPerPage: queryParams.size || 10,
                    totalPages: totalPages
                } }));
        },
        (Story, props) => {
            return (React.createElement(QueryClientProvider, { client: queryClient },
                React.createElement(Story, { props: props })));
        }
    ],
    args: {
        columns,
        displayData: [],
        isFetching: true,
        page: 1,
        rowsPerPage: 10,
        setQueryParams: () => { },
        queryParams: {},
        totalPages: 1,
        totalItems: 8,
        mobileAccordionColumnKey: "name"
    },
    argTypes: {
        setQueryParams: {
            table: {
                disable: true
            }
        },
        queryParams: {
            table: {
                disable: true
            }
        },
        isFetching: {
            table: {
                disable: true
            }
        },
        totalPages: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const Basic = {
    args: {}
};
export const WithSearch = {
    args: {
        hasSearch: true
    }
};
export const WithFilters = {
    args: {
        hasSearch: true,
        filters: [
            {
                type: "Toggle",
                toggleText: "View disabled",
                queryParam: "visible"
            },
            {
                type: "Select",
                placeholder: "Choose your language",
                optionList: [
                    {
                        optionText: "kl",
                        optionValue: "kl"
                    },
                    {
                        optionText: "ka",
                        optionValue: "ka"
                    },
                    {
                        optionText: "ca",
                        optionValue: "ca"
                    },
                    {
                        optionText: "es",
                        optionValue: "es"
                    },
                    {
                        optionText: "en",
                        optionValue: "en"
                    }
                ],
                queryParam: "languageCode",
                emptyOptionText: "Any",
                value: ""
            }
        ]
    }
};
