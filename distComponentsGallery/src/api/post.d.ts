export declare const post: (url: string, data: unknown, headers?: RequestInit["headers"], withCredentials?: boolean) => Promise<Response>;
export declare const postRequest: (url: string, data: unknown, headers?: RequestInit["headers"], withCredentials?: boolean) => Promise<unknown>;
export declare const postRequestNoJson: (url: string, data: unknown, headers?: RequestInit["headers"], withCredentials?: boolean) => Promise<void>;
