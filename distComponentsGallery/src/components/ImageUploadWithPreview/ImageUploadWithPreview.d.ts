import React from "react";
type Props = {
    /**
     * Optional callback function that receives the selected image data in base64 string format.
     * @param {(image: string | ArrayBuffer | null) => void}
     */
    onChange?: (image: string | ArrayBuffer | null) => void;
    /**
     * A boolean to define whether the image upload functionality is disabled. Defaults to false.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Optional Image top title to be displayed above the main image upload.
     * @type {string | React.ReactNode}
     */
    imageUploadedTitle?: string | React.ReactNode;
    /**
     * Optional Image top title to be displayed above the main image preview upload.
     * @type {string | React.ReactNode}
     */
    imagePreviewTitle?: string | React.ReactNode;
    /**
     * A boolean to define whether the image upload functionality can clean the actual image. Defaults to false.
     * @param {boolean}
     */
    hasCleanButton?: boolean;
    /**
     * Optional place message to be displayed the main image.
     * @param {string | React.ReactNode}
     */
    placeholder?: string | React.ReactNode;
    /**
     * Default value for the image upload component.
     * @param {string}
     */
    value?: string;
    /**
     * Optional Image information format to be displayed below the main image upload.
     * @type {string | React.ReactNode}
     */
    imageUploadedFormatsInfo?: string | React.ReactNode;
    /**
     * Optional Image size information to be displayed below the main image upload.
     * @type {string | React.ReactNode}
     */
    imageUploadedMaxSizeInfo?: string | React.ReactNode;
};
/**
 * ImageUploadWithPreview component allows users to select and upload an image file.
 * It display a fake "Google image preview" showing the current image selected.
 * Additional properties like label, subLabel, and value can be customized.
 * The component also supports disabled state and provides onChange handlers for managing the selected image.
 *
 * @param {Props} props - Props for the ImageUpload component.
 * @returns {JSX.Element}
 */
export default function ImageUploadWithPreview(props: Props): JSX.Element;
export {};
