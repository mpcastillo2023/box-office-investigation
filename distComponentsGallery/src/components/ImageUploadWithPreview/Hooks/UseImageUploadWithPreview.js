import { useEffect, useState } from "react";
const UseImageUploadWithPreview = (props) => {
    const { value } = props;
    const [image, setImage] = useState(value);
    useEffect(() => {
        setImage(value);
    }, [value]);
    const handleClean = () => {
        setImage(undefined);
    };
    return { handleClean, image, setImage };
};
export default UseImageUploadWithPreview;
