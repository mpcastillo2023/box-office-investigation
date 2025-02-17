import type { StoryObj } from "@storybook/react";
import { DraggableList } from "../components";
import React from "react";
declare const meta: {
    title: string;
    component: typeof DraggableList;
    tags: string[];
    args: {
        list: ({
            item: React.JSX.Element;
            key: number;
            searchBy: string;
            disabled: true;
        } | {
            item: React.JSX.Element;
            key: number;
            searchBy: string;
            disabled?: undefined;
        })[];
        shouldDisplayKey: false;
        onChangeSortingOrder: () => void;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithSearch: Story;
export declare const WithItemIds: Story;
export declare const WithButtons: Story;
