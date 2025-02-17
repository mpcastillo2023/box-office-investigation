import { ReactNode } from "react";
export type RadioButtonOption = {
    optionValue: string | boolean;
    optionText: ReactNode | string | JSX.Element;
    disabled?: boolean;
};
