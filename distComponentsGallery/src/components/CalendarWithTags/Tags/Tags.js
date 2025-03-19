import React from "react";
import Close from "@cg-icons/Close.svg";
const Tags = ({ children, ...props }) => {
    return (React.createElement("button", { ...props },
        children,
        React.createElement(Close, null)));
};
export default Tags;
