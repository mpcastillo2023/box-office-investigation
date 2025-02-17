import React, { ReactNode } from "react";
type Props = {
    textButton?: ReactNode;
    formHeader?: ReactNode;
    formFooter?: ReactNode;
    logo?: ReactNode;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>, isValid?: boolean) => Promise<void>;
    isValid?: boolean;
    children?: ReactNode;
} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
declare const VerificationForm: ({ handleSubmit, children, isValid, logo, formFooter, formHeader, ...props }: Props) => React.JSX.Element;
export default VerificationForm;
