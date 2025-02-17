import type { StoryObj } from "@storybook/react";
import { DraggableMultipleLists } from "../components";
declare const meta: {
    title: string;
    component: typeof DraggableMultipleLists;
    tags: string[];
    args: {
        withButtons: false;
        onChange: undefined;
        defaultValue: {
            title: string;
            items: {
                id: number;
                itemText: string;
            }[];
            hasButton: true;
            buttonIndexToMoveTo: number;
            buttonText: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TwoColumns: Story;
export declare const MultipleColumns: Story;
