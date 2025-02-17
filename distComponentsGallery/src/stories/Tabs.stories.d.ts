import React, { ReactNode } from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ tabList, initTabView, customStyle, onChange, ...props }: {
        initTabView?: number;
        tabList: import("../components").TabList[];
        customStyle?: import("../components/Tabs/Types/Types").customStyleClasses;
        onChange?: (index: number) => void;
    } & ({
        withValidationTabs: true;
        shouldChange?: boolean;
        validationMessage: string;
        validationTitleMessage?: string;
        validationConfirmButtonText?: string;
        validationCancelButtonText?: string;
    } | {
        withValidationTabs?: false;
        validationTitleMessage?: string;
    })) => React.JSX.Element;
    tags: string[];
    args: {
        tabList: {
            tabTitle: ReactNode;
            tabView: ReactNode;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultTabs: Story;
export declare const SecondTabActive: Story;
