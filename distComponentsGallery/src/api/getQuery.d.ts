import { QueryKey } from "@tanstack/react-query";
export declare function getQuery<T>({ queryKey }: {
    queryKey: QueryKey;
}): Promise<T | undefined>;
export declare function getQueryWithoutDefaultUrl<T>(endpoint: string): Promise<T | undefined>;
