import React, { ComponentProps } from "react";
import VerificationInput from "../VerificationInput";
type UseVerificationInputProps = {
    props: Pick<ComponentProps<typeof VerificationInput>, "value" | "onChange">;
};
declare const UseVerificationInput: ({ props }: UseVerificationInputProps) => {
    onChangeCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
    codeValue: string | undefined;
};
export default UseVerificationInput;
