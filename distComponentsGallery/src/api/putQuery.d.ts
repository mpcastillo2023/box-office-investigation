export type data<T> = {
    data: Partial<T>;
    endpoint: string;
};
export declare function putQuery<T>({ endpoint, data }: data<T>): Promise<T>;
