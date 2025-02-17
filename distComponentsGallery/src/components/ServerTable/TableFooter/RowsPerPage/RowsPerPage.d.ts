import { Translations } from "@cg-components/ServerTable/Types/Types";
import React from "react";
type Props = {
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    rowsPerPage: number;
    translations: Translations;
    initialPageIsZero: boolean;
};
export default function RowsPerPage({ setQueryParams, rowsPerPage, translations, initialPageIsZero }: Props): React.JSX.Element;
export {};
