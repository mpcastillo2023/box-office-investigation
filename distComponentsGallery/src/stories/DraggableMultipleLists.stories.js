import { DraggableMultipleLists } from "../components";
const meta = {
    title: "DraggableMultipleLists",
    component: DraggableMultipleLists,
    tags: ["autodocs"],
    args: {
        withButtons: false,
        onChange: undefined,
        defaultValue: [
            {
                title: "Inactivos",
                items: [
                    { id: 1, itemText: "Primer  item" },
                    { id: 2, itemText: "Segundo  item" }
                ],
                hasButton: true,
                buttonIndexToMoveTo: 1,
                buttonText: "Agregar todos"
            },
            {
                title: "Activos",
                items: [
                    { id: 3, itemText: "Tercer  item" },
                    { id: 4, itemText: "Cuarto  item" }
                ],
                hasButton: true,
                buttonIndexToMoveTo: 0,
                buttonText: "Remover todos"
            }
        ]
    }
};
export default meta;
export const TwoColumns = {
    args: {
        defaultValue: [
            {
                title: "Inactivos",
                items: [
                    { id: 1, itemText: "Primer  item" },
                    { id: 2, itemText: "Segundo  item" }
                ],
                hasButton: true,
                buttonIndexToMoveTo: 1,
                buttonText: "Agregar todos"
            },
            {
                title: "Activos",
                items: [
                    { id: 3, itemText: "Tercer  item" },
                    { id: 4, itemText: "Cuarto  item" }
                ],
                hasButton: true,
                buttonIndexToMoveTo: 0,
                buttonText: "Remover todos"
            }
        ]
    }
};
export const MultipleColumns = {
    args: {
        defaultValue: [
            {
                title: "Inactivos",
                items: [
                    { id: 1, itemText: "Primer  item" },
                    { id: 2, itemText: "Segundo  item" }
                ]
            },
            {
                title: "Activos",
                items: [
                    { id: 3, itemText: "Tercer  item" },
                    { id: 4, itemText: "Cuarto  item" }
                ]
            },
            {
                title: "Seleccionados",
                items: [
                    { id: 5, itemText: "Quinto  item" },
                    { id: 6, itemText: "Sexto  item" }
                ]
            },
            {
                title: "Deshabilitados",
                items: [
                    { id: 7, itemText: "Septimo  item" },
                    { id: 8, itemText: "Octavo item" }
                ]
            }
        ]
    }
};
