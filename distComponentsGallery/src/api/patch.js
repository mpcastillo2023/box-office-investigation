import objectHasProperty from "@cg-utils/objectHasProperty";
import { errorHandlerForReactQuery } from "./errorHandlerForReactQuery";
export const patch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
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
        return response.json();
    }
    catch (e) {
        errorHandlerForReactQuery(e);
    }
};
