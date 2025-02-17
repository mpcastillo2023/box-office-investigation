import React from "react";
import { Translations } from "@cg-components/ServerTable/Types/Types";
type Props = {
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    currentPage: number;
    totalPages: number;
    rowsPerPage: number;
    totalItems: number;
    initialPageIsZero: boolean;
    translations: Translations;
};
export default function Pagination({ setQueryParams, currentPage, totalPages, rowsPerPage, totalItems, initialPageIsZero, translations }: Props): React.JSX.Element;
export {};
