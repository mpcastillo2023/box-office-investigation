import React, { useState, createContext } from "react";
const getDefaultClient = () => {
    const storedClient = localStorage.getItem("client");
    if (storedClient) {
        try {
            const client = JSON.parse(storedClient);
            return client;
        }
        catch {
            return {};
        }
    }
    return {};
};
const defaultClient = getDefaultClient();
export const ClientContext = createContext(defaultClient);
export const ClientContextProvider = ({ children, defaultClientForProvider = defaultClient }) => {
    const [client, setClient] = useState(defaultClientForProvider);
    const setClientHandler = (client) => {
        localStorage.setItem("client", JSON.stringify(client));
        setClient(client);
    };
    return (React.createElement(ClientContext.Provider, { value: {
            client,
            setClient: setClientHandler
        } }, children));
};
