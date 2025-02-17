import React from "react";
import { CustomClassName } from "./Types/Types";
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
     * Optional placeholder text to be displayed inside the image upload input. Defaults to "Attach files".
     * @param {string}
     */
    placeholder?: string;
    /**
     * Default value for the image upload component.
     * @param {string}
     */
    value?: string;
    /**
     * Save image as name
     * @param {string}
     */
    saveAsImageName?: boolean;
    /**
     * custom classes to style elements in the input .
     * @param {CustomClassName}
     */
    customClassName?: CustomClassName;
    /**
     * A boolean that indicates whether the uploaded image should be displayed as a preview.
     * @param {true}
     */
    withImage?: boolean;
    /**
     * Optional CSS styles for the image preview.
     * @param {React.CSSProperties}
     */
    imageStyle?: React.CSSProperties;
    /**
     * Optional CSS class for the image preview.
     * @param {string}
     */
    imageClass?: string;
    /**
     * If true, applies error styling to the input.
     * @param {boolean}
     */
    isThereError?: boolean;
    /**
     * Error message text displayed below the input.
     * @param {string}
     */
    errorText?: string;
};
/**
 * ImageUpload component allows users to select and upload an image file.
 * It supports both display modes: with and without image preview.
 * Additional properties like label, subLabel, placeholder, and value can be customized.
 * The component also supports disabled state and provides onChange handlers for managing the selected image.
 *
 * @param {Props} props - Props for the ImageUpload component.
 * @returns {JSX.Element}
 */
export default function ImageUpload(props: Props): React.JSX.Element;
export {};
