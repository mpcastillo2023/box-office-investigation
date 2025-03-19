import React, { useState } from "react";
import { NumberInput } from "../components";
const meta = {
    title: "NumberInput",
    component: NumberInput,
    tags: ["autodocs"],
    decorators: [
        (Story, props) => {
            const [valueNumber, setValueNumber] = useState();
            return (React.createElement(Story, { args: {
                    ...props.args,
                    onChange: (value) => {
                        setValueNumber(value);
                    },
                    value: valueNumber,
                    maxValue: 100
                } }));
        },
        (Story, props) => {
            return React.createElement(Story, { props: props });
        }
    ],
    args: {
        value: 10
    }
};
export default meta;
export const DefaultNumberInput = {
    decorators: [
        (Story, props) => {
            const [valueNumber, setValueNumber] = useState(0);
            return (React.createElement(Story, { args: {
                    ...props.args,
                    onChange: (value) => {
                        setValueNumber(value);
                    },
                    value: valueNumber
                } }));
        },
        (Story, props) => {
            return React.createElement(Story, { props: props });
        }
    ],
    args: {}
};
export const NumberInputWithTextBeside = {
    args: {
        textBeside: "Min.",
        value: 10
    }
};
export const NumberInputWithPlaceholder = {
    args: {
        textBeside: "Min.",
        placeholder: "Enter Min",
        value: 10
    }
};
