import { QuickSearch } from "../components";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getQuery } from "@cg-api/getQuery";
const queryClient = new QueryClient();
const meta = {
    title: "QuickSearch",
    component: QuickSearch,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            const [searchParam, setSearchParam] = useState("");
            const queryKey = ["languages", { q: searchParam }];
            const { data, isLoading } = useQuery({
                queryKey: queryKey,
                queryFn: (getQuery),
                refetchOnWindowFocus: false
            });
            return (React.createElement(Story, { args: {
                    ...props.args,
                    onChange: (value) => {
                        setSearchParam(value);
                    },
                    data: data,
                    isLoading: isLoading
                } }));
        },
        (Story, props) => {
            return (React.createElement(QueryClientProvider, { client: queryClient },
                React.createElement(Story, { props: props })));
        }
    ],
    args: {
        data: [],
        dataTextProperty: "name",
        onSelect: (value) => console.log(value),
        onChange: (value) => console.log(value)
    }
};
export default meta;
export const BasicQuickSearch = {
    args: {}
};
