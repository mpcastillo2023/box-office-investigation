import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, subLabel, className, placeholder, errorText, isThereError, type, icon, direction, ...props }: {
        type?: "email" | "text";
        label?: import("react").ReactNode;
        subLabel?: import("react").ReactNode;
        className?: string;
        placeholder?: string;
        errorText?: string;
        isThereError?: boolean;
        icon?: import("react").ReactNode;
        direction?: "row" | "column";
        customStyles?: import("../components/EmailInput/Types/Types").CustomStyles;
    } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type">) => import("react").JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultEmailInput: Story;
export declare const DisabledEmailInput: Story;
export declare const EmailInputWithLabels: Story;
export declare const EmailInputWithLabelsRow: Story;
export declare const EmailInputWithPlaceholder: Story;
export declare const EmailInputWithError: Story;
