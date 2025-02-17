import React from "react";
import { customStyleClasses, TabList } from "./Types/Types";
type Props = {
    /**
     * The index of the initial tab to be displayed when the component mounts.
     * @param {number}
     */
    initTabView?: number;
    /**
     * An array of objects representing the tabs, each containing the tab title and the corresponding view.
     * @param {TabList[]}
     */
    tabList: TabList[];
    /**
     * Custom styling classes for various parts of the Tabs component.
     * @param {customStyleClasses}
     */
    customStyle?: customStyleClasses;
    /**
     * A callback function that is invoked when the active tab changes, receiving the index of the new active tab.
     * @param {(index: number) => void}
     */
    onChange?: (index: number) => void;
} & (withValidationTabs | withoutValidationTabs);
type withValidationTabs = {
    /**
     * A boolean indicating if the tabs should validate something
     *  @type {true}
     */
    withValidationTabs: true;
    /**
     * A boolean indicating if the tabs are available for changes
     *  @type {boolean}
     */
    shouldChange?: boolean;
    /**
     * A string that displays a message if the tabs are not available
     *  @type {string}
     */
    validationMessage: string;
    /**
     * A string that displays a title message if the tabs are not available
     *  @type {string}
     */
    validationTitleMessage?: string;
    /**
     * The text for the confirm button of the modal
     *  @type {string}
     */
    validationConfirmButtonText?: string;
    /**
     * The text for cancel button of the modal
     *  @type {string}
     */
    validationCancelButtonText?: string;
};
type withoutValidationTabs = {
    /**
     * A boolean indicating if the tabs should validate something
     *  @type {true}
     */
    withValidationTabs?: false;
    /**
     * A string that displays a title message if the tabs are not available
     *  @type {string}
     */
    validationTitleMessage?: string;
};
/**
 * Tabs component provides a tab-based navigation interface, allowing the user to switch between different views.
 * The component supports customizable styles and an optional callback for handling tab changes.
 *
 * @param {TabsProps} props - Props for the Tabs component.
 * @returns {JSX.Element}
 */
declare const Tabs: ({ tabList, initTabView, customStyle, onChange, ...props }: Props) => React.JSX.Element;
export default Tabs;
