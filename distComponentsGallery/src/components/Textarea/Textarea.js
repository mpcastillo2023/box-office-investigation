import React, { useEffect, useRef } from "react";
import styles from "./Styles/styles.module.scss";
const Textarea = ({ variant = "basic", isThereError = false, className, refCallback, ...props }) => {
    const elementRef = useRef();
    const variantClass = variant ? styles[variant] : "";
    const errorClass = isThereError ? styles["inputError"] : "";
    const disabledClass = props.disabled ? styles.disabledInput : "";
    useEffect(() => {
        if (refCallback && elementRef.current) {
            refCallback(elementRef.current);
        }
    }, [refCallback]);
    return (React.createElement("div", { className: `${variantClass} ${errorClass} ${className || ""} ${disabledClass}` },
        React.createElement("textarea", { ...props, role: "textarea", ref: elementRef })));
};
export default Textarea;
