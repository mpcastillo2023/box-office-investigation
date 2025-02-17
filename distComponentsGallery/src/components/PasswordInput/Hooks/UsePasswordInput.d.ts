import React, { ComponentProps } from "react";
import PasswordInput from "../PasswordInput";
type UsePasswordInputProps = {
    props: Pick<ComponentProps<typeof PasswordInput>, "onChange">;
};
declare function UsePasswordInput({ props }: UsePasswordInputProps): {
    inputType: React.HTMLInputTypeAttribute | undefined;
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
    valuePassword: string;
    handleToggle: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export default UsePasswordInput;
