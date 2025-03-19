import React from "react";
import styles from "./Styles/styles.module.scss";
/**
 * The Button component renders a customizable button element that accepts children to be displayed inside.
 * It supports various visual style variants and an optional rounded appearance.
 *
 * @param {Props} props - Props for the Button component.
 * @returns {JSX.Element}
 */
const Button = ({ children, variant = "", rounded = false, size = "large", ...props }) => {
    const defaultCssClass = variant ? styles[variant] : "";
    const sizeCssClass = size ? styles[size] : "";
    const propsCssClass = props.className ? props.className : "";
    const roundedCssClass = rounded ? styles.rounded : "";
    return (React.createElement("button", { ...props, className: `${defaultCssClass} ${styles.basic} ${sizeCssClass} ${roundedCssClass} ${propsCssClass}` }, children));
};
export default Button;
