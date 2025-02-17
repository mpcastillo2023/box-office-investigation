import { ComponentProps } from "react";
import ImageUpload from "../ImageUpload";
type UseImageUploadProps = ComponentProps<typeof ImageUpload>;
declare const UseImageUpload: (props: UseImageUploadProps) => {
    image: string | undefined;
    setImage: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    setImageName: import("react").Dispatch<import("react").SetStateAction<string>>;
    imageName: string;
    handleChooseImage: (imageInputRef: React.MutableRefObject<HTMLInputElement | null>) => void;
    handleChangeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default UseImageUpload;
