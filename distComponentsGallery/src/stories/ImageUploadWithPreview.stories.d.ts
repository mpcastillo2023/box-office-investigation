import type { StoryObj } from "@storybook/react";
import { ImageUploadWithPreview } from "../components";
declare const meta: {
    title: string;
    component: typeof ImageUploadWithPreview;
    tags: string[];
    args: {
        onChange: undefined;
        imageUploadedTitle: string;
        imagePreviewTitle: string;
        placeholder: string;
        imageUploadedFormatsInfo: string;
        imageUploadedMaxSizeInfo: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultPreviewImage: Story;
export declare const DefaultPreviewImageWithImage: Story;
export declare const DefaultPreviewImageWithCleanButton: Story;
