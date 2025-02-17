import React, { ComponentProps } from "react";
import EmailInput from "../EmailInput";
type UseEmailInputProps = Pick<ComponentProps<typeof EmailInput>, "onChange">;
declare const UseEmailInput: (props: UseEmailInputProps) => {
    onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    emailValue: string;
};
export default UseEmailInput;
