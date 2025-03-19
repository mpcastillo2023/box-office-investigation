import React, { memo } from "react";
import ChevronUp from "@cg-icons/ControlArrowUp.svg";
import ChevronDown from "@cg-icons/ControlArrowDown.svg";
import styles from "../Styles/styles.module.scss";
import UseControls from "./Hooks/UseControls";
const Controls = memo(function Controls(props) {
    const { disabled } = props;
    const { handleAddTime, handleRemoveTime } = UseControls(props);
    return (React.createElement("div", { className: styles.arrowsContainer, "aria-label": `${props.inputType}-controls` },
        React.createElement("button", { onClick: (e) => handleAddTime(e), disabled: disabled },
            React.createElement(ChevronUp, null)),
        React.createElement("button", { disabled: disabled, onClick: (e) => handleRemoveTime(e) },
            React.createElement(ChevronDown, null))));
});
export default Controls;
