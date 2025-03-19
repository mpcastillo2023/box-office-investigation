import { Transferlist } from "../components";
const columns = {
    leftColumn: [
        {
            id: 1,
            text: "Social"
        },
        {
            id: 2,
            text: "Paquete"
        },
        {
            id: 3,
            text: "Adultos"
        }
    ],
    rightColumn: [
        {
            id: 4,
            text: "Ventas"
        },
        {
            id: 5,
            text: "Adultos mayores"
        },
        {
            id: 6,
            text: "Grupo escolar"
        }
    ]
};
const leftColumnTitle = "Disabled";
const rightColumnTitlte = "Enabled";
const meta = {
    title: "Transferlist",
    component: Transferlist,
    tags: ["autodocs"],
    args: {
        defaultColumns: columns,
        leftColumnTitle: leftColumnTitle,
        rightColumnTitle: rightColumnTitlte,
        onChange: () => { }
    }
};
export default meta;
export const WithoutCheckbox = {
    args: {}
};
export const WithCheckbox = {
    args: {
        hasCheckbox: true
    }
};
export const DisabledRightColumn = {
    args: {
        disabledColumns: ["rightColumn"]
    }
};
export const ShowOnlyRightColumn = {
    args: {
        showOnlyRightColumn: true,
        disabled: true
    }
};
