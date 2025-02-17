import React from "react";
type Client = {
    name: string;
    imageUrl: string;
    clientUrl: string;
};
type ClientContextValue = {
    client: Client;
    setClient: (client: Client) => void;
};
export declare const ClientContext: React.Context<ClientContextValue>;
type Props = {
    children: React.ReactNode;
    defaultClientForProvider?: Client;
};
export declare const ClientContextProvider: ({ children, defaultClientForProvider }: Props) => React.JSX.Element;
export {};
