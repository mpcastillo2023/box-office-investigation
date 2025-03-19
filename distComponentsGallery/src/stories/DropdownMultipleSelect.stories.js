import { DropdownMultipleSelect } from "../components";
const meta = {
    title: "DropdownMultipleSelect",
    component: DropdownMultipleSelect,
    tags: ["autodocs"],
    args: {
        optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Ingles",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ],
        onChange: undefined,
        label: "Selecciona multiples idiomas: "
    }
};
export default meta;
export const Default = {};
export const WithSelectAllOptions = {
    args: {
        withSelectAllOptions: true,
        selectAllOptionsText: "Sellecionar todos"
    }
};
