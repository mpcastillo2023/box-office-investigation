import React from "react";
import clorianLogo from "../../../assets/images/ClorianLogo.png";
import styles from "./Styles/styles.module.scss";
const LoginForm = ({ children, formHeader, logo, handleSubmit, isValid, className, formFooter, ...props }) => {
    return (React.createElement("form", { ...props, className: `${styles.form} ${className || ""}`, onSubmit: (e) => {
            if (handleSubmit) {
                handleSubmit(e, isValid);
            }
            if (props.onSubmit) {
                props.onSubmit(e);
            }
        }, role: "form" },
        logo ? (logo) : (React.createElement("img", { className: styles.formImage, src: clorianLogo, alt: "clorian-logo" })),
        formHeader ? formHeader : null,
        children ? React.createElement("div", { className: styles.formWrapper }, children) : null,
        formFooter ? formFooter : null));
};
export default LoginForm;
