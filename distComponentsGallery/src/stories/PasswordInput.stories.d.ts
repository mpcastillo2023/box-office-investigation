import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ label, subLabel, className, placeholder, errorText, isThereError, icon, togglePassword, direction, customStyles, ...props }: {
        label?: React.ReactNode;
        subLabel?: React.ReactNode;
        className?: string;
        placeholder?: string;
        errorText?: string;
        isThereError?: boolean;
        icon?: React.ReactNode;
        togglePassword?: boolean;
        direction?: "row" | "column";
        customStyles?: import("../components/PasswordInput/Types/Types").CustomStyles;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">) => React.JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultPasswordInput: Story;
export declare const ControlledPasswordInput: Story;
export declare const DisabledPasswordInput: Story;
export declare const PasswordInputWithLabels: Story;
export declare const PasswordInputWithLabelsRow: Story;
export declare const PasswordInputWithPlaceholder: Story;
export declare const PasswordInputWithError: Story;
