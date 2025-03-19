import { useState } from "react";
const getOneCharacter = (value) => {
    const firstChar = value ? value.substring(0, 1) : undefined;
    return firstChar;
};
const UseVerificationInput = ({ props }) => {
    const [codeValue, setCodeValue] = useState(getOneCharacter(props.value?.toString()));
    const onChangeCode = (e) => {
        const { target } = e;
        if (props.onChange) {
            props.onChange(e);
        }
        else {
            if (target.value !== "")
                setCodeValue(target.value);
        }
    };
    return { onChangeCode, codeValue };
};
export default UseVerificationInput;
