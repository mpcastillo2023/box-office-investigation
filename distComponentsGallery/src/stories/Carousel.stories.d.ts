import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        responsive: import("react-multi-carousel").CarouselProps["responsive"];
        children: React.ReactNode[];
        disabled?: boolean;
        className?: import("react-multi-carousel").CarouselProps["className"];
        buttonClassName?: string;
        buttonsTopPosition?: {
            top?: React.CSSProperties["top"];
            bottom?: React.CSSProperties["bottom"];
        };
    } & Omit<Readonly<import("react-multi-carousel").CarouselProps>, "ref" | "children"> & React.RefAttributes<unknown>>;
    tags: string[];
    args: {
        children: React.JSX.Element[];
        responsive: {
            superLargeDesktop: {
                breakpoint: {
                    max: number;
                    min: number;
                };
                items: number;
            };
            desktop: {
                breakpoint: {
                    max: number;
                    min: number;
                };
                items: number;
            };
            tablet: {
                breakpoint: {
                    max: number;
                    min: number;
                };
                items: number;
            };
            mobile: {
                breakpoint: {
                    max: number;
                    min: number;
                };
                items: number;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCarousel: Story;
export declare const DisabledCarousel: Story;
