import React from "react";
type Props = {
    setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
    page: number;
    text?: string | React.ReactNode;
    disabled?: boolean;
    ariaLabel?: string;
};
export default function PaginationItem({ page, setQueryParams, text, disabled, ariaLabel }: Props): React.JSX.Element;
export {};
