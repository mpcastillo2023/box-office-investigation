import { useState } from "react";
import { removeAccents } from "../Helper/removeAccents";
export default function UseSearch({ columns }) {
    const [rightSearch, setRightSearch] = useState("");
    const [leftSearch, setLeftSearch] = useState("");
    let leftDisplay = columns["leftColumn"];
    let rightDisplay = columns["rightColumn"];
    if (rightSearch) {
        rightDisplay = columns["rightColumn"].filter((item) => removeAccents(item.text).includes(removeAccents(rightSearch)));
    }
    if (leftSearch) {
        leftDisplay = columns["leftColumn"].filter((item) => removeAccents(item.text).includes(removeAccents(leftSearch)));
    }
    return {
        leftDisplay,
        rightDisplay,
        setLeftSearch,
        setRightSearch
    };
}
