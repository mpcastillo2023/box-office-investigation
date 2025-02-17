import React from "react";
import { customStyleClasses } from "../../../Types/Types";
type Props = {
    id: number | string;
    itemText: string;
    customStyle?: customStyleClasses;
    isActive?: boolean;
};
export default function DraggableListItem({ id, itemText, customStyle, isActive }: Props): React.JSX.Element;
export {};
