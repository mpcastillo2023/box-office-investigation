import React from "react";
import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageUploadWithPreview from "../ImageUploadWithPreview";
import { expect, test, describe } from "vitest";
describe("Upload image files", () => {
    test("Image component should be rendered", async () => {
        render(React.createElement(ImageUploadWithPreview, { imagePreviewTitle: "Google image preview", imageUploadedTitle: "Imagen" }));
        const [imageUpload, imagePreview] = screen.getAllByRole("heading");
        expect(imageUpload).toHaveTextContent(/imagen/i);
        expect(imagePreview).toHaveTextContent(/Google image preview/i);
    });
    test("Image component should display uploaded and preview image", async () => {
        const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
        const { getByTestId } = render(React.createElement(ImageUploadWithPreview, { imagePreviewTitle: "Google image preview", imageUploadedTitle: "Imagen" }));
        const uploader = getByTestId("image-upload-input");
        fireEvent.change(uploader, {
            target: { files: [file] }
        });
        await screen.findByTestId("image-upload-preview");
    });
    test("Image component should clean the current image", async () => {
        const user = userEvent.setup();
        const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
        const { getByTestId } = render(React.createElement(ImageUploadWithPreview, { imagePreviewTitle: "Google image preview", imageUploadedTitle: "Imagen", hasCleanButton: true }));
        const uploader = getByTestId("image-upload-input");
        fireEvent.change(uploader, {
            target: { files: [file] }
        });
        await screen.findByTestId("image-upload-preview");
        const cleanButton = screen.getByRole("button");
        expect(cleanButton).toBeInTheDocument();
        await user.click(cleanButton);
        waitFor(() => {
            expect(uploader).toHaveDisplayValue("");
        });
    });
});
