import BasicTable from "@cg-components/BasicTable/BasicTable";
import React from "react";
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
export const carouselItems = [
    React.createElement("div", { key: "table1" },
        React.createElement(BasicTable, { columns: columns, displayData: taxes }),
        React.createElement(BasicTable, { columns: columns, displayData: taxes })),
    React.createElement("div", { key: "table2" },
        React.createElement(BasicTable, { columns: columns, displayData: taxes }),
        React.createElement(BasicTable, { columns: columns, displayData: taxes }))
];
