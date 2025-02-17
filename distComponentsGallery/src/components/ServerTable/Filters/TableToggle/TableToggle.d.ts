import { ToggleFilter } from "@cg-components/ServerTable/Types/Types";
import React from "react";
type Props = {
    toggleFilter: ToggleFilter;
    queryParams: Record<string, number | string | boolean>;
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
};
export default function TableToggle({ toggleFilter, queryParams, setQueryParams }: Props): React.JSX.Element;
export {};
