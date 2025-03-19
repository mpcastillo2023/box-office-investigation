import { TextInput } from "../components";
const meta = {
    title: "TextInput",
    component: TextInput,
    tags: ["autodocs"],
    args: {}
};
export default meta;
export const DefaultTextInput = {
    args: {}
};
export const DisabledTextInput = {
    args: {
        disabled: true,
        value: "Clorian"
    }
};
export const TextInputWithPlaceholder = {
    args: {
        placeholder: "Name"
    }
};
