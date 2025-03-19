import deepParseJson from "@cg-utils/deepParseJson";
import { errorHandlerForReactQuery } from "./errorHandlerForReactQuery";
import objectHasProperty from "@cg-utils/objectHasProperty";
const get = async (url, headers, withCredentials = true) => {
    const response = await fetch(url, {
        credentials: withCredentials ? "include" : "omit",
        headers
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
export async function getRequest(url, headers, withCredentials = true) {
    try {
        const response = await get(url, headers, withCredentials);
        const parsedResponse = (await response?.json());
        return deepParseJson(parsedResponse);
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
}
export async function getRequestNoJSON(url, headers, withCredentials = true) {
    try {
        return await get(url, headers, withCredentials);
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
}
