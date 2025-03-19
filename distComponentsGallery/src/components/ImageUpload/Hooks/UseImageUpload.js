import { useEffect, useState } from "react";
const UseImageUpload = (props) => {
    const { value, saveAsImageName, onChange } = props;
    const [image, setImage] = useState(value);
    const [imageName, setImageName] = useState(value?.toString() || "");
    const handleChooseImage = (imageInputRef) => {
        const { current } = imageInputRef;
        current?.click();
    };
    const handleChangeImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            const newFileData = event.target.files[0];
            let saveImage;
            if (saveAsImageName) {
                saveImage = newFileData.name;
            }
            reader.addEventListener("load", () => {
                // convert image file to base64 string
                setImageName(newFileData.name);
                if (onChange) {
                    if (!saveAsImageName) {
                        onChange(reader.result?.toString() || "");
                        return;
                    }
                    onChange(saveImage);
                }
                else {
                    if (!saveImage || saveImage === "") {
                        setImage(reader.result?.toString());
                        return;
                    }
                    setImage(saveImage);
                }
            }, false);
            reader.readAsDataURL(newFileData);
        }
    };
    useEffect(() => {
        setImage(value);
    }, [value]);
    return {
        image,
        setImage,
        setImageName,
        imageName,
        handleChooseImage,
        handleChangeImage
    };
};
export default UseImageUpload;
