import React, { ReactNode } from "react";
type LoginPropsForm = {
    children?: ReactNode;
    formHeader?: ReactNode;
    formFooter?: ReactNode;
    className?: string;
    logo?: ReactNode;
    isValid?: boolean;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>, isValid?: boolean) => Promise<void>;
} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
declare const LoginForm: ({ children, formHeader, logo, handleSubmit, isValid, className, formFooter, ...props }: LoginPropsForm) => React.JSX.Element;
export default LoginForm;
