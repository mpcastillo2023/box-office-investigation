import type { StoryObj } from "@storybook/react";
import React from "react";
import ServerTable from "@cg-components/ServerTable/ServerTable";
type Language = {
    languageId: number;
    languageCode: string;
    countryCode: string;
    name: string;
    displayOrder: number;
    defaultLanguage: boolean;
    id: number;
    visible: boolean;
};
declare const meta: {
    title: string;
    component: typeof ServerTable;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        totalPages: number;
        isFetching: boolean;
        displayData?: object[] | undefined;
        columns: import("..").Column[];
        page: number;
        rowsPerPage: number;
        hasSearch?: boolean | undefined;
        filters?: import("..").TableFilters | undefined;
        queryParams: Record<string, number | string | boolean>;
        setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
        translations?: import("../components/ServerTable/Types/Types").Translations | undefined;
        tagText?: string | React.ReactNode;
        initialPageIsZero?: boolean | undefined;
        totalItems: number;
        downloadCallBack?: (() => void) | undefined;
        mobileAccordionColumnKey: string | number | symbol;
        onClickCellHandler?: ((data: object) => void) | undefined;
    }>, props: import("@storybook/csf").StoryContext<import("@storybook/react").ReactRenderer, {
        totalPages: number;
        isFetching: boolean;
        displayData?: object[] | undefined;
        columns: import("..").Column[];
        page: number;
        rowsPerPage: number;
        hasSearch?: boolean | undefined;
        filters?: import("..").TableFilters | undefined;
        queryParams: Record<string, number | string | boolean>;
        setQueryParams: React.Dispatch<React.SetStateAction<Record<string, number | string | boolean>>>;
        translations?: import("../components/ServerTable/Types/Types").Translations | undefined;
        tagText?: string | React.ReactNode;
        initialPageIsZero?: boolean | undefined;
        totalItems: number;
        downloadCallBack?: (() => void) | undefined;
        mobileAccordionColumnKey: string | number | symbol;
        onClickCellHandler?: ((data: object) => void) | undefined;
    }>) => React.JSX.Element)[];
    args: {
        columns: {
            name: string;
            label: string;
            options: {
                filter: boolean;
                sort: boolean;
            };
        }[];
        displayData: Language[];
        isFetching: true;
        page: number;
        rowsPerPage: number;
        setQueryParams: () => void;
        queryParams: {};
        totalPages: number;
        totalItems: number;
        mobileAccordionColumnKey: string;
    };
    argTypes: {
        setQueryParams: {
            table: {
                disable: true;
            };
        };
        queryParams: {
            table: {
                disable: true;
            };
        };
        isFetching: {
            table: {
                disable: true;
            };
        };
        totalPages: {
            table: {
                disable: true;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithSearch: Story;
export declare const WithFilters: Story;
