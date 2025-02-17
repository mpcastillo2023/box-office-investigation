import { buildUrlFromQueryKey } from "./buildUrlFromQueryKey";
import { getRequest } from "./get";
import { QueryKey } from "@tanstack/react-query";

export async function getQuery<T>({ queryKey }: { queryKey: QueryKey }) {
  const { endpoint, queryParams } = buildUrlFromQueryKey(queryKey);
  return getRequest<T>(
    `${import.meta.env.VITE_ADMIN_QA_BASE_URL}/${endpoint}${queryParams}`
  );
}

export async function getQueryWithoutDefaultUrl<T>(endpoint: string) {
  return getRequest<T>(`${import.meta.env.VITE_ADMIN_QA_BASE_URL}/${endpoint}`);
}
