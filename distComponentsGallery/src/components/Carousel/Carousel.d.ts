import React from "react";
import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Styles/carouselGlobalStyles.scss";
type ButtonsTopPosition = {
    top?: React.CSSProperties["top"];
    bottom?: React.CSSProperties["bottom"];
};
declare const CustomCarousel: React.ForwardRefExoticComponent<{
    responsive: CarouselProps["responsive"];
    /**
     * The children to render inside the carousel component. An array of elements to show inside the elements
     * @param {CarouselProps["children"]}
     */
    children: React.ReactNode[];
    /**
     * Whether the carousel is disabled or not.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Css styles className for the carousel
     * @param {CarouselProps["className"]}
     */
    className?: CarouselProps["className"];
    /**
     * Css styles className for each button
     * @param {string | undefined}
     */
    buttonClassName?: string;
    /**
     * Object with top and bottom position inline css properties
     * @param {buttonsTopPosition?: ButtonsTopPosition}
     */
    buttonsTopPosition?: ButtonsTopPosition;
} & Omit<Readonly<CarouselProps>, "ref" | "children"> & React.RefAttributes<unknown>>;
export type { Carousel as OriginCarousel };
export default CustomCarousel;
