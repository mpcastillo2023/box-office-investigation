import { ImageUploadWithPreview } from "../components";
const meta = {
    title: "ImageUploadWithPreview",
    component: ImageUploadWithPreview,
    tags: ["autodocs"],
    args: {
        onChange: undefined,
        imageUploadedTitle: "Imagen",
        imagePreviewTitle: "Previsualización de Google",
        placeholder: "Arrastra o suelta una imagen. Click para buscar",
        imageUploadedFormatsInfo: "Formatos permitidos: PNG, JPG",
        imageUploadedMaxSizeInfo: "Medida máx: 25MB"
    }
};
export default meta;
export const DefaultPreviewImage = {
    args: {}
};
export const DefaultPreviewImageWithImage = {
    args: {
        value: "https://picsum.photos/400/400"
    }
};
export const DefaultPreviewImageWithCleanButton = {
    args: {
        hasCleanButton: true,
        value: "https://picsum.photos/400/400"
    }
};
