import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: {
        placeholder?: string;
        customPlaceholder?: import("react").ReactNode;
        className?: string;
        onChange?: (value: string) => void;
        disabled?: boolean;
        debounce?: boolean;
        defaultValue?: string;
        value?: string;
        iconPosition?: "start" | "final";
        hasClearButton?: boolean;
        searchRef?: import("react").RefObject<HTMLInputElement>;
        searchContainerRef?: import("react").LegacyRef<HTMLFormElement>;
        ariaLabel?: string;
    } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "onChange">) => import("react").JSX.Element;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSearch: Story;
export declare const DisabledSearch: Story;
export declare const SearchIconStart: Story;
export declare const SearchWithPlaceholder: Story;
