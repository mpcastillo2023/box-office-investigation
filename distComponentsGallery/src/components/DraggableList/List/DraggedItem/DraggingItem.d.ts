import React from "react";
type Props = {
    children: React.ReactNode;
    shouldDisplayKey: boolean;
    listRef: React.MutableRefObject<HTMLUListElement | undefined>;
};
export default function DraggingItem({ children, shouldDisplayKey, listRef }: Props): React.JSX.Element;
export {};
