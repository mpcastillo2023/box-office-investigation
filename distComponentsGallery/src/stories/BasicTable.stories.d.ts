import { BasicTable } from "@cg-components/index";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: typeof BasicTable;
    tags: string[];
    args: {
        columns: {
            name: string;
            label: string;
        }[];
        displayData: {
            taxId: number;
            name: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BasicTableExample: Story;
