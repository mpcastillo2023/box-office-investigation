import { columnInfo, Item } from "../Types/Types";
type updateInfo = {
    prevColumnIndex: number;
    newColumnIndex: number;
    prevItemIndex: number;
    newItemIndex: number;
    prevColumns: columnInfo[];
    activeItem: Item;
};
declare const updateColumnItems: ({ prevColumnIndex, newColumnIndex, prevItemIndex, newItemIndex, prevColumns, activeItem }: updateInfo) => ({
    title: React.ReactNode;
    items: Item[];
    hidden?: boolean;
    buttonText: string;
    buttonIndexToMoveTo: number;
    hasButton: true;
} | {
    title: React.ReactNode;
    items: Item[];
    hidden?: boolean;
    hasButton?: false;
})[];
export default updateColumnItems;
