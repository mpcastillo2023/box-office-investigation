/* eslint-disable react/jsx-no-literals */
import React from "react";
import { BasicTable, Carousel } from "../components";
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
        items: 2
    }
};
const columns = [
    {
        name: "taxId",
        label: "Identificador"
    },
    {
        name: "name",
        label: "Nombre"
    }
];
const taxes = [
    {
        taxId: 1,
        name: "10%"
    },
    {
        taxId: 2,
        name: "5%"
    },
    {
        taxId: 3,
        name: "12%"
    },
    {
        taxId: 4,
        name: "20%"
    }
];
const carouselItems = [
    React.createElement("div", { key: "table1" },
        React.createElement(BasicTable, { columns: columns, displayData: taxes }),
        React.createElement(BasicTable, { columns: columns, displayData: taxes })),
    React.createElement("div", { key: "table2" },
        React.createElement(BasicTable, { columns: columns, displayData: taxes }),
        React.createElement(BasicTable, { columns: columns, displayData: taxes }))
];
const meta = {
    title: "Carousel",
    component: Carousel,
    tags: ["autodocs"],
    args: {
        children: carouselItems,
        responsive: responsive
    }
};
export default meta;
export const DefaultCarousel = {
    args: {}
};
export const DisabledCarousel = {
    args: {
        disabled: true
    }
};
