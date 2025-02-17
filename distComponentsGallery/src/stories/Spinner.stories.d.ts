import type { StoryObj } from "@storybook/react";
import { Spinner } from "../components";
declare const meta: {
    title: string;
    component: typeof Spinner;
    tags: string[];
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultSpinner: Story;
