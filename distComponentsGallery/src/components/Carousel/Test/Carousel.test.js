import React from "react";
import { screen, render } from "@testing-library/react";
import { expect, test, describe, beforeEach } from "vitest";
import { Carousel } from "@cg-components/index";
import { carouselItems } from "./Utils";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
describe("Carousel testing", () => {
    beforeEach(() => {
        render(React.createElement(Carousel, { responsive: responsive }, carouselItems));
    });
    test("should display Carousel Component", () => {
        const carousel = screen.getByRole("list");
        expect(carousel).toHaveClass("react-multi-carousel-track");
    });
});
