export type SelectOption = {
    optionValue: string | number | boolean;
    optionText: string | React.ReactNode;
    optionAvailability?: boolean;
    disabled?: boolean;
};
export type customStyleClasses = {
    selectedOption?: string;
    optionList?: string;
    optionListItem?: string;
    placeholder?: string;
    dropdownWrapper?: string;
    dropdownElement?: string;
    dropdownContent?: string;
    activeOption?: string;
    searchSelect?: string;
};
export type Translations = {
    enabledLabel: string | React.ReactNode;
    disabledLabel: string | React.ReactNode;
};
