export declare function getRequest<T>(url: string, headers?: RequestInit["headers"], withCredentials?: boolean): Promise<T | undefined>;
export declare function getRequestNoJSON(url: string, headers?: RequestInit["headers"], withCredentials?: boolean): Promise<Response | undefined>;
