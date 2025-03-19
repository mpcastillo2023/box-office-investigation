import { RadioButtonGroup } from "../components";
const meta = {
    title: "RadioButtonGroup",
    component: RadioButtonGroup,
    tags: ["autodocs"],
    args: {
        options: [
            {
                optionText: "Castellano",
                optionValue: "ES"
            },
            {
                optionText: "Inglés",
                optionValue: "EN"
            },
            {
                optionText: "Catalan",
                optionValue: "CAT"
            }
        ],
        name: "radioButtonGroup",
        onChange: undefined
    }
};
export default meta;
export const BasicRadioButtonGroup = {
    args: {}
};
export const DisabledRadioButtonGroup = {
    args: {
        disabled: true
    }
};
