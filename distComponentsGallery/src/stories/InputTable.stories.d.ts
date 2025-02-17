import InputTable from "@cg-components/InputTable/InputTable";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: typeof InputTable;
    tags: string[];
    args: {
        columns: ({
            name: string;
            label: string;
            cellType: "number";
        } | {
            name: string;
            label: string;
            cellType: "string";
        })[];
        data: {
            taxId: number;
            name: string;
        }[];
        withActionColumn: true;
        actionColumnText: string;
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const InputTableWithActions: Story;
export declare const InputTableWithoutActions: Story;
export declare const InputTableWithtActionsAndCallBack: Story;
export declare const InputTableWithSearch: Story;
export declare const InputTableWithSearchAndRemoveAllButton: Story;
