import React from "react";
import TwoWayArrows from "@cg-icons/TwoWayArrows.svg";
import UploadImage from "@cg-icons/UploadImage.svg";
import ImageIcon from "@cg-icons/ImageIcon.svg";
import TrashIcon from "@cg-icons/Trash.svg";
import Star from "@cg-icons/StarFilled.svg";
import { Button } from "..";
import UseImageUploadWithPreview from "./Hooks/UseImageUploadWithPreview";
import styles from "./Styles/styles.module.scss";
/**
 * ImageUploadWithPreview component allows users to select and upload an image file.
 * It display a fake "Google image preview" showing the current image selected.
 * Additional properties like label, subLabel, and value can be customized.
 * The component also supports disabled state and provides onChange handlers for managing the selected image.
 *
 * @param {Props} props - Props for the ImageUpload component.
 * @returns {JSX.Element}
 */
export default function ImageUploadWithPreview(props) {
    const { onChange, disabled = false, hasCleanButton = false, imageUploadedTitle, imagePreviewTitle, placeholder, imageUploadedFormatsInfo, imageUploadedMaxSizeInfo } = props;
    const { handleClean, image, setImage } = UseImageUploadWithPreview(props);
    const disabledClass = disabled ? styles.disabledInput : "";
    return (React.createElement("div", { className: `${styles.imagePreviewContainer}  ${disabledClass}` },
        React.createElement("div", { className: styles.imagesContainers },
            React.createElement("div", { className: styles.boxContainer },
                React.createElement("h5", null, imageUploadedTitle),
                React.createElement("div", { className: `${styles.imageUploadContainer}` },
                    image ? (React.createElement(React.Fragment, null,
                        React.createElement("img", { src: image, alt: "img-picker", "data-testid": "image-upload" }),
                        hasCleanButton ? (React.createElement(Button, { variant: "empty", rounded: true, className: styles.iconTrash, disabled: disabled, onClick: (e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleClean();
                            } },
                            React.createElement(TrashIcon, null))) : null)) : (React.createElement("div", { className: styles.imageInfoContainer },
                        React.createElement("div", { className: styles.brokenFileIcon },
                            React.createElement(UploadImage, null)),
                        placeholder ? React.createElement("span", null, placeholder) : null)),
                    React.createElement("input", { "data-testid": "image-upload-input", type: "file", className: styles.hiddenInput, disabled: disabled, accept: "image/jpeg, image/png, image/jpg", onChange: (e) => {
                            if (e.target.files && e.target.files[0]) {
                                const reader = new FileReader();
                                const newFileData = e.target.files[0];
                                const imageSize = newFileData.size / 1024;
                                if (Math.trunc(imageSize) >= 2000) {
                                    return;
                                }
                                reader.addEventListener("load", () => {
                                    if (onChange) {
                                        onChange(reader.result?.toString() || "");
                                    }
                                    else {
                                        setImage(reader.result?.toString() || "");
                                    }
                                }, false);
                                reader.readAsDataURL(newFileData);
                            }
                        } })),
                React.createElement("div", { className: styles.infoImageFile },
                    React.createElement("span", null, imageUploadedFormatsInfo),
                    React.createElement("span", null, imageUploadedMaxSizeInfo))),
            React.createElement("div", { className: styles.twoArrowsIcon },
                React.createElement(TwoWayArrows, null)),
            React.createElement("div", { className: styles.boxContainer },
                React.createElement("h5", null, imagePreviewTitle),
                React.createElement("div", { className: styles.previewContainer },
                    React.createElement("div", { className: styles.imagePlaceholdersContainer },
                        React.createElement("div", { className: styles.imagePreview }, image ? (React.createElement("img", { src: image, alt: "image uploaded", "data-testid": "image-upload-preview" })) : (React.createElement(ImageIcon, null))),
                        React.createElement("div", { className: styles.imagePlaceholders },
                            React.createElement("div", null,
                                React.createElement(ImageIcon, null)),
                            React.createElement("div", null,
                                React.createElement(ImageIcon, null)))),
                    React.createElement("div", { className: styles.imageFakeDescription },
                        React.createElement("div", { className: styles.divider }),
                        React.createElement("div", { className: styles.boxWrapper },
                            React.createElement("div", { className: styles.box }),
                            React.createElement("div", { className: styles.box }),
                            React.createElement("div", { className: styles.box }),
                            React.createElement("div", { className: styles.box })),
                        React.createElement("div", { className: styles.starsWrapper },
                            React.createElement("div", { className: styles.divider }),
                            React.createElement("div", { className: styles.stars },
                                React.createElement(Star, null),
                                React.createElement(Star, null),
                                React.createElement(Star, null),
                                React.createElement(Star, null),
                                React.createElement(Star, null)),
                            React.createElement("div", { className: styles.divider })),
                        React.createElement("div", { className: styles.divider }),
                        React.createElement("div", { className: styles.box })))))));
}
