import objectHasProperty from "@cg-utils/objectHasProperty";
import { errorHandlerForReactQuery } from "./errorHandlerForReactQuery";
export const putRequest = async (url, data, headers, withCredentials = true) => {
    try {
        const response = await put(url, data, headers, withCredentials);
        return response.json();
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
};
export const putRequestNoJson = async (url, data, headers, withCredentials = true) => {
    try {
        await put(url, data, headers, withCredentials);
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
};
const put = async (url, data, headers, withCredentials = true) => {
    const response = await fetch(url, {
        method: "PUT",
        credentials: withCredentials ? "include" : "omit",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let parsedResponse;
        try {
            parsedResponse = await response?.json();
        }
        catch {
            throw new Error(`Error code ${response.status}`);
        }
        if (objectHasProperty(parsedResponse, "message")) {
            throw new Error(parsedResponse.message);
        }
        else {
            throw new Error(`Error code ${response.status}`);
        }
    }
    return response;
};
