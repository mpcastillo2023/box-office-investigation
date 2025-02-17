type data<T> = {
    data: Partial<T>;
    endpoint: string;
};
export declare function postQuery<T>({ endpoint, data }: data<T>): Promise<T>;
export {};
