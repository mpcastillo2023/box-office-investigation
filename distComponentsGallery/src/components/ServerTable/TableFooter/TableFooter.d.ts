import React from "react";
import { CustomCssClasses, Translations } from "../Types/Types";
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
    customStyles?: CustomCssClasses;
};
export default function TableFooter({ setQueryParams, rowsPerPage, currentPage, totalPages, totalItems, translations, initialPageIsZero, downloadCallBack }: Props): React.JSX.Element;
export {};
