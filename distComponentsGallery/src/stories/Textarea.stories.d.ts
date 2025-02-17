import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ variant, isThereError, className, refCallback, ...props }: {
        variant?: "basic";
        isThereError?: boolean;
        refCallback?: import("react").RefCallback<HTMLTextAreaElement>;
    } & import("react").DetailedHTMLProps<Omit<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, "type">, HTMLTextAreaElement>) => import("react").JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultTextarea: Story;
