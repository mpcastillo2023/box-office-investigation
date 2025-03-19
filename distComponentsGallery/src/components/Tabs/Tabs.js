import React, { useState } from "react";
import styles from "./Styles/styles.module.scss";
import { Button, Modal } from "..";
import WarningIcon from "@cg-icons/AlertWarning.svg";
/**
 * Tabs component provides a tab-based navigation interface, allowing the user to switch between different views.
 * The component supports customizable styles and an optional callback for handling tab changes.
 *
 * @param {TabsProps} props - Props for the Tabs component.
 * @returns {JSX.Element}
 */
const Tabs = ({ tabList, initTabView = 0, customStyle, onChange, ...props }) => {
    const [openTabIndex, setOpenTabIndex] = useState(initTabView);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempIndex, setTempIndex] = useState(0);
    const activeTab = tabList[openTabIndex];
    const isTabValidating = props.withValidationTabs;
    const handleTabs = (index) => {
        if (isTabValidating) {
            if (props.shouldChange) {
                setOpenTabIndex(index);
                if (onChange)
                    onChange(index);
            }
            else {
                setTempIndex(index);
                setIsModalOpen(true);
            }
        }
        else {
            setOpenTabIndex(index);
            if (onChange)
                onChange(index);
        }
    };
    const defaultTabStyles = `${styles.tabButton} ${styles.tabButton} ${customStyle?.tabButton}`;
    const activeTabStyles = `${defaultTabStyles} ${styles.isActive} ${customStyle?.isActive}`;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${styles.tabContainer} ${customStyle?.tabContainer}` }, tabList.map((tab, index) => (React.createElement(Button, { key: index, className: openTabIndex === index
                ? `${activeTabStyles}`
                : `${defaultTabStyles}`, onClick: () => handleTabs(index), role: "tab" }, tab.tabTitle)))),
        React.createElement("div", { className: customStyle?.tabView }, activeTab?.tabView),
        isTabValidating ? (React.createElement(Modal, { isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, variant: "warning", isConfirmModal: true, cancelButtonText: props.validationCancelButtonText, confirmButtonText: props.validationConfirmButtonText, onConfirmHandler: () => {
                setOpenTabIndex(tempIndex);
            }, modalTitle: React.createElement("div", { className: styles.validationHeaderContainer },
                React.createElement("div", { className: styles.alertIcon },
                    React.createElement(WarningIcon, null)),
                props.validationTitleMessage ? (React.createElement("p", { className: styles.validationTitleErrorMessage }, props.validationTitleMessage)) : null) },
            React.createElement("p", { className: styles.validationErrorMessage }, props.validationMessage))) : null));
};
export default Tabs;
