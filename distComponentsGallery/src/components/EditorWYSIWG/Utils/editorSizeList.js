import ReactQuill from "react-quill";
const editorSizeList = () => {
    const Size = ReactQuill.Quill.import("attributors/style/size");
    Size.whitelist = [
        "8px",
        "10px",
        "12px",
        "14px",
        "16px",
        "18px",
        "24px",
        "32px",
        "40px"
    ];
    ReactQuill.Quill.register(Size, true);
};
export default editorSizeList;
