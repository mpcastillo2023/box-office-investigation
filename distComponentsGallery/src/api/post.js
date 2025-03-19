import { objectHasProperty } from "../utils";
import { errorHandlerForReactQuery } from "./errorHandlerForReactQuery";
export const post = async (url, data, headers, withCredentials = true) => {
    const response = await fetch(url, {
        method: "POST",
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
export const postRequest = async (url, data, headers, withCredentials = true) => {
    try {
        const response = await post(url, data, headers, withCredentials);
        return response.json();
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
};
export const postRequestNoJson = async (url, data, headers, withCredentials = true) => {
    try {
        await post(url, data, headers, withCredentials);
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
};
