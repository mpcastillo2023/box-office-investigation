import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: {
        onChange?: (html: string) => void;
        value?: string;
        disabled?: boolean;
        withLinkModal?: boolean;
        isNoTargetLink?: boolean;
        customFormatsHandler?: Record<string, (quill: import("../components").QuillEditor) => void>;
    }) => import("react").JSX.Element | null;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
