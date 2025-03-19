import React from "react";
import UseCollapseButton from "./Hooks/UseCollapseButton";
/**
 * CollapseButton component provides a button that can be used to toggle between collapsed and uncollapsed states.
 * It supports different icons for desktop and mobile views, and for both collapsed and uncollapsed states.
 * Custom styling classes can be applied to the button in both states.
 *
 * @param {Props} props - Props for the CollapseButton component.
 * @returns {JSX.Element}
 */
export default function CollapseButton(props) {
    const { onClickHandler, currentIcon, collapsed } = UseCollapseButton(props);
    return (React.createElement("div", { className: collapsed
            ? props.customStyle?.collapsedButton
            : props.customStyle?.uncollapsedButton, onClick: onClickHandler }, currentIcon));
}
