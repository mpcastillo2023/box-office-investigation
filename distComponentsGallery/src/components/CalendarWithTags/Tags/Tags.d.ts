import React, { ComponentProps, ReactNode } from "react";
import { Button } from "@cg-components/Button";
type Props = {
    children: ReactNode;
} & ComponentProps<typeof Button>;
declare const Tags: ({ children, ...props }: Props) => React.JSX.Element;
export default Tags;
