type IconColumn<T> = {
    key: keyof T;
    activeIconTestid?: string;
    inactiveIconTestid?: string;
    columnIndex: number;
};
declare const checkTableBoolIcons: <T>(iconColumns: IconColumn<T>[] | undefined, expectedData: T[]) => Promise<void>;
export default checkTableBoolIcons;
