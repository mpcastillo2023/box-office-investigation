import React from "react";
import { Column, CustomCssClasses } from "../Types/Types";
type Props = {
    columns: Column[];
    queryParams: Record<string, number | string | boolean>;
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    tHeadRef: (node: Element | null) => void;
    customStyles?: CustomCssClasses;
};
export default function TableHeader({ columns, queryParams, setQueryParams, tHeadRef, customStyles }: Props): React.JSX.Element;
export {};
