import { ImageUpload } from "../components";
const meta = {
    title: "ImageUpload",
    component: ImageUpload,
    tags: ["autodocs"],
    args: {
        withImage: false,
        onChange: undefined
    }
};
export default meta;
export const DefaultImageUpload = {
    args: {}
};
export const ImageUploadWitValue = {
    args: {
        value: "https://clorian.kinsta.cloud/wp-content/uploads/2020/05/sagradafamilia.png"
    }
};
export const ImageUploadWithPreview = {
    args: {
        value: "https://clorian.kinsta.cloud/wp-content/uploads/2020/05/sagradafamilia.png",
        withImage: true
    }
};
export const ImageUploadWithErrors = {
    args: {
        isThereError: true,
        errorText: "Image required",
        value: "https://clorian.kinsta.cloud/wp-content/uploads/2020/05/sagradafamilia.png"
    }
};
