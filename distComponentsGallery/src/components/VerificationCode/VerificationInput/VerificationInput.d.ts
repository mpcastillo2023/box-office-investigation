import React from "react";
type Props = {
    type?: "text" | "number";
    /**
     * Indicates whether there is an error in the input field.
     * @param {boolean}
     */
    isThereError?: boolean;
    codeType?: "alphabetic" | "number" | "alphanumeric";
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const VerificationInput: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default VerificationInput;
