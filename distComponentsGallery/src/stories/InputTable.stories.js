/* eslint-disable react/jsx-no-literals */
import InputTable from "@cg-components/InputTable/InputTable";
const columns = [
    {
        name: "taxId",
        label: "Identificador",
        cellType: "number"
    },
    {
        name: "name",
        label: "Nombre",
        cellType: "string"
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
    title: "InputTable",
    component: InputTable,
    tags: ["autodocs"],
    args: {
        columns,
        data: taxes,
        withActionColumn: true,
        actionColumnText: "Acciones",
        onChange: undefined
    }
};
export default meta;
export const InputTableWithActions = {
    args: {}
};
export const InputTableWithoutActions = {
    args: {
        withActionColumn: false
    }
};
export const InputTableWithtActionsAndCallBack = {
    args: {
        withActionColumn: true,
        isValidSaveCallback: () => false
    }
};
export const InputTableWithSearch = {
    args: {
        withSearch: true,
        searchPlaceholder: "Search"
    }
};
export const InputTableWithSearchAndRemoveAllButton = {
    args: {
        withSearch: true,
        withRemoveAllButton: true,
        searchPlaceholder: "Search",
        removeAllButtonText: "Remove all"
    }
};
