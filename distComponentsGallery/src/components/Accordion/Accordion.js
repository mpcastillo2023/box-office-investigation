import React from "react";
import styles from "./Styles/styles.module.scss";
import ChevronDown from "@cg-icons/ChevronDown.svg";
import ChevronUp from "@cg-icons/ChevronUp.svg";
import UseAccordion from "./Hooks/UseAccordion";
/**
 * Accordion component provides an expandable and collapsible content area, controlled by the user.
 * It's often used to display large sections of information in a concise and compact manner.
 *
 * @param {AccordionPros} props - Props for the Accordion component.
 * @returns {JSX.Element}
 * */
const Accordion = ({ role, body, title, testId, onClickEvent, tabIndex, children, className, toggleEdit, expandIcon = React.createElement(ChevronUp, null), collapseIcon = React.createElement(ChevronDown, null), expanded = false, variant = "primary", shouldDisplayIcon = true, customStyleClasses, ...props }) => {
    const { handleisOpenAccordion, accordionRef, accordionId, isOpen, heightForElement, bodyRef } = UseAccordion(expanded);
    return (React.createElement("div", { className: `${className ? className : styles.accordionContainer}  ${variant === "simple" ? styles.accordionContainerSimple : ""} ${customStyleClasses?.accordionContainer || ""}`, onClick: (e) => {
            if (onClickEvent) {
                onClickEvent(e);
            }
        }, role: role, "data-testid": testId, "aria-expanded": !isOpen, id: `${accordionId}-accordion`, tabIndex: tabIndex, ref: accordionRef, ...props },
        React.createElement("div", { className: `${styles.header} ${customStyleClasses?.header || ""}` },
            React.createElement("div", { onClick: (e) => handleisOpenAccordion(e), className: `${styles.titleContainer} ${customStyleClasses?.titleContainer || ""} ${variant === "simple" ? styles.titleContainerSimple : ""}`, "aria-controls": `${accordionId}-accordion` },
                React.createElement("div", { className: `${styles.title} ${customStyleClasses?.title || ""}` }, title)),
            shouldDisplayIcon ? (React.createElement("div", { className: styles.iconsContainer },
                toggleEdit ? (React.createElement("div", { className: styles.icons }, toggleEdit)) : null,
                React.createElement("div", { onClick: (e) => handleisOpenAccordion(e), className: `${styles.icons} ${variant === "simple" ? styles.iconsSimple : ""}` }, !isOpen ? expandIcon : collapseIcon))) : null),
        React.createElement("div", { ref: bodyRef, className: `${styles.bodyContainer} ${customStyleClasses?.bodyContainer || ""}`, style: {
                maxHeight: heightForElement
            } }, body ? body : children)));
};
export default Accordion;
