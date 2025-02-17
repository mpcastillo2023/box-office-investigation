import React, { ReactNode } from "react";
import { CustomStyleClasses } from "./Types/types";
type AccordionProps = {
    /** The title or header of the Accordion. */
    title: ReactNode;
    /** The main content to be displayed inside the Accordion. */
    children: ReactNode;
    /** Custom icon to be displayed when the Accordion is expanded. */
    collapseIcon?: ReactNode;
    /** Custom icon to be displayed when the Accordion is collapsed. */
    expandIcon?: ReactNode;
    /** Additional body content for the Accordion. */
    body?: ReactNode;
    /** Custom edit toggle component. */
    toggleEdit?: ReactNode;
    /** Additional class name for the Accordion. */
    className?: string;
    /** Whether the Accordion is initially expanded or not. */
    expanded?: boolean;
    /** Click event handler for the Accordion. */
    onClickEvent?: React.MouseEventHandler<HTMLDivElement>;
    /** ARIA role attribute to define the semantic role of the Accordion. */
    role?: React.AriaRole;
    /** Custom test id attribute. */
    testId?: string;
    /** tabIndex attribute to control the tab order of the Accordion. */
    tabIndex?: number;
    /** shouldOpen to control if the Accordion should be open or controlled by external state */
    shouldOpen?: boolean;
    /** shouldDisplayIcon to control whether the icons beside the title should be displayed */
    shouldDisplayIcon?: boolean;
    /**
     * Optional variant for styling the Accordion.
     * @param {"primary" | "simple"}
     */
    variant?: "primary" | "simple";
    /** custom css classes to overwrite */
    customStyleClasses?: CustomStyleClasses;
};
/**
 * Accordion component provides an expandable and collapsible content area, controlled by the user.
 * It's often used to display large sections of information in a concise and compact manner.
 *
 * @param {AccordionPros} props - Props for the Accordion component.
 * @returns {JSX.Element}
 * */
declare const Accordion: ({ role, body, title, testId, onClickEvent, tabIndex, children, className, toggleEdit, expandIcon, collapseIcon, expanded, variant, shouldDisplayIcon, customStyleClasses, ...props }: AccordionProps) => React.JSX.Element;
export default Accordion;
