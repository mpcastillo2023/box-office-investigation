import { ComponentProps } from "react";
import Checkbox from "../Checkbox";
export default function UseCheckbox({ variant, value, onChange, size, disabled, ariaLabel }: ComponentProps<typeof Checkbox>): {
    checked: boolean;
    variantStyles: string;
    checkedStyles: string;
    sizeStyles: string;
    disabledStyles: string;
    clickHandler: () => void;
    ariaLabel: string | undefined;
};
