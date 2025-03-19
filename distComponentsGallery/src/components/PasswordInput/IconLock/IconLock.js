import React from "react";
import Lock from "@cg-icons/Lock.svg";
export const IconLock = ({ icon }) => {
    return React.createElement("span", null, icon ? icon : React.createElement(Lock, null));
};
