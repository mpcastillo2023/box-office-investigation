import { useState } from "react";
const UseEmailInput = (props) => {
    const { onChange } = props;
    const [emailValue, setEmailValue] = useState("");
    const onChangeEmail = (e) => {
        const { target } = e;
        if (onChange) {
            onChange(e);
        }
        else {
            setEmailValue(target.value);
        }
    };
    return { onChangeEmail, emailValue };
};
export default UseEmailInput;
