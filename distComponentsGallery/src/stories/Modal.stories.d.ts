import type { StoryObj } from "@storybook/react";
import Modal from "../components/Modal/Modal";
import * as React from "react";
declare const meta: {
    title: string;
    component: typeof Modal;
    tags: string[];
    decorators: ((Story: import("@storybook/csf").PartialStoryFn<import("@storybook/react").ReactRenderer, {
        children: React.ReactNode;
        setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
        isModalOpen: boolean;
        modalTitle?: React.ReactNode;
        customStyle?: import("../components/Modal/Types").customStyleClasses | undefined;
        isConfirmModal?: boolean | undefined;
        isConfirmValid?: boolean | undefined;
        onConfirmHandler?: (() => Promise<void> | void) | undefined;
        onCancelHandler?: (() => Promise<void> | void) | undefined;
        cancelButtonText?: string | React.ReactNode;
        confirmButtonText?: string | React.ReactNode;
        variant?: ("primary" | "warning" | "success" | "simple") | undefined;
        withCloseButton?: boolean | undefined;
    }>, props: import("@storybook/csf").StoryContext<import("@storybook/react").ReactRenderer, {
        children: React.ReactNode;
        setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
        isModalOpen: boolean;
        modalTitle?: React.ReactNode;
        customStyle?: import("../components/Modal/Types").customStyleClasses | undefined;
        isConfirmModal?: boolean | undefined;
        isConfirmValid?: boolean | undefined;
        onConfirmHandler?: (() => Promise<void> | void) | undefined;
        onCancelHandler?: (() => Promise<void> | void) | undefined;
        cancelButtonText?: string | React.ReactNode;
        confirmButtonText?: string | React.ReactNode;
        variant?: ("primary" | "warning" | "success" | "simple") | undefined;
        withCloseButton?: boolean | undefined;
    }>) => React.JSX.Element)[];
    args: {
        children: React.JSX.Element;
        setIsModalOpen: () => void;
        isModalOpen: true;
    };
    argTypes: {
        setIsModalOpen: {
            table: {
                disable: true;
            };
        };
        isModalOpen: {
            table: {
                disable: true;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultModal: Story;
export declare const DefaultModalWithFooter: Story;
export declare const WarningModal: Story;
export declare const SuccessModal: Story;
