import React, { useState } from "react";
import { Checkbox } from "../components";
const meta = {
    title: "Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    args: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange: undefined
    }
};
export default meta;
export const PrimaryCheckbox = {
    args: {
        onChange: undefined,
        value: true
    }
};
export const DisabledCheckbox = {
    args: {
        onChange: undefined,
        disabled: true,
        value: true
    }
};
export const StatusTextCheckbox = {
    decorators: [
        (Story, props) => {
            const [toggle, setToggle] = useState(true);
            return (React.createElement(Story, { args: {
                    ...props.args,
                    onChange: () => setToggle((prev) => !prev),
                    value: toggle,
                    textBeside: toggle ? "Enable" : "Disabled"
                } }));
        },
        (Story, props) => {
            return React.createElement(Story, { props: props });
        }
    ],
    args: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange: () => { }
    }
};
