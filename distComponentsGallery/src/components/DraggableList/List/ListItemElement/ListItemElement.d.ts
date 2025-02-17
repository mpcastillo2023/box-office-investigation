import React from "react";
type Props = {
    children: React.ReactNode;
    listItemIndex: number;
    shouldDisplayKey: boolean;
};
export default function ListItemElement({ listItemIndex, children, shouldDisplayKey }: Props): React.JSX.Element;
export {};
