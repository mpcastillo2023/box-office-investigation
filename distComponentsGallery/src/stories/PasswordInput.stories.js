import React, { useState } from "react";
import { PasswordInput } from "../components";
const meta = {
    title: "PasswordInput",
    component: PasswordInput,
    tags: ["autodocs"],
    args: {}
};
export default meta;
export const DefaultPasswordInput = {
    args: {
        label: "Password"
    }
};
export const ControlledPasswordInput = {
    decorators: [
        (Story, props) => {
            const [value, setValue] = useState("123");
            return (React.createElement(Story, { args: {
                    ...props.args,
                    onChange: (e) => {
                        setValue(e.target.value);
                    },
                    disabled: true,
                    value
                } }));
        },
        (Story, props) => {
            return React.createElement(Story, { props: props });
        }
    ],
    args: {}
};
export const DisabledPasswordInput = {
    args: {
        disabled: true,
        label: "Password",
        value: "123"
    }
};
export const PasswordInputWithLabels = {
    args: {
        label: "Password",
        subLabel: "Enter a new password"
    }
};
export const PasswordInputWithLabelsRow = {
    args: {
        direction: "row",
        label: "Password",
        subLabel: "Enter a new password",
        errorText: "Something bad happened",
        isThereError: true
    }
};
export const PasswordInputWithPlaceholder = {
    args: {
        label: "Password",
        placeholder: "Enter password"
    }
};
export const PasswordInputWithError = {
    args: {
        label: "Password",
        errorText: "Something bad happened",
        isThereError: true
    }
};
