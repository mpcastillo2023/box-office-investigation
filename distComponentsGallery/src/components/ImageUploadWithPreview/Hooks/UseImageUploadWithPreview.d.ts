import { ComponentProps } from "react";
import ImageUploadWithPreview from "../ImageUploadWithPreview";
type UseImageUploadWithPreviewProps = ComponentProps<typeof ImageUploadWithPreview>;
declare const UseImageUploadWithPreview: (props: UseImageUploadWithPreviewProps) => {
    handleClean: () => void;
    image: string | undefined;
    setImage: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
};
export default UseImageUploadWithPreview;
