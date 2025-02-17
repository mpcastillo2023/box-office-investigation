import React from "react";
import { Column, customStyleClasses } from "../Types/Types";
type Props = {
    columns: Column[];
    variant?: "primary" | "secondary";
    customStyle?: customStyleClasses;
};
export default function TableHeader({ columns, variant, customStyle }: Props): React.JSX.Element;
export {};
