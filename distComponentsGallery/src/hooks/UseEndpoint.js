import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getQuery } from "@cg-api/getQuery";
export default function UseEndpoint({ endpoint, defaultQueryParams = {}, extraQueryKey = [] }) {
    const [queryParams, setQueryParams] = useState(defaultQueryParams);
    const queryKey = Object.keys(queryParams).length > 0
        ? [...endpoint, ...extraQueryKey, { ...queryParams }]
        : [...endpoint, ...extraQueryKey];
    const { data, isError, error, isFetching, isLoading } = useQuery({
        queryKey: queryKey,
        queryFn: (getQuery),
        refetchOnWindowFocus: false
    });
    //Temp solution for count
    const tempQueryKey = Object.keys(queryParams).length > 0
        ? [...endpoint, ...extraQueryKey, { ...queryParams, size: 400, page: 1 }]
        : [...endpoint, ...extraQueryKey, { size: 400, page: 1 }];
    const tempQuery = useQuery({
        queryKey: tempQueryKey,
        queryFn: (getQuery),
        refetchOnWindowFocus: false
    });
    const count = Array.isArray(tempQuery.data) ? tempQuery.data.length : 1;
    return {
        data,
        isError,
        error,
        isFetching,
        isLoading,
        setQueryParams,
        queryParams,
        count
    };
}
