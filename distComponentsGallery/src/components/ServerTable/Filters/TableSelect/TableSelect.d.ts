import { SelectFilter } from "@cg-components/ServerTable/Types/Types";
import React from "react";
type Props = {
    selectFilter: SelectFilter;
    queryParams: Record<string, number | string | boolean>;
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
};
export default function TableSelect({ selectFilter, queryParams, setQueryParams }: Props): React.JSX.Element;
export {};
