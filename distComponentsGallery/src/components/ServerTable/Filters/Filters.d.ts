import React from "react";
import { TableFilters, Translations } from "../Types/Types";
type Props = {
    filters?: TableFilters;
    queryParams: Record<string, number | string | boolean>;
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    hasSearch: boolean;
    translations: Translations;
};
export default function Filters({ filters, queryParams, hasSearch, setQueryParams, translations }: Props): React.JSX.Element;
export {};
