import { useEffect, useState } from "react";
import styles from "../Styles/styles.module.scss";
export default function UseCheckbox({ variant = "primary", value = false, onChange, size = "medium", disabled = false, ariaLabel }) {
    const [checked, setChecked] = useState(value);
    const checkedStyles = checked ? styles.checked : styles.unchecked;
    const variantStyles = variant ? styles[variant] : "";
    const sizeStyles = styles[size] ? styles[size] : "";
    const disabledStyles = disabled ? styles.disabled : "";
    const clickHandler = () => {
        if (!disabled) {
            if (onChange) {
                onChange(!checked);
            }
            else {
                setChecked((prevState) => {
                    return !prevState;
                });
            }
        }
    };
    useEffect(() => {
        setChecked(value);
    }, [value]);
    return {
        checked,
        variantStyles,
        checkedStyles,
        sizeStyles,
        disabledStyles,
        clickHandler,
        ariaLabel
    };
}
