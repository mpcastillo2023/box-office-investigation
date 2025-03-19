import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Styles/styles.module.scss";
import { Button } from "..";
import LeftArrow from "@cg-icons/CarouselLeftArrow.svg";
import RightArrow from "@cg-icons/CarouselRightArrow.svg";
import "./Styles/carouselGlobalStyles.scss";
import { forwardRef } from "react";
const CustomRightArrow = (props) => {
    return (React.createElement(Button, { type: "button", disabled: props.disabled, className: `${styles.buttonRight} ${props.disabled ? styles.disabled : ""} ${props.buttonClassName ? props.buttonClassName : ""}`, style: {
            top: props.buttonsTopPosition?.top,
            bottom: props.buttonsTopPosition?.bottom
        }, "aria-label": "right-button", onClick: props.onClick },
        React.createElement(RightArrow, null)));
};
const CustomLeftArrow = (props) => {
    return (React.createElement(Button, { type: "button", disabled: props.disabled, className: `${styles.buttonLeft} ${props.disabled ? styles.disabled : ""} ${props.buttonClassName ? props.buttonClassName : ""}`, style: {
            top: props.buttonsTopPosition?.top,
            bottom: props.buttonsTopPosition?.bottom
        }, "aria-label": "left-button", onClick: props.onClick },
        React.createElement(LeftArrow, null)));
};
const CustomCarousel = forwardRef(function CustomCarousel(props, ref) {
    const { children, responsive, disabled, buttonClassName, buttonsTopPosition, ...rest } = props;
    return (React.createElement("div", { className: styles.carouselContainer },
        React.createElement(Carousel, { responsive: responsive, customLeftArrow: React.createElement(CustomLeftArrow, { disabled: disabled, buttonClassName: buttonClassName, buttonsTopPosition: buttonsTopPosition }), customRightArrow: React.createElement(CustomRightArrow, { disabled: disabled, buttonClassName: buttonClassName, buttonsTopPosition: buttonsTopPosition }), ...rest, ref: ref }, children.map((item, index) => (React.createElement(React.Fragment, { key: index }, item))))));
});
export default CustomCarousel;
