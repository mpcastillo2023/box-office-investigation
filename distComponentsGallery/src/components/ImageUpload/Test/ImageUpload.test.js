import { fireEvent, render } from "@testing-library/react";
import ImageUpload from "../ImageUpload";
import React from "react";
import { expect, test, describe } from "vitest";
describe("Upload image files", () => {
    test("cover photo upload", async () => {
        const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
        const { getByTestId } = render(React.createElement(ImageUpload, { withImage: true }));
        const uploader = getByTestId("image-upload-input");
        fireEvent.change(uploader, {
            target: { files: [file] }
        });
        const image = document.querySelector("input");
        if (!image)
            throw new Error("No input found");
        const imageFiles = image.files;
        if (!imageFiles)
            throw new Error("No image found");
        expect(imageFiles[0].name).toBe("chucknorris.png");
        expect(imageFiles.length).toBe(1);
        expect(imageFiles.length).toBe(1);
    });
    test("Should display an image if value exists", async () => {
        const { getByTestId } = render(React.createElement(ImageUpload, { withImage: true, value: "https://clorian.kinsta.cloud/wp-content/uploads/2020/05/sagradafamilia.png" }));
        expect(getByTestId("image-upload-preview-image")).toBeInTheDocument();
    });
    test("Should display an image name if value exists", async () => {
        const value = "https://clorian.kinsta.cloud/wp-content/uploads/2020/05/sagradafamilia.png";
        const { getByText } = render(React.createElement(ImageUpload, { value: value }));
        expect(getByText(value)).toBeInTheDocument();
    });
});
