import { Switch } from "../components";
const meta = {
    title: "Switch",
    component: Switch,
    tags: ["autodocs"],
    args: {
        onChange: undefined
    }
};
export default meta;
export const DefaultSwitch = {
    args: {}
};
export const DisabledSwitch = {
    args: {
        disabled: true
    }
};
export const DisabledCheckedSwitch = {
    args: {
        disabled: true,
        value: true
    }
};
export const CheckedSwitch = {
    args: {
        value: true
    }
};
export const LabeledSwitch = {
    args: {
        textBeside: "Enabled"
    }
};
