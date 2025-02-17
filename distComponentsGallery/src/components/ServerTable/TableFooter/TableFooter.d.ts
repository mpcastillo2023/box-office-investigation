import React from "react";
import { Translations } from "../Types/Types";
type Props = {
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    rowsPerPage: number;
    currentPage: number;
    totalPages: number;
    totalItems: number;
    translations: Translations;
    initialPageIsZero: boolean;
    downloadEndpoint?: string;
    downloadCallBack?: () => void;
};
export default function TableFooter({ setQueryParams, rowsPerPage, currentPage, totalPages, totalItems, translations, initialPageIsZero, downloadCallBack }: Props): React.JSX.Element;
export {};
