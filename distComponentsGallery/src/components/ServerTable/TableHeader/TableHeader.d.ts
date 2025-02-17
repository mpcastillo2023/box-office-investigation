import React from "react";
import { Column } from "../Types/Types";
type Props = {
    columns: Column[];
    queryParams: Record<string, number | string | boolean>;
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    tHeadRef: (node: Element | null) => void;
};
export default function TableHeader({ columns, queryParams, setQueryParams, tHeadRef }: Props): React.JSX.Element;
export {};
