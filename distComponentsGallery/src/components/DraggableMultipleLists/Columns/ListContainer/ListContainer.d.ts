import React from "react";
import { columnInfo, customStyleClasses, Item } from "../../Types/Types";
type Props = {
    id: number;
    column: columnInfo;
    idsOfItems: (string | number)[];
    customStyle?: customStyleClasses;
    activeItem: Item | null;
    handleMoveAll: (column: columnInfo, columnIndex: number) => void;
    disabled: boolean;
};
export default function ListContainer({ id, column, idsOfItems, customStyle, activeItem, handleMoveAll, disabled }: Props): React.JSX.Element;
export {};
