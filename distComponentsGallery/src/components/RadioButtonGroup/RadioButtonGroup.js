import React, { useEffect, useState } from "react";
import RadioButton from "./RadioButton/RadioButton";
import styles from "./Styles/styles.module.scss";
/**
 * RadioButtonGroup component allows users to select a single option from a group of options.
 * It renders a group of radio buttons with a title and supports custom option values, disabling the entire group, and other accessibility features.
 *
 * @param {Props} props - Props for the RadioButtonGroup component.
 * @returns {JSX.Element}
 */
export default function RadioButtonGroup({ options, disabled, value, onChange, ariaLabel, name, customStyles }) {
    const [selectedOption, setSelectedOption] = useState(value);
    useEffect(() => {
        setSelectedOption(value);
    }, [value]);
    const renderRadioButtons = () => {
        return options.map((option, index) => {
            const isChecked = option.optionValue === selectedOption;
            return (React.createElement(RadioButton, { key: index, radioButtonOption: option, isChecked: isChecked, onChange: onChange, setSelectedOption: setSelectedOption, disabled: disabled, ariaLabel: ariaLabel, name: name }));
        });
    };
    const disabledClass = disabled ? styles.disabled : "";
    return (React.createElement("div", { className: ` ${styles.radioButtonGroupContainer} ${disabledClass}` },
        React.createElement("div", { className: `${customStyles?.customRadioButtonGroup || ""} ${styles.radioButtonGroup} ` }, renderRadioButtons())));
}
