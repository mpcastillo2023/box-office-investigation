import type { StoryObj } from "@storybook/react";
import { TransferlistItemColumns } from "@cg-components/Transferlist/Types/Types";
declare const meta: {
    title: string;
    component: ({ onChange, leftColumnTitle, rightColumnTitle, disabled, showOnlyRightColumn, defaultColumns, hasCheckbox, searchPlaceholder, addAllButtonText, removeAllButtonText, disabledColumns, value, customStyle }: {
        onChange: (columns: TransferlistItemColumns) => void;
        leftColumnTitle?: string;
        rightColumnTitle?: string;
        disabled?: boolean;
        showOnlyRightColumn?: boolean;
        defaultColumns?: TransferlistItemColumns;
        value?: TransferlistItemColumns;
        hasCheckbox?: boolean;
        searchPlaceholder?: string;
        addAllButtonText?: string;
        removeAllButtonText?: string;
        disabledColumns?: ("leftColumn" | "rightColumn")[];
        customStyle?: import("@cg-components/Transferlist/Types/Types").CustomStyleClasses;
    }) => import("react").JSX.Element;
    tags: string[];
    args: {
        defaultColumns: TransferlistItemColumns;
        leftColumnTitle: string;
        rightColumnTitle: string;
        onChange: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithoutCheckbox: Story;
export declare const WithCheckbox: Story;
export declare const DisabledRightColumn: Story;
export declare const ShowOnlyRightColumn: Story;
