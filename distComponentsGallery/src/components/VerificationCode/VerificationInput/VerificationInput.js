import React, { forwardRef } from "react";
import styles from "../Styles/styles.module.scss";
import UseVerificationInput from "./Hooks/UseVerificationInput";
import { blockInvalidChar } from "./Utils";
const VerificationInput = forwardRef(function VerificationInput({ type = "text", codeType = "alphanumeric", ...props }, ref) {
    const { codeValue, onChangeCode } = UseVerificationInput({
        props: { value: props.value, onChange: props.onChange }
    });
    const errorClass = props.isThereError ? styles["error"] : "";
    const disabledStyles = props.disabled ? styles.disabled : "";
    const classNameStyles = props.className ? props.className : "";
    return (React.createElement("input", { className: `${styles.inputCode} ${disabledStyles} ${errorClass} ${classNameStyles}`, ref: ref, ...props, inputMode: codeType === "number" ? "numeric" : "text", onKeyDown: (e) => blockInvalidChar(e, type), onChange: onChangeCode, value: codeValue || props.value, pattern: codeType === "alphabetic"
            ? "/p{L}+/u"
            : codeType === "number"
                ? "/d+/"
                : undefined, type: type }));
});
export default VerificationInput;
