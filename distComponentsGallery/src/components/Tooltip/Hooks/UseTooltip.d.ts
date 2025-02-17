import React from "react";
import Tooltip from "../Tooltip";
type Props = React.ComponentProps<typeof Tooltip>;
type Position = {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
};
export default function UseTooltip({ className, position }: Props): {
    handleHover: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleLeave: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
    parentRef: React.RefObject<HTMLDivElement>;
    tooltipClasses: string;
    childRef: React.RefObject<HTMLDivElement>;
    positionElement: Position;
};
export {};
