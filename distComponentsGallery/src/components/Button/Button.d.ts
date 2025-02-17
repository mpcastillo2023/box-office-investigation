import React from "react";
type Props = {
    /**
     * The children to render inside the button.
     * @param {React.ReactNode}
     */
    children: React.ReactNode;
    /**
     * The visual style variant of the button.
     * @param {"primary" | "secondary" | "empty" | "link" | "light" | ""}
     * @optional
     */
    variant?: "primary" | "secondary" | "empty" | "link" | "light" | "";
    /**
     * Define the size of the button
     * @param {"large" | "medium" | "icon" | "smallIcon"}
     */
    size?: "large" | "medium" | "icon" | "smallIcon" | "full";
    /**
     * Whether the button has rounded corners or not.
     * @param {boolean}
     * @default false
     */
    rounded?: boolean;
};
/**
 * The Button component renders a customizable button element that accepts children to be displayed inside.
 * It supports various visual style variants and an optional rounded appearance.
 *
 * @param {Props} props - Props for the Button component.
 * @returns {JSX.Element}
 */
declare const Button: ({ children, variant, rounded, size, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & Props) => React.JSX.Element;
export default Button;
