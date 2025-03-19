import React, { useRef } from "react";
import Clip from "@cg-icons/Clip.svg";
import styles from "./Styles/styles.module.scss";
import UseImageUpload from "./Hooks/UseImageUpload";
import { Button } from "..";
/**
 * ImageUpload component allows users to select and upload an image file.
 * It supports both display modes: with and without image preview.
 * Additional properties like label, subLabel, placeholder, and value can be customized.
 * The component also supports disabled state and provides onChange handlers for managing the selected image.
 *
 * @param {Props} props - Props for the ImageUpload component.
 * @returns {JSX.Element}
 */
export default function ImageUpload(props) {
    const { disabled = false, placeholder = "Attach image", isThereError = false, withImage = false, customClassName } = props;
    const { image, imageName, handleChooseImage, handleChangeImage } = UseImageUpload(props);
    const imageInput = useRef(null);
    const disabledClass = disabled ? styles.disabledInput : "";
    const errorClass = isThereError ? styles["inputError"] : "";
    const hasImagePreview = withImage ? styles.withImagePreviewContainer : "";
    const labelImageSize = withImage ? styles.imageInputLabelSize : "";
    return (React.createElement("div", { className: `${styles.imageUploadContainer}  ${disabledClass} 
      ${customClassName?.imageContainer}` },
        React.createElement("div", { className: hasImagePreview },
            image && withImage ? (React.createElement(Button, { className: styles.withImagePreviewButton, onClick: () => handleChooseImage(imageInput) },
                React.createElement("img", { src: image, className: `${styles.withImagePreview} ${props.imageClass || ""}`, style: props.imageStyle, "data-testid": "image-upload-preview-image" }))) : null,
            React.createElement("div", { className: `${styles.visibleInputContainer} ${errorClass} ${customClassName?.visibleInput}` },
                React.createElement("span", { className: `${styles.imageInputLabel} ${labelImageSize}` },
                    React.createElement(Clip, null)),
                React.createElement("div", { className: styles.imageInput }, imageName ? imageName : placeholder),
                React.createElement("input", { "data-testid": "image-upload-input", type: "file", className: `${styles.hiddenInput} ${customClassName?.input}`, accept: "image/jpeg, image/png, image/jpg", disabled: disabled, ref: imageInput, onChange: handleChangeImage })))));
}
