/* eslint-disable react/jsx-no-literals */
import { BasicTable } from "@cg-components/index";
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
    },
    {
        taxId: 5,
        name: "17%"
    },
    {
        taxId: 6,
        name: "12%"
    },
    {
        taxId: 7,
        name: "3%"
    }
];
const meta = {
    title: "BasicTable",
    component: BasicTable,
    tags: ["autodocs"],
    args: {
        columns,
        displayData: taxes
    }
};
export default meta;
export const BasicTableExample = {
    args: {}
};
