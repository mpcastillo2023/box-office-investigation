import { useState } from "react";
function UsePasswordInput({ props }) {
    const { onChange } = props;
    const [inputType, setInputType] = useState("password");
    const [valuePassword, setValuePassword] = useState("");
    const handleToggle = (e) => {
        e.preventDefault();
        setInputType((prev) => (prev === "password" ? "text" : "password"));
    };
    const onChangePassword = (e) => {
        const { target } = e;
        if (onChange) {
            onChange(e);
        }
        else {
            setValuePassword(target.value);
        }
    };
    return { inputType, onChangePassword, valuePassword, handleToggle };
}
export default UsePasswordInput;
