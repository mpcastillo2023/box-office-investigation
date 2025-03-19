import { DropdownSelect } from "../components";
const meta = {
    title: "DropdownSelect",
    component: DropdownSelect,
    tags: ["autodocs"],
    args: {
        optionList: [
            {
                optionText: "Castellano",
                optionValue: "ES",
                optionAvailability: false
            },
            {
                optionText: "Ingles",
                optionValue: "EN",
                optionAvailability: false
            },
            {
                optionText: "Catalan",
                optionValue: "CAT",
                optionAvailability: true
            }
        ],
        onChange: undefined,
        iconOnLeft: false,
        placeholder: "Idioma: "
    }
};
export default meta;
export const WithLabel = {};
export const WithoutLabel = {
    args: {
        placeholder: undefined
    }
};
export const FullSize = {
    args: {
        placeholder: undefined,
        size: "full"
    }
};
export const DisabledDropdownSelect = {
    args: {
        disabled: true,
        value: "ES"
    }
};
export const WithPreselectedValue = {
    args: {
        value: "ES"
    }
};
export const WithDifferentIcon = {
    args: {
        iconOnLeft: true,
        value: "ES",
        icon: "+",
        activeIcon: "-"
    }
};
export const WithSubtitle = {
    args: {
        placeholder: undefined,
        withSubtitle: true,
        size: "large"
    }
};
