import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ variant, isThereError, className, refCallback, ...props }: {
        variant?: "basic";
        isThereError?: boolean;
        refCallback?: import("react").RefCallback<HTMLInputElement>;
    } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type">) => import("react").JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultTextInput: Story;
export declare const DisabledTextInput: Story;
export declare const TextInputWithPlaceholder: Story;
