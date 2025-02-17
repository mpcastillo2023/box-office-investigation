type ExtraQueryParams<T> = {
    sortField: keyof T;
    sortDir: "ASC" | "DESC";
    q: string;
    size: number;
    page: number;
};
type params<T> = T extends unknown[] ? Partial<ExtraQueryParams<T[number]>> & Partial<T[number]> : Partial<ExtraQueryParams<T>> & Partial<T>;
type Props<T> = {
    endpoint: string[];
    defaultQueryParams?: params<T>;
    extraQueryKey?: string[];
};
export default function UseEndpoint<T>({ endpoint, defaultQueryParams, extraQueryKey }: Props<T>): {
    data: T | undefined;
    isError: boolean;
    error: Error | null;
    isFetching: boolean;
    isLoading: boolean;
    setQueryParams: import("react").Dispatch<import("react").SetStateAction<params<T>>>;
    queryParams: params<T>;
    count: number;
};
export {};
