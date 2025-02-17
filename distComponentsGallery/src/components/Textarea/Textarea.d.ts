import React, { RefCallback } from "react";
type Props = {
    /**
     * The variant of the textarea, currently supporting only "basic."
     * @param {"basic"}
     */
    variant?: "basic";
    /**
     * Indicates whether there is an error in the textarea.
     * @param {boolean}
     */
    isThereError?: boolean;
    /**
     * A callback to handle the reference to the underlying textarea.
     * @param {RefCallback<HTMLTextAreaElement>}
     */
    refCallback?: RefCallback<HTMLTextAreaElement>;
};
declare const Textarea: ({ variant, isThereError, className, refCallback, ...props }: Props & React.DetailedHTMLProps<Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "type">, HTMLTextAreaElement>) => React.JSX.Element;
export default Textarea;
