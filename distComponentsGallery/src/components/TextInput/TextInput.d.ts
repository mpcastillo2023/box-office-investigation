import React, { RefCallback } from "react";
type Props = {
    /**
     * The variant of the input field, currently supporting only "basic."
     * @param {"basic"}
     */
    variant?: "basic";
    /**
     * Indicates whether there is an error in the input field.
     * @param {boolean}
     */
    isThereError?: boolean;
    /**
     * A callback to handle the reference to the underlying input element.
     * @param {RefCallback<HTMLInputElement>}
     */
    refCallback?: RefCallback<HTMLInputElement>;
};
/**
 * TextInput component provides a text input field with optional label and sublabel.
 * It supports a basic variant and error handling with customizable error text.
 * Additionally, it accepts a callback for handling a reference to the underlying input element.
 *
 * @param {Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">} props - Props for the TextInput component.
 * @returns {JSX.Element}
 */
declare const TextInput: ({ variant, isThereError, className, refCallback, ...props }: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">) => React.JSX.Element;
export default TextInput;
