import type { StoryObj } from "@storybook/react";
import { ImageUpload } from "../components";
declare const meta: {
    title: string;
    component: typeof ImageUpload;
    tags: string[];
    args: {
        withImage: false;
        onChange: undefined;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultImageUpload: Story;
export declare const ImageUploadWitValue: Story;
export declare const ImageUploadWithPreview: Story;
export declare const ImageUploadWithErrors: Story;
