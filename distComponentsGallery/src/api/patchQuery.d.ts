type data<T> = {
    data: Partial<T>;
    endpoint: string;
};
export declare function patchQuery<T>({ endpoint, data }: data<T>): Promise<T>;
export {};
