import React from "react";
import { Column } from "../Types/Types";
import { customStyleClasses } from "@cg-components/BasicTable/Types/Types";
type Props = {
    columns: Column[];
    customStyle?: customStyleClasses;
} & (WithoutActionColumnProps | WithActionColumnProps);
type WithoutActionColumnProps = {
    withActionColumn?: false;
};
type WithActionColumnProps = {
    withActionColumn: true;
    actionColumnText: string;
};
export default function TableHeader(props: Props): React.JSX.Element;
export {};
