import { buildUrlFromQueryKey } from "./buildUrlFromQueryKey";
import { getRequest } from "./get";
export async function getQuery({ queryKey }) {
    const { endpoint, queryParams } = buildUrlFromQueryKey(queryKey);
    return getRequest(`${import.meta.env.VITE_ADMIN_QA_BASE_URL}/${endpoint}${queryParams}`);
}
export async function getQueryWithoutDefaultUrl(endpoint) {
    return getRequest(`${import.meta.env.VITE_ADMIN_QA_BASE_URL}/${endpoint}`);
}
