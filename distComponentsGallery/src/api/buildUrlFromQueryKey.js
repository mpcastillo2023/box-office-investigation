import { objectHasProperty } from "@cg-utils";
export const buildUrlFromQueryKey = (queryKey) => {
    const urlFilter = [];
    const urlPath = [];
    queryKey.forEach((query) => {
        if (typeof query === "string" || typeof query === "number") {
            urlPath.push(query);
        }
        else if (typeof query === "object" && !Array.isArray(query)) {
            for (const key in query) {
                if (objectHasProperty(query, key)) {
                    urlFilter.push(`${encodeURI(key)}=${encodeURI(query[key])}`);
                }
            }
        }
    });
    return {
        queryParams: urlFilter.length > 0 ? `?${urlFilter.join("&")}` : "",
        endpoint: urlPath.join("/")
    };
};
