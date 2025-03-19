import React from "react";
import clorianLogo from "../../../../assets/images/ClorianLogo.png";
import styles from "../Styles/styles.module.scss";
const VerificationForm = ({ handleSubmit, children, isValid, logo, formFooter, formHeader, ...props }) => {
    return (React.createElement("form", { onSubmit: (e) => {
            if (handleSubmit) {
                handleSubmit(e, isValid);
            }
            if (props.onSubmit) {
                props.onSubmit(e);
            }
        }, className: `${styles.form} ${props.className || ""}`, ...props },
        React.createElement("div", { className: styles.formContainer },
            logo ? (logo) : logo ? (React.createElement("img", { className: styles.formImage, src: clorianLogo, alt: "clorian-logo" })) : null,
            formHeader ? formHeader : null,
            children ? (React.createElement("div", { className: styles.gridContainer }, children)) : null,
            formFooter ? formFooter : null)));
};
export default VerificationForm;
