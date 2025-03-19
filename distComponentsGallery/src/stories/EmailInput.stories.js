import { EmailInput } from "../components";
const meta = {
    title: "EmailInput",
    component: EmailInput,
    tags: ["autodocs"],
    args: {}
};
export default meta;
export const DefaultEmailInput = {
    args: {
        label: "Email"
    }
};
export const DisabledEmailInput = {
    args: {
        disabled: true,
        label: "Email",
        value: "clorian.dev@clorian.com"
    }
};
export const EmailInputWithLabels = {
    args: {
        label: "Email",
        subLabel: "Enter a new email"
    }
};
export const EmailInputWithLabelsRow = {
    args: {
        direction: "row",
        label: "Email",
        subLabel: "Enter a new email"
    }
};
export const EmailInputWithPlaceholder = {
    args: {
        label: "Email",
        placeholder: "Enter a new email"
    }
};
export const EmailInputWithError = {
    args: {
        label: "Email",
        errorText: "Something bad happened",
        isThereError: true
    }
};
